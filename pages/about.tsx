/** @format */

import { motion } from 'framer-motion'
import Head from 'next/head'
import React from 'react'
import Img from 'react-optimized-image'
import IntersectionPlaceholder from '~/components/intersection'
import Timeline from '~/components/timeline'
import { speedText } from '~/helpers/animation-variants'

const About: React.FC<{}> = () => (
	<motion.section className='section'>
		<Head>
			<title>About | Howard Dean Watts</title>
		</Head>
		<div className='content'>
			<PoolImage />
			<div className='block'>
				<h1>Hi! I'm Howard Dean Watts</h1>
				<motion.p initial='initial' animate='animate' variants={speedText}>
					But feel free to call me Dean! I am a software developer based in New
					York and work with Chronograph Private Equity. I specialize in web
					applications and have built apps with React, Node.js, .NET, Rails,
					ColdFusion, and Perl in professional environments. When I'm not
					coding, I love to travel, eat good food, and play guitar. Feel free to
					reach out to me anytime on the below platforms.
				</motion.p>
			</div>
			<div className='block'>
				<Timeline />
			</div>
		</div>
	</motion.section>
)

export default About

const PoolImage = () => (
	<div className='columns is-mobile is-centered'>
		<figure className='image column' style={{ maxWidth: 512 }}>
			<IntersectionPlaceholder
				isRounded
				src={require(`~/public/about/working.png`)}
				lqip={require(`~/public/about/working.png?lqip`)}
				style={{ padding: 25 }}
			>
				<Img
					className='is-rounded about-image-border'
					src={require(`~/public/about/working.png`)}
					webp
				/>
			</IntersectionPlaceholder>
		</figure>
	</div>
)
