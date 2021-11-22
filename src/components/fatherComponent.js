import React, { Component } from 'react'
import RegularComponent from '../regularComponent';
import PureComp from './pureComponent';

class FatherComponent extends Component {
	constructor(props) {
		super(props)
	
		this.state = {
			 name: 'Riadh Bg'
		}
	}

	componentDidMount() {
		setInterval(() => {
			this.setState({
				name: 'Riadh Bg'
			})
		}, 2000);
	}
	
	render() {
		console.log('***** parent component render *****');
		return (
			<div>
				Father Component
				<RegularComponent name = {this.state.name}></RegularComponent>
				<PureComp name = {this.state.name}></PureComp>
			</div>
		)
	}
}

export default FatherComponent
