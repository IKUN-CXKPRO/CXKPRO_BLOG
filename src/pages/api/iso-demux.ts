import type { APIRoute } from "astro";
import { mkdir, writeFile, readdir, stat } from "node:fs/promises";
import { spawn } from "node:child_process";
import path from "node:path";
import crypto from "node:crypto";

const PUBLIC_STREAM_DIR = path.join(process.cwd(), "public", "streams");
const TMP_DIR = path.join("/tmp", "iso-uploads");

async function runCmd(cmd: string, args: string[]) {
  return new Promise<void>((resolve, reject) => {
    const proc = spawn(cmd, args, { stdio: ["ignore", "pipe", "pipe"] });
    proc.stdout.on("data", (d) => console.log("[iso-demux]", d.toString()));
    proc.stderr.on("data", (d) => console.log("[iso-demux]", d.toString()));
    proc.on("error", (err) => reject(err));
    proc.on("close", (code) => {
      if (code === 0) resolve();
      else reject(new Error(`${cmd} exited with ${code}`));
    });
  });
}

async function findLargestM2ts(dir: string): Promise<string | null> {
  let largestPath: string | null = null;
  let largestSize = 0;

  const entries = await readdir(dir, { withFileTypes: true });
  for (const entry of entries) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      const child = await findLargestM2ts(full);
      if (child) {
        const s = await stat(child);
        if (s.size > largestSize) {
          largestSize = s.size;
          largestPath = child;
        }
      }
    } else if (entry.isFile() && entry.name.toLowerCase().endsWith(".m2ts")) {
      const s = await stat(full);
      if (s.size > largestSize) {
        largestSize = s.size;
        largestPath = full;
      }
    }
  }
  return largestPath;
}

async function runFfmpeg(input: string, outDir: string) {
  await mkdir(outDir, { recursive: true });
  const hlsPath = path.join(outDir, "index.m3u8");

  const args = [
    "-y",
    "-loglevel",
    "info",
    "-i",
    input,
    "-map",
    "0:v:0",
    "-map",
    "0:a?",
    "-c",
    "copy",
    "-f",
    "hls",
    "-hls_time",
    "6",
    "-hls_list_size",
    "0",
    "-hls_segment_filename",
    path.join(outDir, "seg_%03d.ts"),
    hlsPath
  ];

  await runCmd("ffmpeg", args);
}

export const POST: APIRoute = async ({ request }) => {
  try {
    const form = await request.formData();
    const file = form.get("file");
    if (!(file instanceof File)) {
      return new Response(JSON.stringify({ ok: false, error: "file missing" }), { status: 400 });
    }

    const id = crypto.randomUUID();
    const ext = path.extname(file.name || "").toLowerCase();
    if (ext !== ".iso") {
      return new Response(JSON.stringify({ ok: false, error: "only iso supported" }), { status: 400 });
    }

    await mkdir(TMP_DIR, { recursive: true });
    const inputPath = path.join(TMP_DIR, `${id}${ext}`);
    const arrayBuffer = await file.arrayBuffer();
    await writeFile(inputPath, Buffer.from(arrayBuffer));

    const extractDir = path.join(TMP_DIR, id);
    await mkdir(extractDir, { recursive: true });
    await runCmd("7z", ["x", "-y", `-o${extractDir}`, inputPath]);

    const streamDir = path.join(PUBLIC_STREAM_DIR, id);
    const m2ts = await findLargestM2ts(extractDir);
    if (!m2ts) {
      return new Response(JSON.stringify({ ok: false, error: "no m2ts found in iso" }), { status: 500 });
    }
    await runFfmpeg(m2ts, streamDir);

    const hlsUrl = `/streams/${id}/index.m3u8`;
    return new Response(JSON.stringify({ ok: true, hls: hlsUrl, id }), { status: 200 });
  } catch (error) {
    console.error("[iso-demux]", error);
    return new Response(JSON.stringify({ ok: false, error: "conversion failed" }), { status: 500 });
  }
};
