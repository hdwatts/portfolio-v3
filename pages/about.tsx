/** @format */

import { motion } from 'framer-motion'
import Head from 'next/head'
import React from 'react'
import Image from 'next/image'
import Timeline from '~/components/timeline'
import { speedText } from '~/helpers/animation-variants'

const About: React.FC<{}> = () => (
	<div>
		<Head>
			<title>About | Howard Dean Watts</title>
		</Head>
		<motion.section className='section'>
			<div className='content'>
				<PoolImage />
				<motion.div
					className='block'
					initial='initial'
					animate='animate'
					variants={speedText}
				>
					<h1>Hi! I'm Howard Watts</h1>
					<p>
						But feel free to call me Dean! I am a software developer based in
						New York and work with Chronograph Private Equity. I specialize in
						web applications and have built apps with React, Node.js, .NET,
						Rails, ColdFusion, and Perl in professional environments. When I'm
						not coding, I love to travel, eat good food, and play guitar.
					</p>
				</motion.div>
			</div>
		</motion.section>
		<section className='section'>
			<div className='content'>
				<div className='block'>
					<motion.h2 initial='initial' animate='animate' variants={speedText}>
						Professional History
					</motion.h2>
					<Timeline />
				</div>
			</div>
		</section>
	</div>
)

export default About

const PoolImage = () => (
	<div className='columns is-mobile is-centered'>
		<figure className='image column' style={{ maxWidth: 512 }}>
			<Image
				className='is-rounded about-image-border'
				src={require(`~/public/about/working.png`)}
				alt='Just working away'
			/>
		</figure>
	</div>
)
