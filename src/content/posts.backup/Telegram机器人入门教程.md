---
title: Telegram机器人入门教程

published: 2026-01-17

description: 'Telegram机器人入门教程'

image: ''

tags: ["Telegram","bot"]

category: '教程'

draft: false

lang: 'zh-CN'

---

# 添加bot
首先，添加Telegram机器人之父:BotFather

![](./images/Telegram机器人入门教程/0f1a9f946c8c387d6e6b2d4e05c7d2e9.png)

然后打开小程序，创建bot

![](./images/Telegram机器人入门教程/eff33bc4dd150ce87efb1d2deffb2ad4.png)

点击`Create a New Bot`

![](./images/Telegram机器人入门教程/cb79e5f6233bdb5b1e26cee57f7ec5ab.png)

输入机器人的相关信息（昵称、id、描述）  

> [!NOTE]
> id需要以bot为结尾（例如t.me/xxxxxxx_bot）  

然后去添加一下机器人

![](./images/Telegram机器人入门教程/ef29af81386a70daf17ac122041cd1b2.png)

给机器人发条消息

# 测试&获取id

copy一下token

![](./images/Telegram机器人入门教程/dbaa2752db42d3142150294b8f1a183e.png)

浏览器访问`https://api.telegram.org/bot< token>/getUpdates?offset=-1`  
> [!NOTE]
> 请将"< token>"替换为实际的token值

然后就可以看到目前的消息记录了，复制一下chatid

![](./images/Telegram机器人入门教程/40d30cb235542c8fd103cceccf112a90.png)

# 机器人发送消息给特定chatid

浏览器访问:`https://api.telegram.org/bot< token>/sendMessage?chat_id=< chatid>&text=test`  
> [!NOTE]
> 请将"< token>"和"< chatid>"替换为实际的token值和chatid值

正确发送之后会返回以下信息：

![](./images/Telegram机器人入门教程/c5e677a9d1ac0b2dadd26cdebed7b347.png)

此时你就可以收到bot给你发来的消息了
![](./images/Telegram机器人入门教程/12a9ff750410b021aad05b3fce32e08f.png)

# 排查错误

如果以上操作搞完结果提示`{"ok":false,"error_code":404,"description":"Not Found"}`
![](./images/Telegram机器人入门教程/b84d63b17811ef395d0184aededdf58d.png)

请检查是否把< token>给完整替换成token。  
例如: token为`114514:Homo`,ChatID为`114514`则改为:
`https://api.telegram.org/bot114514:Homo/sendMessage?chat_id=114514&text=test`