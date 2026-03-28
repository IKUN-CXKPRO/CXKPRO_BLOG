---
title: 跳过Win11的OOBE强制登录微软账户（支持25H2）
published: 2025-10-26
description: '跳过Win11的OOBE强制登录微软账户（支持25H2）'
image: ''
tags: [Windows,Windows11,OOBE,问题解决]
category: '教程'
draft: false 
lang: 'zh-CN'
---
## 前言
随着Windows 11的到来，微软在OOBE中强制要求用户登录微软账户，这很不方便。  
这篇文章将介绍如何跳过OOBE强制登录微软账户。  

### 适用于旧版Windows11的方法
1. 在登录微软账号的页面上，用户名写`admin`，密码随便写，后续创建本地账户即可。
2. 在区域设置页按键盘上的`Shift+F10`，打开cmd，输入 `start ms-cxh:localonly` 回车，会弹出一个窗口，允许您创建一个本地账户。

### 适用于新版Windows11的方法
在推送 Win11 25H2/24H2 （Build 26220.6772/26120.6772）版本更新后，上面的方法已经失效。  
但截至目前依旧有很多方法可强制绕过微软账户登录。

#### 使用注册表键 BypassNRO
1. 在区域设置页按键盘上的`Shift+F10`，输入：`reg add HKLM\SOFTWARE\Microsoft\Windows\CurrentVersion\OOBE /v BypassNRO /t REG_DWORD /d 1 /f`并回车
2. 断开互联网，输入`shutdown /r /t 0`重启
3. 重启后按提示选区域、键盘，点 `我没有互联网→继续使用有限设置`，后续创建本地账户即可。

#### 运行 JavaScript 函数跳过 OOBE
1. 按 `Ctrl+Shift+J` 打开开发者控制台，输入`WinJS.Application.restart("ms-cxh://LOCALONLY")`回车
2. 按 `Esc` 或点击屏幕关闭控制台，直接创建本地账户，完成隐私设置后进入桌面。

#### 禁用 OOBE 在线账户界面
1. `Shift+F10` 打开cmd，输入`reg add HKLM\Software\Microsoft\Windows\CurrentVersion\OOBE /v HideOnlineAccountScreens /t REG_DWORD /d 1 /f`回车
2. 关闭控制台并重启，按提示选区域、键盘，直接创建本地账户即可。

#### Win11 专业版或企业版的 “加入域”
1. 用 Win11 安装盘启动，按提示选语言、键盘，点 `安装 Windows 11`，选 `我没有产品密钥` 并`删除目标分区`
2. 安装后 OOBE 阶段，选 `为工作或学校设置→登录选项→改为加入域`，直接创建本地账户。

#### 用 Rufus 制作启动盘
1. 下载 `Rufus`并打开，选择 Win11 ISO 文件和 USB 盘，勾选 `移除在线微软账户要求`+`创建带有用户名的本地账户`
2. 用制作好的 U 盘启动安装，OOBE 阶段会自动跳过微软账户步骤，直接用预设本地账户进入系统。

#### 创建无人值守文件（autounattend.xml）
1. 打开[Generate autounattend.xml files for Windows 10/11](https://schneegans.de/windows/unattend-generator/) 网站，选择语言、Win11 版本，勾选 `让 Windows 创建本地账户` 并填写账户信息，下载 `autounattend.xml`
2. 用微软媒体创建工具制作 Win11 安装盘，将 `autounattend.xml` 复制到 U 盘根目录，启动安装后会自动用本地账户完成配置。