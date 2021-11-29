import React, { Component } from 'react'

class CounterRenderer extends Component {
	constructor(props) {
		super(props)
	
		this.state = {
			 count: 0
		}
	}

	incrementCount = () => {
		this.setState(prevState => {
			return {count: prevState.count + 1}
		})
	}
	render() {
		return (
			<div>
				{/* for the first way of using renderer */}
				{/* {this.props.render(this.state.count, this.incrementCount)} */}

				{/* for the second way of using renderer */}
				{this.props.children(this.state.count, this.incrementCount)}
			</div>
		)
	}
}

export default CounterRenderer
