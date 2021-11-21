import React, { Component } from 'react'

class EventBind extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             message: 'Hello'
        }

        // this.changeMessage = this.changeMessage.bind(this)
    }
    
    // changeMessage() {
    //     this.setState({
    //         message: 'Good Bye'
    //     }, () => {
    //         console.log(this.state);
    //     });

    //     console.log(this);
    // }


    // made it an arrow funtion (recommanded)
    changeMessage = () => {
        this.setState({
            message: 'Good Bye'
        })
    }
    render() {
        return (
            <div>
                <h2>  {this.state.message} </h2>
                {/* first approach to call changeMessage() is to bind 'setState' (not recommended due to performance issues) */}
                {/* <button onClick = {this.changeMessage.bind(this)}>Click</button>   */}
                
                {/* second approach to call changeMessage() is to use arrow function and add Prentesees to the called funtion */}
                {/* <button onClick = {() => this.changeMessage()}>Click</button>   */}

                {/* third approach to call changeMessage() is to use bind(this) in the class constructor (highly recommanded)*/}
                {/* <button onClick = {this.changeMessage}>Click</button>   */}

                {/* fourth approach to call changeMessage() is to make it an arrow funtion (recommanded)*/}
                <button onClick = {this.changeMessage}>Click</button>  
            </div>
        )
    }
}

export default EventBind
