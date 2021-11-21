import React from 'react'

// // first way to handle props
// function Greet(props) {
// 	// props.name = 'a name' // props are immutable(can't be changed ) so this won't work and the app will crash unless we use 'state' property
// 	console.log(props);
// 	return (
// 		<div>
// 			<h1>Hello {props.name} known as {props.heroName} </h1>
// 			{props.children}
// 		</div>
// 	)
// }


// // second way to handle props
// const Greet = ({name, heroName}) => {
// 	// props.name = 'a name' // props are immutable(can't be changed ) so this won't work and the app will crash unless we use 'state' property
// 	console.log({name, heroName});
// 	return (
// 		<div>
// 			<h1>Hello {name} known as {heroName} </h1>
// 			{props.children}
// 		</div>
// 	)
// }


// third way to handle props
const Greet = props =>  {
	const {name, heroName } = props
	console.log(props);
	return (
		<div>
			<h1>Hello {name} known as { heroName} </h1>
			{props.children}
		</div>
	)
}

export default Greet // this export method doesn't require importing the function with the exact funtion name (import myComponent from '.src')

// es6 arrow funtion
// export const Greet = () => { // this export method requires importing the function with the exact funtion name (import Greet from '.src')
//     return <h1>Hello Riadh</h1>
// }
