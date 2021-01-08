/** @format */

import { motion } from 'framer-motion'
import React, { PropsWithChildren } from 'react'

import styles from './timeline.module.scss'

const VerticalTimeline: React.FC<PropsWithChildren<{}>> = ({ children }) => {
	return (
		<motion.div
			className={styles.timeline}
			initial='initial'
			animate='animate'
			variants={delayChildren}
		>
			{children}
		</motion.div>
	)
}

export default VerticalTimeline

const delayChildren = {
	initial: {
		opacity: 0,
	},
	animate: {
		opacity: 1,
		transition: {
			duration: 2,
		},
	},
}
