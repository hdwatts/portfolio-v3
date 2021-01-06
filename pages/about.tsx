/** @format */

import { motion } from 'framer-motion'
import Head from 'next/head'
import React from 'react'

const About: React.FC<{}> = () => (
	<motion.section className='section'>
		<Head>
			<title>About | Howard Dean Watts</title>
		</Head>
		<div className='content'>
			<div className='block'>
				I am a software developer based in New York and work with Chronograph
				Private Equity. I specialize in web applications and have built apps
				with React-Redux, Node.js, .NET, Rails, ColdFusion, and Perl in
				professional environments. When I'm not coding, I love to travel, eat
				good food, and play guitar. Feel free to reach out to me anytime on the
				below platforms.
			</div>
		</div>
	</motion.section>
)

export default About
