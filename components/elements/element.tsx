/** @format */

import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import modifiers from './helpers/modifiers'
import renderAsShape from './helpers/render-as'

interface ElementProps {
	className?: any
	renderAs?: any
	domRef?: any
	style?: any
	node?: any
}

const Element = ({
	className,
	renderAs,
	domRef,
	node,
	...allProps
}: ElementProps) => {
	const RenderAs = renderAs
	const props = modifiers.clean(allProps)
	return (
		<RenderAs
			ref={domRef}
			className={
				classnames(className, modifiers.classnames(allProps)) || undefined
			}
			{...props}
		/>
	)
}

Element.propTypes = {
	...modifiers.propTypes,
	/**
	 * Reference to Dom element
	 */
	domRef: PropTypes.object,
	className: PropTypes.string,
	renderAs: renderAsShape,
}

Element.defaultProps = {
	...modifiers.defaultProps,
	domRef: undefined,
	className: undefined,
	style: undefined,
	renderAs: 'div',
}

export default Element
