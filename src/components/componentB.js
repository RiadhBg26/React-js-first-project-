import React, { Component } from 'react'
import ComponentC from './componentC'

class ComponentB extends Component {
	render() {
		return (
			<div>
				<ComponentC></ComponentC>
			</div>
		)
	}
}

export default ComponentB
