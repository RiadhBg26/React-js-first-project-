import React, { Component } from 'react'
import UpdatedComponent from './withCounter'



class ClickCounter extends Component {
	

	render() {
		const {count, incrementCount} = this.props
		return (
			<button onClick={incrementCount}> {this.props.name} clicked {count} times</button>
		)
	}
}
// params 1: wrapped component, params 2: incrementNumber
export default UpdatedComponent(ClickCounter, 5)
