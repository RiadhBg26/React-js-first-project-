import React from 'react'


// Higher Order Component takes in parameter the original Component and returns a new updated component
const UpdatedComponent = (OriginalComponent, incrementNumber) => {
	class NewComponent extends React.Component {

		constructor(props) {
			super(props)
		
			this.state = {
				 count: 0
			}
		}
		
	incrementCount = () => {
		this.setState((prevState => {
			// if we want to increment by one
			// return {count: prevState.count + 1}
			// if we want to increment by diffirent numbers
			return {count: prevState.count + incrementNumber}
		}))
	}

		render() {
			// original component is the component passed as a parameter to the Higher Order Component (in this case there are 2 original components: ClickCounter Component & HoverCounter Componeny)
			// incrementCount() method and state are passed as parameters to the original component(s)
			// getting the name props from the App.js
			// option 1
			// return <OriginalComponent name={this.props.name} count={this.state.count} incrementCount={this.incrementCount} ></OriginalComponent>
			// option 2
			return <OriginalComponent {...this.props} count={this.state.count} incrementCount={this.incrementCount} ></OriginalComponent>
		}
	}
	return NewComponent
}

export default UpdatedComponent

