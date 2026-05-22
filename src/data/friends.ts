// 友情链接数据配置
// 用于管理友情链接页面的数据

export interface FriendItem {
	id: number;
	title: string;
	imgurl: string;
	desc: string;
	siteurl: string;
	tags: string[];
}

// 友情链接数据
export const friendsData: FriendItem[] = [
	{
		id: 1,
		title: "SDINI SITE",
		imgurl: "https://favicon.im/sdini.site?larger=true",
		desc: "SDINI的个人网站",
		siteurl: "https://sdini.site/",
		tags: ["Site"],
	},
	{
		id: 2,
		title: "老陈资源站",
		imgurl: "https://blog.chenyuxia.com/wp-content/uploads/2025/01/cropped-dc57b0460b95b3e21479f93643b556e9.jpg",
		desc: "老陈资源站",
		siteurl: "https://www.chenyuxia.com/",
		tags: ["资源站"],
	},
	{
		id: 2,
		title: "WYL龙尊の个人博客",
		imgurl: "https://favicon.im/wylnb.mirrorx.ltd?larger=true",
		desc: "龙尊的个人博客",
		siteurl: "https://wylnb.mirrorx.ltd/",
		tags: ["blog"],
	},
	{
		id: 3,
		title: "小改学习志",
		imgurl: "https://www.haoyu233.com/wp-content/uploads/2026/05/ed359270804902f29523d6d381920ce3.webp",
		desc: "莫听穿林打叶声，何妨吟啸且徐行。",
		siteurl: "https://www.haoyu233.com",
		tags: ["blog"],
	},
];

// 获取友情链接数据
export function getFriendsList(): FriendItem[] {
	return friendsData;
}

// 获取随机排序的友情链接数据
export function getShuffledFriendsList(): FriendItem[] {
	const shuffled = [...friendsData];
	for (let i = shuffled.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		[shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
	}
	return shuffled;
}
