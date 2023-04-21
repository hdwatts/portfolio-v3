/** @format */

import React, { useState } from 'react'
import Image from 'next/image'
import IntersectionPlaceholder from '~/components/intersection'
import useInterval from '~/helpers/use-interval'
import styles from './homepage.module.scss'

import { AnimatePresence, motion } from 'framer-motion'

const BackgroundImages: React.FC<{ numImages: number }> = ({ numImages }) => {
	const [index, setIndex] = useState<number>(
		Math.floor(Math.random() * numImages),
	)
	useInterval(() => setIndex(index + 1 >= numImages ? 0 : index + 1), 10000)

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
						alt='Vercel logo'
						src={require(`~/public/hero-images/${index}.jpg`)}
						width={1000}
						height={1000}
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
