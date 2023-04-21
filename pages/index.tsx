/** @format */

import React from 'react'

import Homepage from '~/components/homepage'

const Index: React.FC<{ numImages: number }> = ({ numImages }) => (
	<Homepage numImages={numImages} />
)

export default Index

export const getStaticProps = () => {
	const imagePaths = [1, 2, 2, 3] //glob.sync(`public/hero-images/*.jpg`)
	return { props: { isFullscreen: true, numImages: imagePaths.length } }
}
