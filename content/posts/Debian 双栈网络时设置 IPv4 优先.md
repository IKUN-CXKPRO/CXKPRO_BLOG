---
title: Debian 双栈网络时设置 IPv4 优先
published: 2025-10-26
description: '本文理论上适合任何 Linux 系统，其他系统未经测试，请自行测试使用。'
image: ''
tags: [Linux,Debian]
category: '教程'
draft: false 
lang: 'zh-CN'
---
## 前言
双协议栈技术就是指在一台设备上同时启用 IPv4 协议栈和 IPv6 协议栈，这样就可以同时使用 IPv4 和 IPv6 的网络。

所有现代化的操作系统和浏览器均会以 IPv6 优先，只有 IPv6 无法访问的时候才会尝试访问 IPv4，某些特定的应用和场景下，我们并不想要 IPv6 优先，这时候就需要修改一些配置文件让 IPv4 优先。

## 修改 /etc/gai.conf
在 Debian 等 Linux 系统下，有一个 `/etc/gai.conf` 文件，用于系统的 `getaddrinfo` 调用，默认情况下，它会使用 IPv6 优先，如果您安装了 `curl` 并且本地支持 IPv6，那么可以使用 `curl ip.sb` 测试：
> ikun_cxkpro@CXKPRO-PC-debian:~$ curl ip.sb  
2001:db8::2  

效果等同于 `curl ip.sb -6`  

如果你不想使用 IPv6 优先，可以在这个文件中找到：
> #precedence ::ffff:0:0/96  100  

取消注释，修改为：  
> precedence ::ffff:0:0/96  100  

一句话命令：  
> sed -i 's/#precedence ::ffff:0:0\/96  100/precedence ::ffff:0:0\/96  100/' /etc/gai.conf  

此时再使用 curl ip.sb 测试：
> ikun_cxkpro@CXKPRO-PC-debian:~$ curl ip.sb  
114.51.4.191  

效果等同于 curl ip.sb -4  

有时候又会需要强制 IPv6 优先 (怎么有些系统和用户那么奇怪？)，因为目前 IANA 分配的公网 IPv6 还未进行到 `3000:0000::/4`，所以我们只要把这段之前的 IPv6 加到优先级列表即可，加入这两行 `label` 的优先级：
> label 2002::/16    1  
label 2001:0::/32   1

## 禁用 IPv6
有一些极端情况下，我们可能需要禁止系统的 IPv6 功能，这时候就需要修改 `/etc/sysctl.conf` 文件，首先找到你的网卡名称，这里以 `eth0` 为例，然后加入如下内容：
> net.ipv6.conf.all.autoconf = 0  
net.ipv6.conf.default.autoconf = 0  
net.ipv6.conf.all.accept_ra = 0  
net.ipv6.conf.default.accept_ra = 0  
net.ipv6.conf.all.disable_ipv6 = 1  
net.ipv6.conf.default.disable_ipv6 = 1  
net.ipv6.conf.lo.disable_ipv6 = 1  
net.ipv6.conf.eth0.disable_ipv6 = 1  

如果需要其他网卡则更改或添加 `net.ipv6.conf.eth0.disable_ipv6 = 1` 即可。  
  

一句话命令:
> cat >> /etc/sysctl.conf << EOF  
net.ipv6.conf.all.autoconf = 0  
net.ipv6.conf.default.autoconf = 0  
net.ipv6.conf.all.accept_ra = 0  
net.ipv6.conf.default.accept_ra = 0  
net.ipv6.conf.all.disable_ipv6 = 1  
net.ipv6.conf.default.disable_ipv6 = 1  
net.ipv6.conf.lo.disable_ipv6 = 1  
net.ipv6.conf.eth0.disable_ipv6 = 1  
EOF  

注意 cat 命令后的 >> 即为添加文件内容，如果使用 > 则是覆盖文件内容。  

然后使用 sysctl -p 来重新加载配置文件，此时查看 ip a 就可以发现 IPv6 已经被禁止了。  

## 其他系统和软件
Windows下请参考[这篇回答](https://superuser.com/questions/436574/ipv4-vs-ipv6-priority-in-windows-7)
Firefox 下打开 `about:config` 然后把 `network.dns.disableIPv6` 改成 `true` 即可禁止 Firefox 请求 IPv6