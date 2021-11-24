import React, { Component } from 'react'

class RefsDemo extends Component {
	constructor(props) {
		super(props)
	
		// first way to create Refs 
		this.inputRef = React.createRef()
		
		// second way to create Refs (create a callBackRef and then assign the domElement to it and focus it later with componentDidMount())
		this.cbRef = null;
		this.setCbRef = (domElement) => {
			this.cbRef = domElement;
		} 
	}
	
	componentDidMount() {
		// first way to create Refs 
		console.log(this.inputRef); // displays the DOM node element
		this.inputRef.current.focus() // auto focus on input on page init
	
		// second way to create Refs
		if (this.cbRef) {
			this.cbRef.focus()
		} 
	}
	
	clickHandler = () => {
		console.log(this.inputRef.current.value);
	}



	render() {
		return (
			<div>
				{/* first way to create Refs */}
				<input type="text" ref = {this.inputRef} />
				<button onClick = {this.clickHandler}>Click to log</button>
				{/* second way to create Refs */}
				{/* attached the ref to an element using the method that in return assigns the element to the property */}
				<input type="text" ref = {this.setCbRef} />
			</div>
		)
	}
}

export default RefsDemo
