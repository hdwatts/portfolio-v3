/** @format */

import React, { MouseEventHandler } from 'react'
import Link from 'next/link'

const NavbarItem: React.FC<{
	href: string
	text: string
	onClick?: MouseEventHandler
}> = ({ href, text, onClick }) => (
	<Link href={href} className='navbar-item' onClick={onClick}>
		{text}
	</Link>
)

export default NavbarItem
