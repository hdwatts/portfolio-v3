/** @format */

import React, { MouseEventHandler } from 'react'
import Link from 'next/link'

const NavbarItem: React.FC<{
	href: string
	text: string
	onClick?: MouseEventHandler
}> = ({ href, text, onClick }) => (
	<Link href={href}>
		<a className='navbar-item' onClick={onClick}>
			{text}
		</a>
	</Link>
)

export default NavbarItem
