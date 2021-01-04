/** @format */

import React from 'react'
import Link from 'next/link'

const NavbarItem: React.FC<{
	href: string
	text: string
}> = ({ href, text }) => (
	<Link href={href}>
		<a className='navbar-item'>{text}</a>
	</Link>
)

export default NavbarItem
