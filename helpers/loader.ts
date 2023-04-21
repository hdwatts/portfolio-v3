/** @format */

import matter from 'gray-matter'
import { globSync } from 'glob'
const globals = {
	url: '/blog',
}

export type PostData = {
	path: string
	title: string
	subtitle?: string
	content: string
	description?: string
	canonicalUrl?: string
	published: boolean
	datePublished: number
	author?: string
	authorPhoto?: string
	authorTwitter?: string
	tags?: string[]
	bannerPhoto?: string
	thumbnailPhoto?: string
}

type RawFile = { path: string; contents: string }

export const loadMarkdownFile = async (path: string): Promise<RawFile> => {
	const mdFile = await import(`~/posts/${path}`)
	return { path, contents: mdFile.default }
}

export const mdToPost = (file: RawFile): PostData => {
	const metadata = matter(file.contents)
	const path = file.path.replace('.md', '')
	const post = {
		path,
		title: metadata.data.title,
		subtitle: metadata.data.subtitle || null,
		published: metadata.data.published || false,
		datePublished: Date.parse(metadata.data.datePublished) || null,
		tags: metadata.data.tags || null,
		description: metadata.data.description || null,
		canonicalUrl: metadata.data.canonicalUrl || `${globals.url}/${path}`,
		author: metadata.data.author || null,
		authorPhoto: metadata.data.authorPhoto || null,
		authorTwitter: metadata.data.authorTwitter || null,
		bannerPhoto: metadata.data.bannerPhoto || null,
		thumbnailPhoto: metadata.data.thumbnailPhoto || null,
		content: metadata.content,
	}

	if (!post.title) throw new Error(`Missing required field: title.`)

	if (!post.content) throw new Error(`Missing  required field: content.`)

	if (!post.datePublished)
		throw new Error(`Missing required field: datePublished.`)

	return post as PostData
}

export const loadMarkdownFiles = async (path: string): Promise<RawFile[]> => {
	const blogPaths = globSync(`posts/${path}`)
	const postDataList: RawFile[] = await Promise.all(
		blogPaths.map((blogPath: string) => {
			const modPath = blogPath.slice(blogPath.indexOf(`posts/`) + 6)
			return loadMarkdownFile(`${modPath}`)
		}),
	)
	return postDataList
}

export const loadPost = async (path: string): Promise<PostData> => {
	const file = await loadMarkdownFile(path)
	return mdToPost(file)
}

export const loadBlogPosts = async (): Promise<PostData[]> => {
	return await (
		await loadMarkdownFiles(`*.md`)
	)
		.map(mdToPost)
		.filter(p => p.published)
		.sort((a, b) => (b.datePublished || 0) - (a.datePublished || 0))
}
