import React from 'react'
import './mailList.css'

export const MailList = () => {
  return (
    <div className='mail'>
        <h1 className='mailTitle'>Save time, Save Money</h1>
        <span>Subscribe to get the best deals</span>
        <div className='mailInputContainer'>
            <input type="text" placeholder='Your Email Address'/>
            <button>Subscribe</button>
        </div>
    </div>
  )
}
