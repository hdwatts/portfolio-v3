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

const socials = [
	{
		link: 'mailto:howard@hdwatts.com',
		icon: faEnvelope,
	},
	{
		link: 'https://www.instagram.com/deanwatts2',
		icon: faInstagram,
	},
	{
		link: 'https://www.github.com/hdwatts',
		icon: faGithub,
	},
	{
		link: 'https://www.linkedin.com/in/hdwatts',
		icon: faLinkedin,
	},
]

const SocialList: React.FC<{}> = () => {
	return (
		<p className={styles.socialList}>
			{socials.map(social => (
				<SocialListItem key={social.link} {...social} />
			))}
		</p>
	)
}

export default SocialList

const SocialListItem: React.FC<{ link: string; icon: IconDefinition }> = ({
	link,
	icon,
}) => (
	<a href={link}>
		<span className='icon'>
			<FontAwesomeIcon icon={icon} />
		</span>
	</a>
)
