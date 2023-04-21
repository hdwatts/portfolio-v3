/** @format */
import React from 'react'
import { globSync } from 'glob'
import { loadPost, PostData } from '~/helpers/loader'
import BlogPost from '~/components/blogpost'

const Post: React.FC<{ post: PostData }> = ({ post }) => {
	return <BlogPost post={post} />
}

export const getStaticPaths = () => {
	const blogs = globSync('./posts/*.md')
	const slugs = blogs.map((file: string) => {
		const popped = file.split('/').pop()
		if (!popped) throw new Error(`Invalid blog path: ${file}`)
		return popped.slice(0, -3).trim()
	})

	const paths = slugs.map((slug: string) => `/blog/${slug}`)
	return { paths, fallback: false }
}

export const getStaticProps = async ({ params }: any) => {
	const post = await loadPost(`${params.blog}.md`)
	return { props: { post } }
}

export default Post
