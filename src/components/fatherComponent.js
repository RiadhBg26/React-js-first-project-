import React, { Component } from 'react'
import RegularComponent from '../regularComponent';
import MemoComponent from './memoComponent';
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
				{/* for pure component demo */}
				{/* <RegularComponent name = {this.state.name}></RegularComponent>
				<PureComp name = {this.state.name}></PureComp> */}
				{/* _________________ */}

				{/*  */}
				<MemoComponent name = {this.state.name}></MemoComponent>

			</div>
		)
	}
}

export default FatherComponent
