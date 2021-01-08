/** @format */

import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { motion } from 'framer-motion'
import { SocialListFooter } from '~/components/social-list'

import { speedText } from '~/helpers/animation-variants'

import styles from './footer.module.scss'

const Footer: React.FC<{}> = () => (
	<motion.div initial='initial' animate='animate' variants={speedText}>
		<footer className='footer'>
			<div className='content has-text-centered'>
				<p>
					<small>
						<strong>Created</strong> by{' '}
						<a href='https://hdwatts.com'>Howard Dean Watts</a>. The source code
						for this portfolio can be found on my{' '}
						<a href='http://github.com/hdwatts/mit'>
							GitHub <FontAwesomeIcon icon={faGithub} />
						</a>
						.
					</small>
				</p>
				<p>
					<small>
						This portfolio is possible thanks to the contributors to{' '}
						<a href='https://nextjs.org/'>Next.js</a>,{' '}
						<a href='https://www.nordtheme.com/'>Nord</a>,{' '}
						<a href='https://bulma.io/'>Bulma</a>, and many{' '}
						<a href='https://fontawesome.com/'>more</a>.
					</small>
				</p>
			</div>
			<div className={styles.socialList}>
				<SocialListFooter />
			</div>
		</footer>
	</motion.div>
)

export default Footer
