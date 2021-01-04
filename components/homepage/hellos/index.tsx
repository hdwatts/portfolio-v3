/** @format */
import React, { useState } from 'react'
import { CSSTransition, TransitionGroup } from 'react-transition-group'

import useInterval from '~/helpers/use-interval'

import styles from './hellos.module.scss'

const hellos = [
	'Hello',
	'Bonjour',
	'Hola',
	'Ciao',
	'Nǐ hǎo',
	'Konnichiwa',
	'Anyoung',
	'Guten Tag',
	'Hej',
	'Привет',
	'Namaste',
	'Shalom',
	'Salaam',
	'Goedendag',
	'Salut',
	'Здравствуйте',
	'Aloha',
	'你好',
	'Salve',
	'Hallo',
	'Ahlan',
	'Yassou',
	'Goddag',
	'Olá',
	'Oi',
]

const Hellos: React.FC<{}> = () => {
	const [index, setIndex] = useState<number>(0)
	useInterval(() => setIndex(index + 1 >= hellos.length ? 0 : index + 1), 3000)

	return (
		<TransitionGroup className={styles.hellos}>
			<CSSTransition key={index} timeout={500} classNames={{ ...styles }}>
				<span>{hellos[index]}</span>
			</CSSTransition>
		</TransitionGroup>
	)
}

export default Hellos
