/** @format */

const fs = require('fs')
const glob = require('glob')
;(async () => {
	// Ignore Next.js specific files (e.g., _app.js) and API routes.
	const pages = glob.sync('pages/**/+([a-z]).tsx')
	const posts = glob.sync('posts/**/*.md')

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
