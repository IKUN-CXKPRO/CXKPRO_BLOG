import type {
	AnnouncementConfig,
	CommentConfig,
	ExpressiveCodeConfig,
	FooterConfig,
	FullscreenWallpaperConfig,
	LicenseConfig,
	MusicPlayerConfig,
	NavBarConfig,
	PermalinkConfig,
	ProfileConfig,
	SakuraConfig,
	ShareConfig,
	SidebarLayoutConfig,
	SiteConfig,
} from "./types/config";
import { LinkPreset } from "./types/config";

// 定义站点语言
const SITE_LANG = "zh_CN";
const SITE_TIMEZONE = 8;

export const siteConfig: SiteConfig = {
	title: "CXKPRO_BLOG",
	subtitle: "主页",
	siteURL: "https://ikun-cxkpro.top/",
	siteStartDate: "2025-01-01",

	timeZone: SITE_TIMEZONE,
	lang: SITE_LANG,

	themeColor: {
		hue: 250,
		fixed: false,
	},

	// 特色页面开关 - 保留旧配置的开关状态
	featurePages: {
		anime: false,
		diary: true,
		friends: true,
		projects: false,
		skills: false,
		timeline: false,
		albums: false,
		devices: true,
	},

	// 顶栏标题配置 - 适配新结构
	navbarTitle: {
		text: "CXKPRO_BLOG",
		icon: "assets/home/CXKPRO.png",
	},

	// 页面自动缩放配置
	pageScaling: {
		enable: true,
		targetWidth: 2000,
	},

	// Bangumi 配置
	bangumi: {
		userId: "your-bangumi-id",
		fetchOnDev: false,
	},

	// Bilibili 配置
	bilibili: {
		vmid: "1735172272",
		fetchOnDev: false,
		SESSDATA: "",
		coverMirror: "",
		useWebp: true,
	},

	// Anime 配置
	anime: {
		mode: "local", // 番剧页面模式："bangumi" 使用Bangumi API，"local" 使用本地配置，"bilibili" 使用Bilibili API
	},

	// 文章列表布局配置
	postListLayout: {
		defaultMode: "list",
		allowSwitch: true,
	},

	// 标签样式配置
	tagStyle: {
		useNewStyle: false,
	},

	// 壁纸模式配置
	wallpaperMode: {
		defaultMode: "banner",
		showModeSwitchOnMobile: "desktop",
	},

	// Banner 配置
	banner: {
		src: {
			desktop: ["/assets/desktop-banner/old/2.webp"],
			mobile: ["/assets/mobile-banner/banner-chzx.webp"],
		},
		position: "center",
		carousel: {
			enable: true,
			interval: 3,
		},
		waves: {
			enable: true,
			performanceMode: false,
			mobileDisable: false,
		},
		imageApi: {
			enable: false,
			url: "http://domain.com/api_v2.php?format=text&count=4",
		},
		homeText: {
			enable: false,
			title: "CXKPRO_BLOG",
			subtitle: ["这里该写什么?"],
			typewriter: {
				enable: false,
				speed: 100,
				deleteSpeed: 50,
				pauseTime: 2000,
			},
		},
		credit: {
			enable: false,
			text: "Describe",
			url: "",
		},
		navbar: {
			transparentMode: "semifull",
		},
	},

	// TOC 配置
	toc: {
		enable: true,
		mode: "sidebar",
		depth: 2,
		useJapaneseBadge: false,
	},

	// 新版本新增字段
	showCoverInContent: true,
	generateOgImages: false,

	// Favicon
	favicon: [
		{
			src: '/favicon/CXKPRO.png',
			theme: 'dark',
			sizes: '32x32',
		}
	],

	// 字体配置
	font: {
		asciiFont: {
			fontFamily: "ZenMaruGothic-Medium",
			fontWeight: "400",
			localFonts: ["ZenMaruGothic-Medium.ttf"],
			enableCompress: true,
		},
		cjkFont: {
			fontFamily: "萝莉体 第二版",
			fontWeight: "500",
			localFonts: ["loli.ttf"],
			enableCompress: true,
		},
	},
	showLastModified: true,
};

// Fullscreen Wallpaper
export const fullscreenWallpaperConfig: FullscreenWallpaperConfig = {
	src: {
		desktop: ["/assets/desktop-banner/old/2.webp"],
		mobile: ["/assets/mobile-banner/banner-chzx.webp"],
	},
	position: "center",
	carousel: {
		enable: true,
		interval: 5,
	},
	zIndex: -1,
	opacity: 0.8,
	blur: 1,
};

// NavBar
export const navBarConfig: NavBarConfig = {
	links: [
		LinkPreset.Home,
		LinkPreset.Archive,
		{
			name: "Links",
			url: "/links/",
			icon: "material-symbols:link",
			children: [
				{
					name: "CXKPRO Alist",
					url: "https://alist.cxkpro.top/",
					external: true,
					icon: "material-symbols:link",
				},
				{
					name: "Mirror-Proxy",
					url: "https://mirror-proxy.cxkpro.top/",
					external: true,
					icon: "material-symbols:link",
				},
				{
					name: "GhProxy",
					url: "https://ghproxy.cxkpro.top/",
					external: true,
					icon: "fa6-brands:github",
				},
				{
					name: "air-conditioner",
					url: "https://air-conditioner.cxkpro.top/",
					external: true,
					icon: "material-symbols:link",
				},
			],
		},
		{
			name: "Status",
			url: "https://status.web.cxkpro.top/",
			external: true,
			icon: "material-symbols:link",
		},
		{
			name: "Others",
			url: "#",
			icon: "material-symbols:more-horiz",
			children: [
				{
					name: "小米运动健康AuthKey提取器",
					url: "/miwear-auth/",
					icon: "material-symbols:work",
				},
				{
					name: "小米穿戴设备解锁码计算",
					url: "/Xiaomi-Wearable-Unlock/",
					icon: "material-symbols:work",
				},
				{
					name: "浏览器信息",
					url: "/browserinfo/",
					icon: "material-symbols:work",
				},
				{
					name: "网页播放器",
					url: "/movie-player/",
					icon: "material-symbols:work",
				},
			],
		},
		{
			name: "About",
			url: "/content/",
			icon: "material-symbols:info",
			children: [
				{
					name: "About",
					url: "/about/",
					icon: "material-symbols:person",
				},
				{
					name: "Friends",
					url: "/friends/",
					icon: "material-symbols:group",
				},
			],
		},
	],
};

// Profile
export const profileConfig: ProfileConfig = {
	avatar: "assets/images/CXKPRO.png",
	name: "IKUN_CXKPRO",
	bio: "这里该写什么?",
	typewriter: {
		enable: false,
		speed: 80,
	},
	links: [
		{
			name: "GitHub",
			icon: "fa6-brands:github",
			url: "https://github.com/matsuzaka-yuki",
		},
		{
			name: "Bilibli",
			icon: "fa6-brands:bilibili",
			url: "https://space.bilibili.com/1735172272",
		},
		{
			name: "QQ",
			icon: "fa6-brands:qq",
			url: "https://wpa.qq.com/msgrd?v=3&uin=3078517671&site=qq&menu=yes",
		},
	],
};

// License
export const licenseConfig: LicenseConfig = {
	enable: true,
	name: "CC BY-NC-SA 4.0",
	url: "https://creativecommons.org/licenses/by-nc-sa/4.0/",
};

// Permalink
export const permalinkConfig: PermalinkConfig = {
	enable: false,
	format: "%postname%",
};

// ExpressiveCode
export const expressiveCodeConfig: ExpressiveCodeConfig = {
	theme: "github-dark",
	hideDuringThemeTransition: true,
};

// Comment
export const commentConfig: CommentConfig = {
	enable: false, // 启用评论功能。当设置为 false 时，评论组件将不会显示在文章区域。
	twikoo: {
		envId: "https://twikoo.vercel.app",
		lang: "zh-cn", // 设置 Twikoo 评论系统语言为zh-cn
	},
};

// Share
export const shareConfig: ShareConfig = {
	enable: true,
};

// Announcement
export const announcementConfig: AnnouncementConfig = {
	title: "公告",
	content: "无公告。",
	closable: true,
	link: {
		enable: false,
		text: "Learn More",
		url: "/about/",
		external: false,
	},
};

// 音乐播放器,mode: "meting"
// export const musicPlayerConfig: MusicPlayerConfig = {
// 	enable: true,
// 	mode: "meting",
// 	meting_api: "https://www.bilibili.uno/api?server=:server&type=:type&id=:id&auth=:auth&r=:r",
// 	id: "17470364673",
// 	server: "netease",
// 	type: "playlist",
// 	showFloatingPlayer: true
// };


// 音乐播放器,mode: "local"
//local歌单配置文件: /src/components/widgets/music-player/constants.ts
export const musicPlayerConfig: MusicPlayerConfig = {
	enable: true,
	mode: "local",
	showFloatingPlayer: true, // 是否显示悬浮播放器入口
};

// Footer
export const footerConfig: FooterConfig = {
	enable: true,
	customHtml: "",
};

// SidebarLayout
export const sidebarLayoutConfig: SidebarLayoutConfig = {
	properties: [
		{
			type: "profile",
			position: "top",
			class: "onload-animation",
			animationDelay: 0,
		},
		{
			type: "announcement",
			position: "top",
			class: "onload-animation",
			animationDelay: 50,
		},
		{
			type: "categories",
			position: "sticky",
			class: "onload-animation",
			animationDelay: 150,
			responsive: {
				collapseThreshold: 5,
			},
		},
		{
			type: "tags",
			position: "top",
			class: "onload-animation",
			animationDelay: 250,
			responsive: {
				collapseThreshold: 20,
			},
		},
		{
			type: "site-stats",
			position: "top",
			class: "onload-animation",
			animationDelay: 200,
		},
		{
			type: "calendar",
			position: "top",
			class: "onload-animation",
			animationDelay: 250,
		},
	],
	components: {
		left: ["profile", "announcement", "categories", "tags"],
		right: ["site-stats", "calendar"],
		drawer: ["profile", "announcement"],
	},
	defaultAnimation: {
		enable: true,
		baseDelay: 0,
		increment: 50,
	},
	responsive: {
		breakpoints: {
			mobile: 768,
			tablet: 1280,
			desktop: 1280,
		},
	},
};

// Sakura
export const sakuraConfig: SakuraConfig = {
	enable: false,
	sakuraNum: 21,
	limitTimes: -1,
	size: {
		min: 0.5,
		max: 1.1,
	},
	opacity: {
		min: 0.3,
		max: 0.9,
	},
	speed: {
		horizontal: {
			min: -1.7,
			max: -1.2,
		},
		vertical: {
			min: 1.5,
			max: 2.2,
		},
		rotation: 0.03,
		fadeSpeed: 0.03,
	},
	zIndex: 100,
};

// Pio 看板娘
export const pioConfig: import("./types/config").PioConfig = {
	enable: false,
	models: ["/pio/models/pio/model.json"],
	position: "left",
	width: 280,
	height: 250,
	mode: "draggable",
	hiddenOnMobile: true,
	dialog: {
		welcome: "Welcome to Mizuki Website!",
		touch: [
			"What are you doing?",
			"Stop touching me!",
			"HENTAI!",
			"Don't bully me like that!",
		],
		home: "Click here to go back to homepage!",
		skin: ["Want to see my new outfit?", "The new outfit looks great~"],
		close: "QWQ See you next time~",
		link: "https://github.com/matsuzaka-yuki/Mizuki",
	},
};

// WidgetConfigs
export const widgetConfigs = {
	profile: profileConfig,
	announcement: announcementConfig,
	music: musicPlayerConfig,
	layout: sidebarLayoutConfig,
	sakura: sakuraConfig,
	fullscreenWallpaper: fullscreenWallpaperConfig,
	pio: pioConfig,
	share: shareConfig,
} as const;

// Umami
export const umamiConfig = {
	enabled: false,
	apiKey: import.meta.env.UMAMI_API_KEY || "api_xxxxxxxx",
	baseUrl: "https://api.umami.is",
	scripts: `
<script defer src="XXXX.XXX" data-website-id="ABCD1234"></script>
  `.trim(),
} as const;

// 相关文章配置
export const relatedPostsConfig = {
	enable: true,           // 是否启用相关文章
	maxCount: 5,            // 最多显示的文章数量
	matchBy: 'tags' as const, // 匹配策略：'tags' | 'category' | 'both'
} as const;

// 随机文章配置
export const randomPostsConfig = {
	enable: true,           // 是否启用随机文章
	maxCount: 3,            // 最多显示的文章数量
} as const;