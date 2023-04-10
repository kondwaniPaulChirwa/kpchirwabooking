import React from 'react'
import './navbar.css'

export const Navbar = () => {
  return (
    <div className='navBar'>
        <div className='navContainer'>
            <span className='logo'>Kho Booking Clone</span>
            <div className='navItems'>
                <button className='navButton'>Register</button>
                <button className='navButton'>Login</button>
            </div>
        </div>
    </div>
  )
}
