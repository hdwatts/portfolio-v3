/** @format */

import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCode } from '@fortawesome/free-solid-svg-icons'
import classnames from 'classnames'
import Link from 'next/link'

import Burger from './burger'
//import NavbarItem from './navbar-item'

const Header: React.FC<{ isFullscreen: boolean }> = ({ isFullscreen }) => {
	const [active, setActive] = useState(false)
	//const resetActive = () => setActive(false)
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

			{/* <div className={classnames('navbar-menu', { 'is-active': active })}>
				<div className='navbar-start'>
					<NavbarItem href='/about/' text='About' onClick={resetActive} />
					<div className='navbar-item has-dropdown is-hoverable'>
						<Link href='/blog/'>
							<a className='navbar-item' onClick={resetActive}>
								Write ups
							</a>
						</Link>
						<div className='navbar-dropdown is-boxed'>
							<NavbarItem
								href='/blog/'
								text='Portfolio'
								onClick={resetActive}
							/>
						</div>
					</div>
				</div>
		</div> */}
		</nav>
	)
}

export default Header

const Brand = () => (
	<Link href='/'>
		<a className='navbar-item'>
			<FontAwesomeIcon icon={faCode} />
			&nbsp;HDWatts
		</a>
	</Link>
)
