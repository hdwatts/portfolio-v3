/** @format */

import React from 'react'
import {
	faInstagram,
	faGithub,
	faLinkedin,
	IconDefinition,
} from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styles from './social-list.module.scss'
import { motion } from 'framer-motion'
import classnames from 'classnames'

const socials = [
	{
		link: 'mailto:howard@hdwatts.com',
		icon: faEnvelope,
		message: 'Shoot me an Email!',
	},
	{
		link: 'https://www.instagram.com/deanwatts2',
		icon: faInstagram,
		message: 'Follow me on Instagram!',
	},
	{
		link: 'https://www.github.com/hdwatts',
		icon: faGithub,
		message: 'Fork me on GitHub!',
	},
	{
		link: 'https://www.linkedin.com/in/hdwatts',
		icon: faLinkedin,
		message: 'Add me on LinkedIn!',
	},
]
const variants = {
	hidden: { y: '100vh' },
	show: {
		y: 0,
		transition: {
			duration: 0.75,
			type: 'spring',
			staggerChildren: 2,
			when: 'beforeChildren',
		},
	},
}

const SocialList: React.FC<{}> = () => {
	return (
		<motion.div
			className={classnames(
				styles.socialList,
				'field',
				'is-grouped',
				'is-grouped-multiline',
			)}
			variants={variants}
		>
			{socials.map(social => (
				<SocialListItem key={social.link} {...social} />
			))}
		</motion.div>
	)
}

export default SocialList

const mainItemVariants = {
	hidden: { opacity: 0.5 },
	show: {
		opacity: 1,
		transition: {
			duration: 0.75,
		},
	},
}

const hoverVariants = {
	hidden: { maxWidth: 0, opacity: 0, overflow: 'hidden' },
	show: {
		maxWidth: [0, 200, 200, 0],
		opacity: [0, 1, 1, 0],
		overflow: 'hidden',
		transition: {
			duration: 2,
			width: {
				type: 'spring',
			},
		},
	},
}

const hoverDarkVaraints = {
	hidden: { borderTopRightRadius: 4, borderBottomRightRadius: 4 },
	show: {
		borderTopRightRadius: [4, 0, 0, 4],
		borderBottomRightRadius: [4, 0, 0, 4],
		transition: {
			duration: 2,
		},
	},
}

const SocialListItem: React.FC<{
	link: string
	icon: IconDefinition
	message: string
}> = ({ link, icon, message }) => (
	<motion.div className='control' variants={mainItemVariants}>
		<div className='tags has-addons'>
			<motion.a href={link} className='icon tag' variants={hoverDarkVaraints}>
				<FontAwesomeIcon icon={icon} />
			</motion.a>
			<motion.span
				className={classnames('tag', 'is-dark')}
				variants={hoverVariants}
			>
				<span className={styles.tag}>{message}</span>
			</motion.span>
		</div>
	</motion.div>
)
