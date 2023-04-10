import React from 'react'
import './featured.css'

export const Feature = () => {
  return (
    <div className='featured'>

      <div className='featuredItem'>
        <img className='featuredImg' src='https://cf.bstatic.com/xdata/images/hotel/max1280x900/395866943.jpg?k=0ab92541fada23cb9d9d74a00c853674840d5ffae4f9721be95a8f0fb4e91fa1&o=&hp=1' alt='' />
        <div className='featuredTitles'>
            <h1>Hotel Malawi</h1>
            <h2>123 Rooms</h2>
        </div>
      </div>

      <div className='featuredItem'>
        <img className='featuredImg'  src='https://cf.bstatic.com/xdata/images/hotel/max1280x900/395888055.jpg?k=a3c93d98dee47d9a2bdedf2e1a37b2fd24b796e39530757db16fa4f08626568c&o=&hp=1' alt='' />
        <div className='featuredTitles'>
            <h1>Hotel Malawi</h1>
            <h2>123 Rooms</h2>
        </div>
      </div>

      <div className='featuredItem'>
        <img className='featuredImg'  src='https://cf.bstatic.com/xdata/images/hotel/max1280x900/395867058.jpg?k=34eec787a62bb199541e70f5d00fd80f1f47db6a4469408508b718dc5efbf2d0&o=&hp=1' alt='' />
        <div className='featuredTitles'>
            <h1>Hotel Malawi</h1>
            <h2>123 Rooms</h2>
        </div>
      </div>

      
    </div>
  )
}
