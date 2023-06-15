import React from 'react'
import { Link } from 'react-router-dom'
import "../App.css";
import logo from "../images/l3.jpg"

const Nav = (props) => {
  const len=props.data.length
  return (
    <div className='nav'>
        <div className='Nav-cont'>
            <div className='logo'><img src={logo} alt="logo"/></div>
            <div className='NavLinks'>
            <Link to="/">Home</Link>
            <Link to="/cart">Cart  <sub className='cartLen'>{len}</sub></Link>
            </div>
            
            

        </div>
    </div>
  )
}

export default Nav