import React, { Component } from 'react'
import ChildComponent from './childComponent';

class ParentComponent extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             parentName: 'parent'
        }
    }
    
    greetParent = (childName) => {
        console.log('Hello' + this.state.parentName + ' from ' + childName);
    }


    render() {
        return (
            <div>
                <ChildComponent greetHandler = {this.greetParent}></ChildComponent>
            </div>
        )
    }
}

export default ParentComponent
