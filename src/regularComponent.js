import React, { Component } from 'react'

class RegularComponent extends Component {
	
	render() {
		// Unlike Pure component, Regular component doesn't implement the shouldComponentUpdate() method. so it doesn't stop re-rendering coz it always returns true since it doesn't make any comparison between old & new data (props & state).
		// in this case it will keep re-rendering the log each 2 seconds (the setInterval instruction from Father component)
		console.log(' Regular component render ');
		return (
			<div>
				Regular Component {this.props.name}
			</div>
		)
	}
}

export default RegularComponent
