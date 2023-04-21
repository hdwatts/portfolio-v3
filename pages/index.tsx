/** @format */

import React from 'react'

import Homepage from '~/components/homepage'

const Index = () => <Homepage />

export default Index

export const getStaticProps = () => {
	return { props: { isFullscreen: true } }
}
