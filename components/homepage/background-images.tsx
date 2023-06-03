/** @format */

import React, { useState } from 'react'
import Image, { StaticImageData } from 'next/image'
import useInterval from '~/helpers/use-interval'
import styles from './homepage.module.scss'

import { AnimatePresence, motion } from 'framer-motion'

import img0 from '~/public/hero-images/0.jpg'
import img1 from '~/public/hero-images/1.png'


interface Images {
	[key: number]: StaticImageData
}

const IMAGES: Images = {
	0: img0,
	1: img1,

}

const NUM_IMAGES = Object.keys(IMAGES).length

const BackgroundImages = () => {
	const [index, setIndex] = useState<number>(
		Math.floor(Math.random() * NUM_IMAGES),
	)

	useInterval(() => setIndex(index + 1 >= NUM_IMAGES ? 0 : index + 1), 10000)

	if (index === -1) {
		return null
	}

	return (
		<React.Fragment>
			<div className={styles.transparentOverlay}></div>
			<AnimatePresence initial={false}>
				<motion.div
					key={index}
					className={styles.bgWrap}
					animate={{ opacity: 1, zIndex: -3 }}
					transition={{ duration: 1 }}
					exit={{ opacity: 0, zIndex: -2 }}
				>
					<Image
						priority
						placeholder='blur'
						width={1000}
						height={1000}
						alt='Vercel logo'
						src={IMAGES[index]}
						style={{
							maxWidth: '100vw',
							height: 'auto',
							width: '100vw',
						}}
						className={styles[`backgroundImage${index}`]}
					/>
				</motion.div>
			</AnimatePresence>
		</React.Fragment>
	)
}

export default BackgroundImages
