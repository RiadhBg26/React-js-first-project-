import React, { Component } from 'react'

class Form extends Component {
	constructor(props) {
		super(props)
	
		this.state = {
			 username: '',
			 comments: '',
			 topic: 'React'
		}
	}
	
	usernameHandler = (event) => {
			this.setState({
				username: event.target.value
			})
			console.log(this.state.username);
		}

	commentsHandler = (event) => {
			this.setState({
				comments: event.target.value
			})
			console.log(this.state.comments);
		}

	topicHandler = (event) => {
			this.setState({
				topic: event.target.value
			})
			console.log(this.state.topic);
		}


		handleSubmit = (event) => {
			alert(this.state.username + this.state. comments + this.state.topic)
			// prevent the default behaviour of the submit button wich is refreshing page after submission
			event.preventDefault()
		}


	render() {
		return (
			<form onSubmit={this.handleSubmit}>
				<div>
					<label htmlFor="username">Username</label>
					<input type="text" value={this.state.username} onChange={this.usernameHandler} />
				</div>
				<div>
					<label htmlFor="comments">Comments</label>
					<textarea name="" id="" cols="30" rows="10" value = {this.state.comments} onChange={this.commentsHandler} ></textarea>
				</div>
				<div>
					<label htmlFor="topic">Topic</label>
					<select name="" id="" value = {this.state.topic} onChange={this.topicHandler}>
						<option value="react">React</option>
						<option value="angular">Angular</option>
						<option value="vue">Vue</option>
					</select>
				</div>

				<button type="submit">Submit</button>
			</form>
		)
	}
}

export default Form
