/**
 * /* eslint-disable jsx-a11y/alt-text
 *
 * @format
 */

import { useState, cloneElement, ReactElement, useEffect } from 'react'
import useIntersect from './intersect'
import styles from './intersection.module.scss'

export interface ImgSrc {
	src: string
	width: number
	height: number
	format: string
	toString(): string
}

const IntersectionPlaceholder: React.FC<{
	src: ImgSrc
	lqip: ImgSrc
	children: ReactElement
	style?: any
	observerOptions?: IntersectionObserverInit
	stdDeviation?: string
	className?: string
	onLoad?: () => void
	placeholderClassName?: string
	fullHeight?: boolean
	isRounded?: boolean
}> = ({
	src,
	lqip,
	children,
	style,
	observerOptions,
	stdDeviation,
	className,
	onLoad,
	placeholderClassName,
	fullHeight,
	isRounded,
}) => {
	const [loaded, setLoaded] = useState(false)
	const { ref, isIntersecting } = useIntersect(observerOptions, true)
	/**
	 * NOTE: we have to clone the element since passing down the src from the props does currently not work.
	 * and because we can only extend the props of a cloned element and not the orginial one:
	 * https://github.com/cyrilwanner/next-optimized-images/issues/186 see comment No. 3
	 * */
	const clonedChildren = cloneElement(children, {
		className: loaded
			? `${children.props?.className || ''} ${styles.loaded} ${
					stdDeviation === '0' ? styles.skipAnim : ''
			  } ${styles.original}`
			: `${children.props?.className || ''} ${styles.original}`,
		onLoad: () => setLoaded(true),
		onLoadedData: () => setLoaded(true),
		style: {
			...children.props?.style,
			marginTop: fullHeight
				? `-100vh`
				: `${-((src.height / src.width) * 100)}%`,
		},
	})
	const blurId = `blur_${src.format}_${stdDeviation}`
	// HACK: we have to manually trigger the onload since safari is not supporting onLoad on svg image tag
	useEffect(() => {
		if (onLoad) {
			// trigger onload immediatly if we have an base64 encoded img
			if (lqip.src.indexOf('data:image') >= 0) onLoad()
			else {
				// otherwise load image again and trigger when loaded
				const img = new Image()
				img.src = lqip.src
				img.onload = onLoad
			}
		}
	}, [])
	const svgClassNames = loaded
		? `${styles.svgImageDisable} ${styles.svgImage} ${
				stdDeviation === '0' ? styles.skipAnim : ''
		  }`
		: styles.svgImage

	return (
		<div ref={ref} className={`${className} ${styles.container}`} style={style}>
			<svg
				className={placeholderClassName}
				viewBox={fullHeight ? undefined : `0 0 ${src.width} ${src.height}`}
			>
				<defs>
					<filter id={blurId} x='0%' y='0%' width='100%' height='100%'>
						<feGaussianBlur
							in='SourceGraphic'
							stdDeviation={stdDeviation}
							colorInterpolationFilters='sRGB'
						/>
						{src.format !== 'png' && (
							<feComponentTransfer colorInterpolationFilters='sRGB'>
								<feFuncA
									type='table'
									tableValues='1 1'
									colorInterpolationFilters='sRGB'
								/>
							</feComponentTransfer>
						)}
					</filter>
					{isRounded && (
						<rect
							id='rect'
							x='0%'
							y='0%'
							width='100%'
							height='100%'
							rx='290486'
						/>
					)}
					{isRounded && (
						<clipPath id='clip'>
							<use href='#rect' />
						</clipPath>
					)}
				</defs>
				{isRounded && (
					<use
						href='#rect'
						className={svgClassNames}
						strokeWidth='0'
						stroke='black'
					/>
				)}
				<image
					preserveAspectRatio='none'
					filter={`url(#${blurId})`}
					className={svgClassNames}
					xlinkHref={lqip.src}
					onLoad={onLoad}
					width={fullHeight ? '100%' : src.width}
					height={fullHeight ? '100%' : src.height}
					clipPath={isRounded ? 'url(#clip)' : undefined}
				/>
			</svg>
			{isIntersecting && clonedChildren}
		</div>
	)
}
IntersectionPlaceholder.defaultProps = {
	style: undefined,
	observerOptions: {},
	stdDeviation: '18',
	placeholderClassName: '',
	className: '',
	onLoad: undefined,
}

export default IntersectionPlaceholder
