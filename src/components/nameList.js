import React, { Component } from 'react'
import Person from './person'
const names = ['Riadh', 'Fakhri', 'Mehdi', 'Riadh']
//  first way
// function NameList() {
// 	const names = ['Riadh', 'Fakhri', 'Mehdi']
// 	return (
// 		<div>
// 				{names.map(name => {
// 					return (
// 						<h1> {name} </h1>
// 					)
// 				})}
// 		</div>
// 	)
// }

// second way
function NameList() {
	// key must be unique, if the key is 'name' and we have a name duplicated it will occure an error on data changes
	// const nameItems = names.map(name => <h2 key = {name}> {name} </h2> )
	
	// the solution is to add index and make it a value for the key prop
	const nameItems = names.map((name, index) => <h2 key = {index}> {index} {name} </h2> )
	return <div>{nameItems}</div>
}



// function NameList() {
// 	const people = [
// 		{ id: 1, name: "Riadh", gender: 'Male', job: "Web dev" },
// 		{ id: 2, name: "Fakhri", gender: 'Male', job: "mobile dev" },
// 		{ id: 3, name: "Mehdi", gender: 'Male', job: "Web dev" },
// 		{ id: 4, name: "Jamel", gender: 'Male', job: "Designer" }
// 	]

// 	const person = people.map(person => (
// 		// "key prop" is not accessible from child component and unredrebale neither so this key is reserved and not to pass parameters through
// 		<Person key={person.id} person = {person}></Person >
// 	))
// 	return (
// 		<div>
// 			<h1>People: </h1>
// 			<h4> {person} </h4>
// 		</div>
// 	)

// }

export default NameList
