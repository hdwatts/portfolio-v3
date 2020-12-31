/** @format */

import React from 'react'
import ReactMarkdown from 'react-markdown/with-html'
const markdown = ''
class Index extends React.Component {
	render() {
		return (
			<div>
				<div>Welcome to the public landing page. A.k.a The Home Page!!</div>
				<ReactMarkdown>{markdown}</ReactMarkdown>
			</div>
		)
	}
}
export default Index
