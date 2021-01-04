/** @format */
import classnames from 'classnames'
import React from 'react'
import BackgroundImages from './background-images'
import Hellos from './hellos'
import SocialList from './social-list'
import styles from './homepage.module.scss'

const Homepage: React.FC<{ numImages: number }> = ({ numImages }) => (
	<section
		className={`hero is-primary fullscreen-overlay is-large is-fullheight-with-navbar`}
	>
		<div className='hero-body' style={{ overflow: 'hidden' }}>
			<BackgroundImages numImages={numImages} />
			<div className={classnames('container', styles.homepageText)}>
				<div className='block'>
					<h1 className='title'>
						<Hellos />
					</h1>
					<h2 className='subtitle'>I'm Howard Dean Watts</h2>
				</div>
				<div className='block'>
					<span className={styles.line}>Lead Software Engineer</span>
					<span className='vertical-divider'>|</span>
					<span className={styles.line}>
						Founding Member of{' '}
						<a href='https://www.chronograph.pe'>Chronograph.pe</a>
					</span>
					<span className='vertical-divider'>|</span>
					<span className={styles.line}>New York, NY</span>
				</div>
				<SocialList />
			</div>
		</div>
	</section>
)

export default Homepage
