/** @format */

import React from 'react'
import classnames from 'classnames'

const Burger: React.FC<{
	onClick: React.MouseEventHandler
	active: boolean
}> = ({ onClick, active }) => (
	<div
		className={classnames('navbar-burger', { 'is-active': active })}
		onClick={onClick}
	>
		<span></span>
		<span></span>
		<span></span>
	</div>
)

export default Burger
