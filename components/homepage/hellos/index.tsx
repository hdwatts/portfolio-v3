/** @format */
import { AnimatePresence, motion } from 'framer-motion'
import React, { useEffect, useState } from 'react'

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
	const [firstRun, setFirstRun] = useState<boolean>(true)
	useInterval(
		() => {
			if (firstRun) {
				setFirstRun(false)
			} else {
				setIndex(index + 1 >= hellos.length ? 0 : index + 1)
			}
		},
		firstRun ? 8000 : 3000,
	)

	return (
		<div className={styles.hellos}>
			<AnimatePresence>
				<motion.span
					key={index}
					initial={{ opacity: 0, y: '1em' }}
					animate={{ opacity: 1, y: 0 }}
					exit={{ opacity: 0 }}
					transition={{ duration: 0.5 }}
				>
					{hellos[index]}
				</motion.span>
			</AnimatePresence>
		</div>
	)
}

export default Hellos
