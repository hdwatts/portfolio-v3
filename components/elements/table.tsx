/** @format */
import React from 'react'
import classnames from 'classnames'
import Element from './element'
import { BulmaComponent } from '.'

const Container: BulmaComponent<{ position?: any }, 'div'> = ({
	className,
	children,
	position,
	...props
}) => (
	<Element {...props} className={classnames('table-container', className)}>
		{children}
	</Element>
)

interface TableProps {
	size?: 'fullwidth' | 'narrow'
	striped?: boolean
	bordered?: boolean
	hoverable?: boolean
	columnAlignment?: string
}
const Table: BulmaComponent<TableProps, 'table'> = ({
	children,
	className,
	size,
	striped,
	bordered,
	columnAlignment,
	hoverable,
	...props
}) => (
	<Container>
		<Element
			renderAs='table'
			{...props}
			className={classnames('table', className, {
				[`is-${size}`]: size,
				'is-bordered': bordered,
				'is-striped': striped,
				'is-hoverable': hoverable,
			})}
		>
			{children}
		</Element>
	</Container>
)

export default Table
