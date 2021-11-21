import React, { Component } from 'react'

class ChildComponent extends Component {
    render() {
        return (
            <div>
                {/* getting data from parent component to child component */}
                <button onClick = {this.props.greetHandler}>(greet parent) from parent to child</button>

                {/* passing data from child component to parent component */}
                <button onClick = {() => this.props.greetHandler('child')}>(greet parent) from child to parent</button>
            </div>
        )
    }
}

export default ChildComponent
