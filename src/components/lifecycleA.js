import React, { Component } from 'react'
import LifecycleB from './lifecycleB';

class LifecycleA extends Component {
	constructor(props) {
		super(props)
	
		this.state = {
			 name: 'Riadh'
		}
		console.log('LifecycleA constructor');
	}

	static getDerivedStateFromProps(props, state) {
		console.log('LifecycleA getDerivedStateFromProps');
		return null
	}

	componentDidMount() {
		console.log('LifecycleA componentDidMount');	
	}
	
	shouldComponentUpdate() {
		console.log('LifecycleA shouldComponentUpdate');
		return true	
	}

	getSnapshotBeforeUpdate(prevProps, prevState) {
		console.log('prevProps => ', prevProps);
		console.log('prevState => ', prevState);
		console.log('LifecycleA getSnapshotBeforeUpdate');
		return null
	}
	

	// last cycle hook to get fired (always parent component's method is the last to get fired )
	componentDidUpdate() {
		console.log('LifecycleA componentDidUpdate');
	}
	

	changeState = () => {
		this.setState({
			name: 'Riadh Bougamra'
		})
	}

	render() {
		console.log('LifecycleA render')
		return (
			<div>
				<div>LifeCycleA</div>
				<button onClick = {this.changeState}>Change state</button>
				<LifecycleB></LifecycleB>
			</div>
		)
	}
}

export default LifecycleA
