/** @format */

import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCode } from '@fortawesome/free-solid-svg-icons'
import classnames from 'classnames'
import Link from 'next/link'
import Burger from './burger'
import NavbarItem from './navbar-item'

const Header: React.FC<{ isFullscreen: boolean }> = ({ isFullscreen }) => {
	const [active, setActive] = useState(false)
	const resetActive = () => setActive(false)
	return (
		<nav
			key={`fullscreen-${isFullscreen}`}
			className={classnames('navbar', 'is-transparent', {
				'fullscreen-overlay': isFullscreen,
				'is-active': active,
			})}
		>
			<div className='navbar-brand'>
				<Brand />
				<Burger onClick={() => setActive(!active)} active={active} />
			</div>

			<div className={classnames('navbar-menu', { 'is-active': active })}>
				<div className='navbar-start'>
					<NavbarItem href='/about/' text='About' onClick={resetActive} />
					
				</div>
			</div>
		</nav>
	)
}

export default Header

const Brand = () => (
	<Link href='/' className='navbar-item'>
		save for later
	</Link>
)
