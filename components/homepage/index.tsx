/** @format */
import classnames from 'classnames'
import React from 'react'
import dynamic from 'next/dynamic'
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
			<title>save for later</title>
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
					<h2 className='subtitle'>We're save for later</h2>
				</motion.div>
				<motion.div className='block' variants={variants}>
					<span className={styles.line}>A dream pop duo </span>
					<span className={styles.line}>
						based in New York, NY{' '}
					</span>
				</motion.div>
				<motion.div
					className={classnames('block buttons', styles.buttons)}
					variants={variants}
				>
					<Link
						href='https://linktr.ee/saveforlater'
						className={classnames('button is-inverted', styles.button)}
					>
						<strong>Links</strong>
					</Link>
					<SocialList />
				</motion.div>
			</motion.div>
		</div>
	</section>
)

export default Homepage
