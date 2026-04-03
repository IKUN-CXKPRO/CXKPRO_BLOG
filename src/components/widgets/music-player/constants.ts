import type { Song } from "./types";

export const STORAGE_KEY_VOLUME = "music-player-volume";

export const DEFAULT_VOLUME = 0.7;

export const LOCAL_PLAYLIST: Song[] = [

	{
		id: 1,
		title: "驫麤～とりぷるばか～ (骉麤～三倍的笨蛋～)",
		artist: "初音未来 (初音ミク)",
		cover: "public/assets/music/cover/驫麤～とりぷるばか.jpg.webp",
		url: "public/assets/music/music/驫麤～とりぷるばか～.mp3",
		duration: 0,
	},
	{
		id: 2,
		title: "We Are The World",
		artist: "U.S.A. For Africa",
		cover: "assets/music/cover/We Are The World - U.S.A. For Africa.jpg.webp",
		url: "assets/music/music/We Are The World - U.S.A. For Africa.mp3",
		duration: 0,
	},
	{
		id: 3,
		title: "Try",
		artist: "派伟俊&周杰伦",
		cover: "assets/music/cover/Try - 派伟俊 周杰伦.jpg.webp",
		url: "assets/music/music/Try - 派伟俊 周杰伦.mp3",
		duration: 0,
	},
	{
		id: 4,
		title: "最好的安排",
		artist: "曲婉婷",
		cover: "assets/music/cover/最好的安排 - 曲婉婷.jpg.webp",
		url: "assets/music/music/最好的安排 - 曲婉婷.mp3",
		duration: 0,
	},




	// {
	// 	id: 1,
	// 	title: "口笛で愛は歌えない",
	// 	artist: "Dazbee",
	// 	cover: "assets/music/cover/dazbee.webp",
	// 	url: "assets/music/url/dazbee.mp3",
	// 	duration: 0,
	// },
	// {
	// 	id: 2,
	// 	title: "ひとり上手",
	// 	artist: "Kaya",
	// 	cover: "assets/music/cover/hitori.webp",
	// 	url: "assets/music/url/hitori.mp3",
	// 	duration: 240,
	// },
	// {
	// 	id: 3,
	// 	title: "眩耀夜行",
	// 	artist: "ス리즈ブーケ",
	// 	cover: "assets/music/cover/xryx.webp",
	// 	url: "assets/music/url/xryx.mp3",
	// 	duration: 180,
	// },
	// {
	// 	id: 4,
	// 	title: "春雷の頃",
	// 	artist: "22/7",
	// 	cover: "assets/music/cover/cl.webp",
	// 	url: "assets/music/url/cl.mp3",
	// 	duration: 200,
	// },
];

export const DEFAULT_SONG: Song = {
	title: "Sample Song",
	artist: "Sample Artist",
	cover: "/favicon/favicon.ico",
	url: "",
	duration: 0,
	id: 0,
};

export const DEFAULT_METING_API =
	"https://www.bilibili.uno/api?server=:server&type=:type&id=:id&auth=:auth&r=:r";
export const DEFAULT_METING_ID = "14164869977";
export const DEFAULT_METING_SERVER = "netease";
export const DEFAULT_METING_TYPE = "playlist";

export const ERROR_DISPLAY_DURATION = 3000;
export const SKIP_ERROR_DELAY = 1000;
