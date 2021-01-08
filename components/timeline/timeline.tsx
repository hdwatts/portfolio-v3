/** @format */

import React, { PropsWithChildren } from 'react'

import styles from './timeline.module.scss'

const EndOfScrollContainer: React.FC<{}> = ({}) => (
	<div className={styles.endOfScroll}></div>
)

const VerticalTimeline: React.FC<PropsWithChildren<{}>> = ({ children }) => {
	return (
		<div className={styles.timeline}>
			{children}
			<EndOfScrollContainer />
		</div>
	)
}

export default VerticalTimeline
