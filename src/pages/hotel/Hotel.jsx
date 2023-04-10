import React, { useState } from 'react'
import './hotel.css'
import { Navbar } from '../../componets/Navbar/Navbar'
import { Header } from '../../componets/header/Header'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleArrowLeft, faCircleArrowRight, faCircleXmark, faLocation, faLocationDot } from '@fortawesome/free-solid-svg-icons'
import { MailList } from '../../componets/mailList/MailList'
import { Footer } from '../../componets/footer/Footer'


export const Hotel = () => {

  const [slideNumber, setSlideNumber] = useState(0)
  const [open, setOpen] = useState(false)


  const handleOpen = (i) =>{
    setSlideNumber(i)
    setOpen(true)
  }

  //slider next
  const handleMove = (direction) => {
    let newSlideNumber;

    if (direction === "l") {
      newSlideNumber = slideNumber === 0 ? 5 : slideNumber - 1;
    } else {
      newSlideNumber = slideNumber === 5 ? 0 : slideNumber + 1;
    }

    setSlideNumber(newSlideNumber)
  };

//image array
const photos = [
  {
      src: "https://images.trvl-media.com/lodging/56000000/55560000/55553900/55553829/89d99d93.jpg?impolicy=resizecrop&rw=1200&ra=fit"
  },
  {
    src: "https://images.trvl-media.com/lodging/56000000/55560000/55553900/55553829/84d06e17.jpg?impolicy=resizecrop&rw=1200&ra=fit"
  },
  {
    src : "https://cf.bstatic.com/xdata/images/hotel/max1280x900/351030823.jpg?k=28102e618450d10ff95a579d2a348ef3e129119b547807b64d1dec6299be9559&o=&hp=1"
    },
  {
    src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/107329568.jpg?k=792154631f3636976a2fde602630ac507c67f0509682a89f7f02be27eea930c3&o=&hp=1"
},
{
  src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/332085903.jpg?k=859c507124f9f2a07353d7123c4e802e60ae1fbdd06c0a6c2db1a35cf78fc83f&o=&hp=1"
},
{
  src: "https://images.trvl-media.com/lodging/56000000/55560000/55553900/55553829/297b69e3.jpg?impolicy=resizecrop&rw=1200&ra=fit"
}
]



  return (
    <div>
       { open &&
        <div className='slider'>
            <FontAwesomeIcon onClick={()=>{setOpen(false)}} icon={faCircleXmark} className='close'/>
            <FontAwesomeIcon icon={faCircleArrowLeft} className='arrow' onClick={() => handleMove("l")}/>
            <div className='sliderWrapper'>
              <img className='sliderImg' src={photos[slideNumber].src} alt=''/>
            </div>
            <FontAwesomeIcon icon={faCircleArrowRight} className='arrow' onClick={() => handleMove("r")}/>
        </div>
        }
      <Navbar/>
      <Header type="list"/>

      <div className='hotelContainer'>
       

        <div className='hotelWrapper'>
          <button className='btnReserve'>Book or Reserve Room</button>
          <h1 className='hotelTitle'>Hotel Umodzi</h1>
          <div className='hotelAddress'>
            <FontAwesomeIcon icon={faLocationDot} />
            <span>Lilongwe City Center, 11th avenue</span>
          </div>

          <span className='hotelDistance'>
            400m from the city
          </span>

          <span className='hotelPriceHighlight'>
            rooms ranging from MWK150,000 to MWK200,000
          </span>
          <div className='hotelImages'>
            {
              photos.map((photo,i)=>(
                <div className='hotelImgWrapper'>
                    <img onClick={()=>handleOpen(i)} src={photo.src} alt='hoteo' className='hotelImg'/>
                </div>
              ))
            }
          </div>

          <div className='hotelDetails'>
            <div className='hotelDetailsText'>
              <h1>The best place for lovely privacy</h1>
              <p>
              With pool views, Eden Estates and Lodge is located in Lilongwe and has a restaurant, a shared lounge, bar, garden, year-round outdoor pool and terrace. Both WiFi and private parking are accessible at the apartment free of charge.

              Each unit is fitted with a patio offering garden views, a satellite flat-screen TV, a well-fitted kitchen and a private bathroom with shower, free toiletries and a hairdryer. Some units are air-conditioned and include a seating and/or dining area.

              The daily breakfast offers continental, Full English/Irish or vegetarian options.

              There's a playground and a grill at this property and guests can go fishing nearby.
              </p>

            </div>
            <div className="hotelDetailsPrice">
              <h1>Perfect for a 9-night stay!</h1>
              <span>
                Located in the real heart of Krakow, this property has an
                excellent location score of 9.8!
              </span>
              <h2>
                MWK9045 <span className='nights'>(9 nights)</span>
              </h2>
              <button>Reserve or Book Now!</button>
            </div>
          </div>
        </div>
        <MailList/>
        <Footer/>
      </div>
    </div>
  )
}
