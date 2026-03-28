---
title: Favicon.im：一个好用的获取网站图标工具

published: 2025-11-28

description: ''

image: ''

tags: ["favicon.im"]

category: "分享"

draft: false

lang: 'zh-CN'

---

## 前言

相信你在开发网站友情链接的时候，经常会遇到一个问题：  

1. 挂朋友的网站，却不知道图标怎么获取

2. 朋友网站的logo图标太大

Favicon.im就可以给你解决这些小问题。

## 什么是 Favicon.im？

Favicon.im 是一个简单而高效的在线服务，允许用户快速获取任何网站的 Favicon。无论是开发者、设计师还是普通用户，只要提供域名，Favicon.im 就会返回相应的网站图标。

## 如何使用 Favicon.im?

### 浏览器获取

1. 打开浏览器，访问[Favicon.im](https://favicon.im/)。

2. 下面有一个输入框，输入你要获取图标的网站，输入完成后回击，图标就出来了

### 使用api获取

打开你的博客 HTML 文件，在`<head>`部分添加以下代码
```
<img src="https://favicon.im/example.com" alt="example.com favicon" />
```

将`example.com`替换为你想要获取图标的网站即可。

:::note
如果你需要大图标，请在请求里面加上:
```
?larger=true
```
例如：
```

<img src="https://favicon.im/example.com?larger=true" alt="example.com favicon (large)" />

```
:::