/** @format */

import React, { useState } from 'react'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import Img from 'react-optimized-image'
import IntersectionPlaceholder from '~/components/intersection'
import useInterval from '~/helpers/use-interval'
import styles from './homepage.module.scss'

const BackgroundImages: React.FC<{ numImages: number }> = ({ numImages }) => {
	const [index, setIndex] = useState<number>(
		Math.floor(Math.random() * numImages),
	)
	useInterval(() => setIndex(index + 1 >= numImages ? 0 : index + 1), 10000)

	return (
		<TransitionGroup className={styles.bgWrap}>
			<CSSTransition key={index} timeout={1000} classNames={{ ...styles }}>
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
			</CSSTransition>
		</TransitionGroup>
	)
}

export default BackgroundImages
