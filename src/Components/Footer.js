import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
  
    <div className='footer'>
        <Link>Conditions of Use & Sale</Link>
        <Link>Privacy Notice </Link>
        <Link>Interest-Based Ads</Link>
        <div>	&#169; Copyright 1999-2025 by Refrsed Data. All Rights Reserved</div>
    </div>
    
  )
}

export default Footer