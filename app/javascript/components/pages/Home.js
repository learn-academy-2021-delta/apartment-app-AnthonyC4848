import React, { Component } from 'react'
import apartments from '../assets/apartments.png'

class Home extends Component {
  render() {
    return (
      <>
      <div className="page-body">
        <h1>Welcome to the Home Page!</h1>
        <img src={apartments} alt="Apartments" className="Apart" width="410px" height="410px"/>
        </div>
      </>
    )
  }
}
export default Home