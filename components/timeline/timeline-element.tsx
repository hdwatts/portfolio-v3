/** @format */

import React, { CSSProperties, PropsWithChildren, ReactElement } from 'react'
import { IconDefinition } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import styles from './timeline.module.scss'

interface TimelineElementProps {
	contentArrowStyle?: CSSProperties | object
	contentStyle?: CSSProperties | object
	date?: ReactElement | string
	icon?: IconDefinition
	iconStyle?: CSSProperties | object
	iconOnClick?: () => void
	style?: CSSProperties | object
	skills?: string[]
}

const TimelineElement: React.FC<PropsWithChildren<TimelineElementProps>> = ({
	children,
	contentArrowStyle,
	contentStyle,
	date = '',
	icon,
	iconOnClick,
	iconStyle,
	style,
	skills,
}) => (
	<div style={style} className={styles.timelineElement}>
		<React.Fragment>
			<span
				style={iconStyle}
				className={styles.timelineIcon}
				onClick={iconOnClick}
			>
				<FontAwesomeIcon icon={icon || faPlus} />
			</span>
			<div style={contentStyle} className={styles.timelineContent}>
				<div style={contentArrowStyle} className={styles.timelineArrow} />
				<div className={styles.timelineElementInner}>{children}</div>
				<div className={styles.timelineSkillsContainer}>
					<div className={styles.timelineDate}>{date}</div>
					<div className='tags'>
						{skills &&
							skills.map(skill => (
								<span key={skill} className='tag'>
									{skill}
								</span>
							))}
					</div>
				</div>
			</div>
		</React.Fragment>
	</div>
)

export default TimelineElement
