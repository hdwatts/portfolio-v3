/** @format */
import classnames from 'classnames'
import React from 'react'
import dynamic from 'next/dynamic'
import Hellos from './hellos'
import SocialList from '~/components/social-list'
import styles from './homepage.module.scss'
import Head from 'next/head'
import { motion } from 'framer-motion'
import Link from 'next/link'

const BackgroundImages = dynamic(() => import('./background-images'), {
	ssr: false,
})

const variants = {
	hidden: { y: '100vh' },
	show: {
		y: 0,
		transition: {
			duration: 0.75,
			type: 'spring',
			staggerChildren: 0.5,
			when: 'beforeChildren',
		},
	},
}

const Homepage = () => (
	<section
		className={`hero is-primary fullscreen-overlay is-large is-fullheight-with-navbar ${styles.overflowNone}`}
	>
		<Head>
			<title>Welcome | Howard Dean Watts</title>
		</Head>
		<div className='hero-body' style={{ overflow: 'hidden' }}>
			<BackgroundImages />
			<motion.div
				className={classnames('container', styles.homepageText)}
				initial='hidden'
				animate='show'
				variants={variants}
			>
				<motion.div className='block' variants={variants}>
					<h1 className='title'>
						<Hellos />
					</h1>
				</motion.div>
				<motion.div className='block' variants={variants}>
					<h2 className='subtitle'>I'm Howard Dean Watts</h2>
				</motion.div>
				<motion.div className='block' variants={variants}>
					<span className={styles.line}>Founding Staff Software Engineer</span>
					<span className='vertical-divider' style={{margin: 0}}></span>
					<span className={styles.line}>
						@{' '}
						<a href='https://www.chronograph.pe'>Chronograph.pe</a>
					</span>
					<span className='vertical-divider'>|</span>
					<span className={styles.line}>
						Creator of <a href='https://www.wordtree.app'>WordTree.app</a>
					</span>
					<span className='vertical-divider'>|</span>
					<span className={styles.line}>New York, NY</span>
				</motion.div>
				<motion.div
					className={classnames('block buttons', styles.buttons)}
					variants={variants}
				>
					<Link
						href='/about/'
						className={classnames('button is-inverted', styles.button)}
					>
						<strong>Learn More</strong>
					</Link>
					{/*<Link href='/blog/'>
						<a className={classnames('button is-inverted', styles.button)}>
							<strong>Blog</strong>
						</a>
</Link>*/}{' '}
					<SocialList />
				</motion.div>
			</motion.div>
		</div>
	</section>
)

export default Homepage
