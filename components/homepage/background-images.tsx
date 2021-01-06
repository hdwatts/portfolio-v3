/** @format */

import React, { useState } from 'react'
import Img from 'react-optimized-image'
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
		<AnimatePresence initial={false}>
			<motion.div
				key={index}
				className={styles.bgWrap}
				animate={{ opacity: 1, zIndex: -2 }}
				transition={{ duration: 1 }}
				exit={{ opacity: 0, zIndex: -1 }}
			>
				<IntersectionPlaceholder
					src={require(`~/public/hero-images/${index}.jpg`)}
					lqip={require(`~/public/hero-images/${index}.jpg?lqip`)}
					fullHeight
				>
					<Img
						src={require(`~/public/hero-images/${index}.jpg`)}
						webp
						className={styles[`backgroundImage${index}`]}
					/>
				</IntersectionPlaceholder>
			</motion.div>
		</AnimatePresence>
	)
}

export default BackgroundImages
