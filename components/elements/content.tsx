/** @format */

import React from 'react'
import classnames from 'classnames'
import { Size } from './helpers/modifiers'
import Element from './element'
import { BulmaComponent } from '.'

interface ContentProps {
	size?: Size
}

const Content: BulmaComponent<ContentProps, 'div'> = ({
	children,
	className,
	size,
	...props
}) => (
	<Element
		{...props}
		className={classnames('content', className, {
			[`is-${size}`]: size,
		})}
	>
		{children}
	</Element>
)

export default Content
