/** @format */

import React from 'react'
import classnames from 'classnames'
import Element from './element'
import { BulmaComponent } from '.'

interface HeadingProps {
	size?: 1 | 2 | 3 | 4 | 5 | 6
	weight?: 'light' | 'normal' | 'semibold' | 'bold'
	subtitle?: boolean
	heading?: boolean
	spaced?: boolean
	level?: number
}

const Heading: BulmaComponent<HeadingProps, 'h1'> = ({
	children,
	className,
	size,
	level,
	subtitle,
	weight,
	spaced,
	heading,
	...props
}) => (
	<Element
		{...props}
		className={classnames(className, {
			title: !subtitle && !heading,
			subtitle,
			heading,
			[`is-${size || (level ? Math.min(3 + level, 6) : 6)}`]: size || level,
			[`has-text-weight-${weight}`]: weight,
			'is-spaced': spaced && !subtitle,
		})}
	>
		{children}
	</Element>
)

export default Heading
