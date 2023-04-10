import React from 'react'
import './searchItem.css'
import { useNavigate } from 'react-router-dom'

export const SearchItem = () => {
  const navigate = useNavigate()

  const handleSee=()=>{
    navigate("/hotels/mongo")
  }
  return (
    <div className='searchItem'>
        <div className='searchImg'>
            <img className='siImg' src='https://cf.bstatic.com/xdata/images/hotel/square600/257046523.webp?k=cd25bf6c2fe6b2c5fc7138bc18fbbe3a1d50c32705f31c8b4a2c7cb5e7266f51&o=&s=1' alt=''/>

        </div>

        <div className="siDesc">
        <h1 className="siTitle">Umodzi Hotel</h1>
        <span className="siDistance">500m from centerr</span>
        <span className="siTaxiOp">Free airport taxi</span>
        <span className="siSubtitle">
          Studio Apartment with Air conditioning
        </span>
        <span className="siFeatures">
          Entire studio • 1 bathroom • 21m² 1 full bed
        </span>
        <span className="siCancelOp">Free cancellation </span>
        <span className="siCancelOpSubtitle">
          You can cancel later, so lock in this great price today!
        </span>
      </div>

      <div className="siDetails">
            <div className="siRating">
                <span>Excellent</span>
                <button>8.9</button>
            </div>

            <div className="siDetailTexts">
                <span className="siPrice">MWK 300,000</span>
                <span className="siTaxOp">Includes taxes and fees</span>
                <button onClick={handleSee} className="siCheckButton">See availability</button>
            </div>
      </div>
    </div>
  )
}


