/** @format */

import classnames from 'classnames'
import helpers from './helpers'
import responsive from './responsives'
import colors from './colors'
import typography from './typography'
import spacing from './spacing'
import flexbox from './flexbox'
import { OmitKeys } from '..'

const compose = (...fns: any[]) => (args: any) =>
	fns.reduce((arg, fn) => fn(arg), args)

export default {
	propTypes: {
		...helpers.propTypes,
		...responsive.propTypes,
		...colors.propTypes,
		...typography.propTypes,
		...flexbox.propTypes,
	},
	defaultProps: {
		...helpers.defaultProps,
		...responsive.defaultProps,
		...colors.defaultProps,
		...typography.defaultProps,
		...flexbox.defaultProps,
	},
	classnames: (props: any) =>
		classnames(
			helpers.classnames(props),
			responsive.classnames(props),
			colors.classnames(props),
			typography.classnames(props),
			spacing.classnames(props),
			flexbox.classnames(props),
		),
	clean: (props: any) =>
		compose(
			helpers.clean,
			responsive.clean,
			colors.clean,
			typography.clean,
			spacing.clean,
			flexbox.clean,
		)(props),
}

interface HelperProps {
	clearfix?: boolean
	pull?: 'left' | 'right'
	marginless?: boolean
	paddingless?: boolean
	overlay?: boolean
	clipped?: boolean
	radiusless?: boolean
	shadowless?: boolean
	unselectable?: boolean
	invisible?: boolean
	hidden?: boolean
}

type SpacingSize = 0 | 1 | 2 | 3 | 4 | 5 | 6

interface SpacingProps {
	mt?: SpacingSize
	mr?: SpacingSize
	mb?: SpacingSize
	ml?: SpacingSize
	mx?: SpacingSize
	my?: SpacingSize
	pt?: SpacingSize
	pr?: SpacingSize
	pb?: SpacingSize
	pl?: SpacingSize
	px?: SpacingSize
	py?: SpacingSize
}

interface FlexboxProps {
	flexDirection?: 'row' | 'row-reverse' | 'column' | 'column-reverse'
	flexWrap?: 'nowrap' | 'wrap' | 'wrap-reverse'
	justifyContent?:
		| 'flex-start'
		| 'flex-end'
		| 'center'
		| 'space-around'
		| 'space-between'
		| 'space-evenly'
		| 'start'
		| 'end'
		| 'left'
		| 'right'
	alignContent?:
		| 'flex-start'
		| 'flex-end'
		| 'center'
		| 'space-around'
		| 'space-between'
		| 'space-evenly'
		| 'stretch'
		| 'start'
		| 'end'
		| 'baseline'
	alignItems?:
		| 'auto'
		| 'flex-start'
		| 'flex-end'
		| 'center'
		| 'baseline'
		| 'stretch'
}

interface ResponsiveModifiers {
	display?: 'block' | 'flex' | 'inline' | 'inline-block' | 'inline-flex'
	hide?: boolean
	textSize?: 1 | 2 | 3 | 4 | 5 | 6
	textAlignment?: 'centered' | 'justified' | 'left' | 'right'
}

interface ResponsiveProps {
	mobile?: ResponsiveModifiers
	tablet?: ResponsiveModifiers
	desktop?: ResponsiveModifiers
	widescreen?: ResponsiveModifiers
	fullhd?: ResponsiveModifiers
	touch?: ResponsiveModifiers
	mobileOnly?: ResponsiveModifiers
	tabletOnly?: ResponsiveModifiers
	desktopOnly?: ResponsiveModifiers
	widescreenOnly?: ResponsiveModifiers
	fullhdOnly?: ResponsiveModifiers
	touchOnly?: ResponsiveModifiers
}

interface ColorProps {
	textColor?: string
	backgroundColor?: string
	colorVariant?: 'light' | 'dark'
}

interface TypographyProps {
	textSize?: 1 | 2 | 3 | 4 | 5 | 6
	textAlignment?: 'centered' | 'justified' | 'left' | 'right'
	textTransform?: 'capitalized' | 'lowercase' | 'uppercase'
	textWeight?: 'light' | 'normal' | 'semibold' | 'bold'
	italic?: boolean
}

export type HTMLAttributes<K extends keyof JSX.IntrinsicElements> = OmitKeys<
	JSX.IntrinsicElements[K],
	keyof ModifierProps | 'ref'
>

// Credit to https://stackoverflow.com/questions/54049871/how-do-i-type-this-as-jsx-attribute-in-typescript

export type ModifierProps = SpacingProps &
	FlexboxProps &
	HelperProps &
	ColorProps &
	ResponsiveProps &
	TypographyProps

/**
 * Defines all Bulma color values
 */
export type Color =
	| 'primary'
	| 'success'
	| 'info'
	| 'warning'
	| 'danger'
	| 'light'
	| 'dark'
	| 'white'
	| 'black'
	| 'link'

/**
 * Defines all Bulma size values
 */
export type Size = 'small' | 'medium' | 'large'

/**
 * Defines all Bulma breakpoint values
 */
export type Breakpoint =
	| 'desktop'
	| 'tablet'
	| 'mobile'
	| 'widescreen'
	| 'fullhd'
	| 'touch'
