---
title: IP查询接口分享

published: 2025-10-31

description: 'IP查询接口分享'

image: ''

tags: [IP]

category: '分享'

draft: false

lang: 'zh-CN'

---

### 阿里云

阿里云`ipip.net`提供的 IP 查询接口

接口地址：[https://api.myip.la/cn?json](https://api.myip.la/cn?json)

请求示例

```
curl https://api.myip.la/cn?json
```

响应结果

```
StatusCode        : 200
StatusDescription : OK
Content           : {"ip":"103.219.192.54","location":{"city":"","country_code":"HK","country_name":"ä¸­å½","latitude"
                    :"22.396428","longitude":"114.109497","province":"é¦æ¸¯"}}
RawContent        : HTTP/1.1 200 OK
                    Connection: keep-alive
                    Keep-Alive: timeout=20
                    Access-Control-Allow-Origin: *
                    Access-Control-Allow-Methods: GET, POST, OPTIONS
                    Access-Control-Allow-Headers: DNT,X-Mx-ReqToken,Keep-...
Forms             : {}
Headers           : {[Connection, keep-alive], [Keep-Alive, timeout=20], [Access-Control-Allow-Origin, *], [Access-Cont
                    rol-Allow-Methods, GET, POST, OPTIONS]...}
Images            : {}
InputFields       : {}
Links             : {}
ParsedHtml        : mshtml.HTMLDocumentClass
RawContentLength  : 158
```

详细文档：[https://www.myip.la/](https://www.myip.la/)

中国大陆用户推荐使用：[https://myip.ipip.net](https://www.ipip.net/myip.html)

### Moieo Api IP 查询接口

接口地址：POST [https://api.moieo.cn/ip/114.114.114.114](https://api.moieo.cn/ip/114.114.114.114) 

请求头:

| 名称        | 注释      |
| --------- | ------- |
| timestamp | 时间戳(ms) |

请求示例

例如 IP 为：114.114.114.114

```
curl -XPOST -H "timestamp: $(date +%s%3N)" https://api.moieo.cn/ip/114.114.114.114
```

响应结果

```
{
  "code": 200,
  "msg": "success",
  "data": {
    "ip": "114.114.114.114",
    "ip_number": 1920103026,
    "location": "江苏省南京市",
    "net_service": "南京信风网络科技有限公司GreatbitDNS服务器"
  }
}
```

数据来源于`纯真网络`开源数据库
