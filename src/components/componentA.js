import React, { Component } from 'react'
import ComponentB from './componentB'

class ComponentA extends Component {
	render() {
		return (
			<div>
				<ComponentB></ComponentB>
			</div>
		)
	}
}

export default ComponentA
