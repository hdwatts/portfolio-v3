/** @format */

const fs = require('fs')
const glob = require('glob')

const loadMarkdownFiles = async path => {}

const loadBlogPosts = async () => {
	const blogPaths = glob.sync(`posts/*.md`)
	const postDataList = blogPaths.map(blogPath => {
		const modPath = blogPath.slice(blogPath.indexOf(`posts/`) + 6)
		return `posts/${modPath}`
	})
	return postDataList
}

;(async () => {
	// Ignore Next.js specific files (e.g., _app.js) and API routes.
	const pages = glob.sync('pages/**/+([a-z]).tsx')
	const posts = await loadBlogPosts()

	const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
        <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
            ${pages
							.map(page => {
								const path = page
									.replace('pages', '')
									.replace('.tsx', '')
									.replace('.md', '')
									.replace('/index', '')

								return `
                        <url>
                            <loc>${`https://hdwatts.com${path}`}</loc>
                        </url>
                    `
							})
							.join('')}
							${posts
								.map(page => {
									const path = page
										.replace('posts', '/blog')
										.replace('.tsx', '')
										.replace('.md', '')
										.replace('/index', '')

									return `
                        <url>
                            <loc>${`https://hdwatts.com${path}`}</loc>
                        </url>
                    `
								})
								.join('')}
        </urlset>
    `

	fs.writeFileSync('public/sitemap.xml', sitemap)
})()
