import React from 'react'

function FragmentDemo() {
	return (
		// <div>
		// React.Fragment replaces the parent div required by react to contain the elements. 
		// With React.fragment we get rid of rendering a div to the DOM
		<React.Fragment> 
			<h1>
				Fragment Demo
			</h1>
			<p>This is a fragment demo description</p>
		</React.Fragment>
		// </div>
	)
}

export default FragmentDemo
