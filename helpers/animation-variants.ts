/** @format */

import { Variants } from 'framer-motion'

export const speedText: Variants = {
	initial: { opacity: 0, y: -10 },
	animate: {
		opacity: 1,
		y: 0,
		transition: {
			delay: 0.3,
		},
	},
}
