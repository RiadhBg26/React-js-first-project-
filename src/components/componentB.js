import React, { Component } from 'react'
import ComponentC from './componentC'
import UserContext from './userContext'

class ComponentB extends Component {
	// either this method
	static contextType = UserContext
	render() {
		return (
			<div>
				Component B context {this.context}
				<ComponentC></ComponentC>
			</div>
		)
	}
}

// or this method
// for the second way to use context
// ComponentB.contextType = UserContext
export default ComponentB
