import React, { Component } from 'react'

class ErrorBoundary extends Component {
	
	constructor(props) {
		super(props)
	
		this.state = {
			 hasError: false
		}
	}

	// error boundary are react components that catch errors in their child components tree and display a full back UI of that error	 
	// errors shold not be handled inside EventHandlers
	static getDerivedStateFromError(error) {
		return {
			hasError: true
		}
	}

	// 
	componentDidCatch(error, info) {
		console.log(error);
		console.log(info);
	}

	render() {
		// the UI with the error to be displayed in case of error
		if (this.state.hasError) {
			return <h1> Something went wrong </h1>
		}
		// "this.props.children" reference to the components being rendered 
		return this.props.children
	}
}

export default ErrorBoundary
