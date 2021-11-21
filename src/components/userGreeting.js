import React, { Component } from 'react'

class UserGreeting extends Component {
  constructor(props) {
    super(props)

    this.state = {
      isLoggedIn: false
    }
  }

  render() {
    // let message
    // if (this.state.isLoggedIn) {
    //  message = <div>Welcome Riadh Bg</div>   
    // } else {
    //  message = <div>Welcome guest</div>   
    // }
    // return (
    //   <div>
    //     <div>
    //       {message}
    //     </div>
    //   </div>
    // )


    // return this.state.isLoggedIn ? (
    // <div>Welcome Riadh bg</div> ) : (
    // <div>Welcome Guest</div> )


    return this.state.isLoggedIn && <div>Welcome Riadh bg</div>


  }
}

export default UserGreeting
