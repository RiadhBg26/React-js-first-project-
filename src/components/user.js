import React, { Component } from 'react'

class User extends Component {
	render() {
		return (
			<div>
				{/* when props is a function we add peranthaseases ex: this.props.name()*/}
				{this.props.render(false)}
			</div>
		)
	}
}

export default User
