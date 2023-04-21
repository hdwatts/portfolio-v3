/** @format */

import React, {
	CSSProperties,
	PropsWithChildren,
	ReactElement,
	useEffect,
	useRef,
	useState,
} from 'react'
import { IconDefinition } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import styles from './timeline.module.scss'
import { motion, useInView } from 'framer-motion'

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

const variants = {
	hidden: { opacity: 0, y: 200 },
	show: {
		opacity: 1,
		y: 0,
		transition: {
			duration: 1,
			y: {
				type: 'spring',
			},
		},
	},
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
}) => {
	const ref = useRef(null)
	const isInView = useInView(ref)
	const [hasBeenInView, setHasBeenInView] = useState(false)
	useEffect(() => {
		if (!hasBeenInView && isInView) {
			setHasBeenInView(true)
		}
	}, [isInView, hasBeenInView])

	return (
		<motion.div
			ref={ref}
			style={style}
			className={styles.timelineElement}
			initial='hidden'
			animate={hasBeenInView ? 'show' : 'hidden'}
			variants={variants}
		>
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
		</motion.div>
	)
}

export default TimelineElement
