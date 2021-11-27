import React, { Component } from 'react'
import UpdatedComponent from './withCounter'


class HoverCounter extends Component {
	
	render() {
		const {count, incrementCount} = this.props
		return (
			<div>
				<h1 onMouseOver={incrementCount}> {this.props.name} hovered {count} times </h1>
			</div>
		)
	}
}

// params 1: wrapped component, params 2: incrementNumber
export default UpdatedComponent(HoverCounter, 4)
