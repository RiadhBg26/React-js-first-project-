import React from 'react'

function Person({person}) {
	console.log('person => ', person)
	return (
		<div>
			<h3> Name: {person.name}, Gender: {person.gender}, job: {person.job} </h3>
		</div>
	)
}

export default Person
