import React, { PureComponent } from 'react'

// pure components only work with based-class components
class PureComp extends PureComponent {
	render() {
		// Unlike Regular component, Pure component implements the shouldComponentUpdate() method with a shallow props and state comparison.
		//  so it renders only if comparison returned true (previousProps !== currentProps & previousState !== currentState) but if comparison retured false (props & states didn't change) it doesn't re-render
		// in this case it will not keep re-rendering the log each 2 seconds (the setInterval instruction from Father component)
		// pure component offer less useless re-rendering which increases the app performance
		console.log(' Pure component render ');
		return (
			<div>
			Pure Component {this.props.name}
			</div>
		)
	}
}

export default PureComp
