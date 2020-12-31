/** @format */
import React from 'react'
import glob from 'glob'
import ReactMarkdown from 'react-markdown'
import gfm from 'remark-gfm'
// import { BlogPost } from '../../components/BlogPost'
import { loadPost } from '../../loader'
import Code from '../../components/code'
import Heading from '../../components/elements/heading'
import Content from '../../components/elements/content'
import Table from '../../components/elements/table'

function Post(props: any) {
	const { post } = props
	// return <BlogPost post={post} />
	return (
		<div>
			<Content>
				<ReactMarkdown
					plugins={[gfm]}
					renderers={{
						code: Code,
						heading: Heading,
						table: Table,
					}}
				>
					{post.content}
				</ReactMarkdown>
			</Content>
		</div>
	)
}

export const getStaticPaths = () => {
	const blogs = glob.sync('./posts/*.md')
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
