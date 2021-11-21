import React, { Component } from 'react'

class counter extends Component {
    constructor(props) {
        super(props)

        this.state = {
            count: 0
        }
    }

    // incrementCounter() {
    //     this.state.count = this.state.count + 1; // this doesn't change data in the dom although the value is changing in the console
    //     console.log(this.state.count);
    //     this.setState({ // this is the right way to change data in the dom
    //         count: this.state.count + 1
    //     }, () =>  {
    //         // console.log(this.state.count)
    //     })

    //     // console.log(this.state.count); // resut is 0 even if it's 1 in the UI because the call to 'setState()' is Asynchronus so console.log() is 
    //     //actually called before the setState has finished rendering UNLESS a callback funtion is called
    // }

    incrementCounter() {
        this.setState((previousState, props) => ({
            count: previousState.count + 1 + parseInt(props.addValue)
        }))
    }

    incrementFive() {
        this.incrementCounter()
        this.incrementCounter()
        this.incrementCounter()
        this.incrementCounter()
        this.incrementCounter()
    }

    render() {
        return (
            <div>

                <div>
                    count - {this.state.count}
                </div>
                <button onClick={() => this.incrementCounter()}>Increment One</button>
                <button onClick={() => this.incrementFive()}>Increment Five</button>
            </div>
        )
    }
}

export default counter
