export const getContent = async (filename: string) => {
  const { default: fs } = await import('fs')
  const { default: path } = await import('path')
  const { default: matter } = await import('gray-matter')
  const { default: MarkdownIt } = await import('markdown-it')

  const md = new MarkdownIt({
    html: true,
    linkify: true,
    typographer: true,
  })

  const filePath = path.join(process.cwd(), 'config', 'layouts', filename)
  const fileContent = fs.readFileSync(filePath, 'utf-8')
  const { data, content: markdownContent } = matter(fileContent)
  const html = md.render(markdownContent)

  return { html, frontmatter: data }
}
