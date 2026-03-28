// 设备数据配置文件

export interface Device {
	name: string;
	image: string;
	specs: string;
	description: string;
	link: string;
}

// 设备类别类型，支持品牌和自定义类别
export type DeviceCategory = {
	[categoryName: string]: Device[];
} & {
	自定义?: Device[];
};

export const devicesData: DeviceCategory = {
	Phone: [
		{
			name: "iPhone X",
			image: "/images/device/iPhoneX.png",
			specs: "4G + 256GB",
			description: "好烫（后悔升级16系统了",
			link: "https://support.apple.com/zh-hk/111864",
		},
		{
			name: "Xiaomi 11 雷军签名版",
			image: "/images/device/mi11 雷军签名版.jpg",
			specs: "12G + 256GB",
			description: "搭载高通火龙888，有自动烧WIFI功能。",
			link: "https://detail.zol.com.cn/cell_phone/index1353681.shtml",
		},
		{
			name: "Xiaomi 6 陶瓷尊享版",
			image: "/images/device/mi6 black.jpg",
			specs: "6G + 128GB",
			description: "经典耐刷王，钉子户机型",
			link: "https://www.mi.com/hk/mi6/",
		},
		{
			name: "Xiaomi 5",
			image: "/images/device/mi5.jpg",
			specs: "白色 3G + 32GB",
			description: "解锁通道被小米ban了（悲",
			link: "https://www.mi.com/hk/mi5/",
		},
		{
			name: "Samsung Galaxy Note 8",
			image: "/images/device/SM-N950N.jpg",
			specs: "SM-N950N 6G + 128GB",
			description: "经典机皇",
			link: "https://www.phone888.cn/specs/samsung/galaxy-note-8/sm-n950n/",
		},
		{
			name: "HUAWEI P30 Pro",
			image: "",
			specs: "AL00，极光色 8G + 256GB",
			description: "由于特殊原因，不予评价。",
			link: "https://www.vmall.com/product/10086055028364.html",
		},
		{
			name: "HUAWEI Mate XT ULTIMATE DESIGN",
			image: "",
			specs: "黑色，16GB+512GB",
			description: "由于特殊原因，不予评价。",
			link: "https://www.vmall.com/product/comdetail/index.html?prdId=10086499369393",
		},
		{
			name: "iPhone 6 Plus",
			image: "/images/device/iPhone6p.png",
			specs: "？G+16GB",
			description: "",
			link: "https://support.apple.com/zh-hk/111940",
		},
		{
			name: "iPhone 7 Plus",
			image: "/images/device/iPhone7p.png",
			specs: "128GB",
			description: "",
			link: "https://support.apple.com/zh-hk/111953",
		},
	],
	Band:[
		{
			name: "Xiaomi Smart Band",
			image: "",
			specs: "",
			description: "初代小米手环",
			link: "https://www.mi.com/hk/miband/",
		},
		{
			name: "Xiaomi Smart Band 5 NFC",
			image: "",
			specs: "",
			description: "小米手环5NFC",
			link: "https://www.mi.com/hk/mi-smart-band-5/",
		},
		{
			name: "Xiaomi Smart Band 6 NFC",
			image: "",
			specs: "",
			description: "小米手环6NFC",
			link: "https://www.mi.com/hk/mi-smart-band-6/",
		},
		{
			name: "Xiaomi Smart Band 7 NFC",
			image: "",
			specs: "",
			description: "小米手环7NFC",
			link: "https://www.mi.com/hk/product/xiaomi-smart-band-7/",
		},
		{
			name: "Xiaomi Smart Band 7 Pro",
			image: "",
			specs: "",
			description: "小米手环7Pro",
			link: "https://www.mi.com/hk/product/xiaomi-smart-band-7-pro/",
		},
		{
			name: "Xiaomi Smart Band 8 NFC",
			image: "",
			specs: "",
			description: "小米手环8NFC",
			link: "https://www.mi.com/hk/product/xiaomi-smart-band-8/",
		},
		{
			name: "Xiaomi Smart Band 8 Pro",
			image: "",
			specs: "",
			description: "小米手环8Pro，极高的可玩性",
			link: "https://www.mi.com/hk/product/xiaomi-smart-band-8-pro/",
		},
		{
			name: "Xiaomi Smart Band 9 NFC",
			image: "",
			specs: "",
			description: "小米手环9NFC，续航第二长的机子，从发布到25年依旧有os3更新，特别强，第一批屏幕绿屏",
			link: "https://www.mi.com/hk/product/xiaomi-smart-band-9/",
		},
		{
			name: "Xiaomi Smart Band 9 Pro",
			image: "",
			specs: "",
			description: "小米手环9Pro，至今为止续航最强的小米手环。",
			link: "https://www.mi.com/hk/product/xiaomi-smart-band-9-pro/",
		},
		{
			name: "Xiaomi Smart Band 10 NFC",
			image: "",
			specs: "",
			description: "小米手环10NFC，屏幕终于变大了，NFC/陶瓷 支持录音",
			link: "https://www.mi.com/hk/product/xiaomi-smart-band-10/",
		},
		{
			name: "Xiaomi Smart Band 10 陶瓷版",
			image: "",
			specs: "",
			description: "小米手环10陶瓷，质感很好，可惜第一批屏幕有点问题",
			link: "https://www.mi.com/hk/product/xiaomi-smart-band-10/",
		},
	],
	Server:[
		{
			name: "Dell PowerEdge R210",
			image: "/images/device/R210.avif",
			specs: "",
			description: "房间软路由(openwrt)",
			link: "https://www.dell.com/support/product-details/zh-hk/product/poweredge-r210/overview",
		},
		{
			name: "Dell PowerEdge R220",
			image: "/images/device/R220.avif",
			specs: "",
			description: "房间软路由",
			link: "https://www.dell.com/support/product-details/zh-hk/product/poweredge-r220/overview",
		},
		{
			name: "Dell PowerEdge R720xd",
			image: "/images/device/R720xd.avif",
			specs: "",
			description: "主服务器",
			link: "https://www.dell.com/support/product-details/zh-hk/product/poweredge-r720xd/overview",
		},
	],
	nas:[
		{
			name: "Synology DS213j",
			image: "",
			specs: "",
			description: "nas1",
			link: "https://cndl.synology.cn/download/Document/Hardware/DataSheet/DiskStation/13-year/DS213j/chs/Synology_DS213j_Data_Sheet_chs.pdf",
		},
		{
			name: "Synology DS415+",
			image: "",
			specs: "",
			description: "nas2",
			link: "https://global.download.synology.com/download/Document/Hardware/DataSheet/DiskStation/15-year/DS415+/cht/Synology_DS415_Plus_Data_Sheet_cht.pdf",
		},
	],
	DJI:[
		{
			name: "DJI Mavic 2",
			image: "",
			specs: "",
			description: "无人机",
			link: "https://www.dji.com/mavic-2/info",
		},
		{
			name: "DJI Mini 4K",
			image: "",
			specs: "",
			description: "无人机",
			link: "https://www.dji.com/mini-2-se/info",
		},
		{
			name: "DJI OSMO Action4",
			image: "",
			specs: "",
			description: "Action4",
			link: "https://www.dji.com/osmo-action-4",
		},
	],

};
