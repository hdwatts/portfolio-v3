/** @format */
import React from 'react'
import ReactMarkdown from 'react-markdown'
import gfm from 'remark-gfm'
// import { BlogPost } from '../../components/BlogPost'
import { PostData } from '~/helpers/loader'
import Code from '~/components/elements/code'
import Heading from '~/components/elements/heading'
import Content from '~/components/elements/content'
import Table from '~/components/elements/table'

const Post: React.FC<{ post: PostData }> = ({ post }) => {
	// return <BlogPost post={post} />
	return (
		<section className='section'>
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
		</section>
	)
}

export default Post
