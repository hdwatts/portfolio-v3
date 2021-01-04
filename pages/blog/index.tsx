/** @format */
import React from 'react'
import { loadBlogPosts, PostData } from '~/helpers/loader'
import Content from '~/components/elements/content'
import Link from 'next/link'

const Index = (props: any) => {
	const { posts } = props
	// return <BlogPost post={post} />
	return (
		<div>
			<section>
				<Content>
					<h1>Blog Content</h1>
				</Content>
			</section>
			<section>
				<Content>
					{posts &&
						posts.map((post: PostData) => (
							<Link href={post.canonicalUrl || ''} key={post.title}>
								<a> {post.title} </a>
							</Link>
						))}
				</Content>
			</section>
		</div>
	)
}

export default Index

export const getStaticProps = async () => {
	const posts = await loadBlogPosts()

	// comment out to turn off RSS generation during build step.
	// await generateRSS(posts)

	const props = {
		posts,
	}

	return { props }
}
