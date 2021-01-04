/** @format */

import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

const Footer: React.FC<{}> = () => (
	<footer className='footer'>
		<div className='content has-text-centered'>
			<p>
				<strong>Created</strong> by{' '}
				<a href='https://hdwatts.com'>Howard Dean Watts</a>. The source code for
				this portfolio can be found on my{' '}
				<a href='http://github.com/hdwatts/mit'>
					GitHub <FontAwesomeIcon icon={faGithub} />
				</a>
				.
			</p>
			<p>
				This portfolio is possible thanks to the contributors to{' '}
				<a href='https://nextjs.org/'>Next.js</a>,{' '}
				<a href='https://www.nordtheme.com/'>Nord</a>,{' '}
				<a href='https://bulma.io/'>Bulma</a>, and many{' '}
				<a href='https://fontawesome.com/'>more</a>.
			</p>
		</div>
	</footer>
)

export default Footer
