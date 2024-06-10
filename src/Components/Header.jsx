import React from 'react'
import { Link, NavLink } from 'react-router-dom'

function Header() {
  return (
    <header>
      <nav>
        <h1>wed<span>Lock</span>.</h1>
        <div className="navRoutes d-flex gap-4">
          <NavLink to='/' activeClassName="active">Home</NavLink>
          <NavLink to='/about' activeClassName="active">About</NavLink>
          <NavLink to='/services' activeClassName="active">Services</NavLink>
          <NavLink to='/contact' activeClassName="active">Contact Us</NavLink>
        </div>
        <div className="navLinks">
          <Link to='/login' className='myBtn tertaryBtn'>Login</Link>
          <Link to='/signup' className='myBtn forthBtn' >SignUp</Link>
        </div>
      </nav>
    </header>
  )
}
export default Header
