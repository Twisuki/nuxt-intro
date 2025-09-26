## Nuxt Intro

Nuxt-intro 是一个基于 Nuxt 4 的个人主页模板. 它提供了一个简洁而现代的设计, 适合展示个人信息, 研究项目, 取得奖项和联系方式. 该模板预制内容固定, 配置项目少, 适合学生作为学术主页使用.

### 主要功能

- **个人信息展示**: 显示头像, 名称, 欢迎语(或座右铭), 以及联系方式及社交媒体链接.
- **自我介绍和其他页面**: 提供了 **自我介绍**, **个人简历**, **竞赛成绩**, **获得奖项** 和 **科研项目** 五大模块, 同时还可自定义各个模块的内容.
- **主题定制**: 通过修改配置文件, 除用户配置外, 还可自定义颜色主题.
- **响应式设计**: 适配各种设备, 包括桌面和移动设备.

### 使用方法

1. 克隆本仓库
2. 修改配置文件

### md测试

_倾斜_ __加粗__ **加粗2** ~~删除线~~ `关键词`

- 这是第一行
- 这是第二行
- 这是第三行
    - 子行1
    - 子行2

1. 这是第一行
2. 这是第二行
3. 这是第三行
    1. 子行1
    2. 子行2

[Twisuki Github](https://github.com/Twisuki)

<!-- ![图片测试, 白丝苏阳(意义明确的遮挡物)](https://github.com/Cute-Dress/Dress/blob/master/T/Twisuki/4.2-补充-白丝看书-241130.jpg?raw=true) -->

|表头1|表头2|表头3|
|--|--|--|
|1.1|1.2|1.3|
|2.1|2.2|2.3|

```JavaScript
console.log("Hello world!");

export const getContent = async (filename: string) => {
	const { default: fs } = await import("fs")
	const { default: path } = await import("path")
	const { default: matter } = await import("gray-matter")
	const { default: MarkdownIt } = await import("markdown-it")

	const md = new MarkdownIt({
		html: true,
		linkify: true,
		typographer: true,
	})

	const filePath = path.join(process.cwd(), "config", "layouts", filename)
	const fileContent = fs.readFileSync(filePath, "utf-8")
	const { data, content: markdownContent } = matter(fileContent)
	const html = md.render(markdownContent)

	return { html, frontmatter: data }
}

```

> Troubleshooting any problem without the error log is like driving with your eyes closed.
> 
> 在没有错误日志的情况下诊断任何问题, 无异于闭眼开车.
> 
> -- Apache 官方文档 GettingStarted 篇章
