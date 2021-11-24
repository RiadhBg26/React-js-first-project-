import React, { Component } from 'react'
import FRInput from './FRInput'

class FRParentInput extends Component {
	constructor(props) {
		super(props)
		
		// the parent component creates a ref and attaches it to the child component instance
		this.inputRef = React.createRef()
	}

	clickHandler = () => {
		// this will access the input element in the child component
		this.inputRef.current.focus()
	}
	
	render() {
		return (
			<div>
				{/* the ref is being forwarded from the parent parameter to the native input element (the input field inside the child component 'FRInput) */}
				{/* the ref will point to the native input element inside the FRInput component and not the whole component*/}
				<FRInput ref={this.inputRef}></FRInput>
				<button onClick={this.clickHandler}>Focus input</button>
			</div>
		)
	}
}

export default FRParentInput
