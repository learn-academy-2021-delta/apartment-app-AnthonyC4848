import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

class Header extends Component {
    render() {
        const {
            logged_in,
            current_user,
            new_user_route,
            sign_in_route,
            sign_out_route
          } = this.props
      return (
        <>
          <div className="page-head">
            <h3>Apartments!</h3>
          </div>
          <div className='nav-link'>
            <ul>
            <NavLink to="/users/sign_in">Sign In</NavLink>
            </ul>
            <ul>
            <NavLink to='/'>Take me Home!</NavLink>
            </ul>
            <ul>
            <NavLink to='users/sign_up'>Sign Up</NavLink>
            </ul>
          </div>
          </>
      )
    }
  }
  export default Header
  