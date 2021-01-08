/** @format */
import classnames from 'classnames'
import React from 'react'
import BackgroundImages from './background-images'
import Hellos from './hellos'
import SocialList from '~/components/social-list'
import styles from './homepage.module.scss'
import Head from 'next/head'
import { motion } from 'framer-motion'
import Link from 'next/link'

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

const Homepage: React.FC<{ numImages: number }> = ({ numImages }) => (
	<section
		className={`hero is-primary fullscreen-overlay is-large is-fullheight-with-navbar`}
	>
		<Head>
			<title>Welcome | Howard Dean Watts</title>
		</Head>
		<div className='hero-body' style={{ overflow: 'hidden' }}>
			<BackgroundImages numImages={numImages} />
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
					<span className={styles.line}>Lead Software Engineer</span>
					<span className='vertical-divider'>|</span>
					<span className={styles.line}>
						Founding Member of{' '}
						<a href='https://www.chronograph.pe'>Chronograph.pe</a>
					</span>
					<span className='vertical-divider'>|</span>
					<span className={styles.line}>New York, NY</span>
				</motion.div>
				<motion.div
					className={classnames('block buttons', styles.buttons)}
					variants={variants}
				>
					<Link href='/about/'>
						<a className={classnames('button is-inverted', styles.button)}>
							<strong>Learn More</strong>
						</a>
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
