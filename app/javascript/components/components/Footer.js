import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

class Footer extends Component{
  render(){
    return(
      <>
      <h3>Footer</h3>
      <NavLink to='/'>@copy; 2021</NavLink>
      </>
    )
  }
}
export default Footer