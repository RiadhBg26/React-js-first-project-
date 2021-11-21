import React, { Component } from "react";

class Welcome extends Component {
    render() {
        const { name, job } = this.props
        // const { state1, state2 } = this.state // this is the syntax to destructure state in case it's used
        // return <h1> {this.props.name} is a {this.props.job}  </h1>
        return <h1> {name} is a {job}  </h1>
    }
}

export default Welcome