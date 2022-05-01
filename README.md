这是基于 [lhqs-site-nav](https://github.com/lhqs/lhqs-site-nav) 项目,通过使用Next.js进行重新实现


## 乱红如雨的个人站点: 标签导航 + 聚合搜索

访问: http://info.lhqs.ink/

介绍: 一个个人访问站点的日常收集(现已收集一千多个精选网址, 还在持续更新中), 也是网上获取信息的一个起点

### 功能

1. 基于tag的站点导航, 为解决bookmark分类查找不便等问题
```
    {
        "tags": "高频访问 site tech github",
        "title": "Github trending",
        "url": "https://github.com/trending"
    }...
```

2. 聚合搜索, 聚合搜索渠道, 方便信息获取
```
    {
        "title": "Google",
        "url": "https://www.google.com/search?q=${query}"
    },
    {
        "title": "必应",
        "url": "http://bing.com/search?q=${query}"
    }...
```
### 使用

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:4000](http://localhost:4000) with your browser to see the result.


