import React, { Fragment } from 'react'

function Columns() {
	const items = [{id: 23, title: 'React.Fragment demo'}];
	return (
		// // <div> 
		// <React.Fragment>
		// 	{/* error expected: <td> can't be child of a <div> tag  */}
		// 	{items.map(item => (
		// 		// React.Fragment accepts 'key' props
		// 		<React.Fragment key = { item.id }>
		// 			<h1> Title </h1>
		// 			<p> {item.title} </p>
		// 		</React.Fragment>
		// 	))}
		// 	<td>Name</td>
		// 	<td>Riadh bg</td>
		// </React.Fragment>
		// // </div>

		// we can use emty tags and it has the same effect as React.Fragment (not adding extra nodes to the DOM) exept that empty tags don't accept 'key' props
		<>
		 	<td>Name</td>
			<td>Riadh bg</td>
		</>
	)
}

export default Columns
