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
	return (
		<nav
			key={`fullscreen-${isFullscreen}`}
			className={classnames('navbar', 'is-transparent', {
				'fullscreen-overlay': isFullscreen,
				'is-active': active,
			})}
		>
			<div className='navbar-brand'>
				<Link href='/'>
					<a className='navbar-item'>
						<FontAwesomeIcon icon={faCode} />
						&nbsp;HDWatts
					</a>
				</Link>
				<Burger onClick={() => setActive(!active)} active={active} />
			</div>

			<div className={classnames('navbar-menu', { 'is-active': active })}>
				<div className='navbar-start'>
					<NavbarItem href='/' text='Home' />
					<div className='navbar-item has-dropdown is-hoverable'>
						<a
							className='navbar-link'
							href='https://bulma.io/documentation/overview/start/'
						>
							Docs
						</a>
						<div className='navbar-dropdown is-boxed'>
							<NavbarItem href='/blog/' text='Portfolio' />
						</div>
					</div>
				</div>

				<div className='navbar-end'>
					<div className='navbar-item'>
						<div className='field is-grouped'>
							<p className='control'></p>
						</div>
					</div>
				</div>
			</div>
		</nav>
	)
}

export default Header
