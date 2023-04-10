import { faBed, faCalendar, faCalendarDays, faCar, faHotel, faPerson, faPlane, faTaxi } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import './header.css'
import { DateRange } from 'react-date-range'
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import format from 'date-fns/format'
import { useNavigate } from 'react-router-dom'

export const Header = ({type}) => {
  //to show date
  const [destination, setDestination] = useState("")
  const [openDate, setOpenDate] = useState(false)
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: 'selection'
    }
  ]);
  // date range


  //number of people and adults
  const [openOptions, setOpenOptions] = useState(false);
  const [options, setOptions] = useState({
    adult: 1,
    children: 0,
    room: 1,
  });



  //number of peopleand adults

  //handle increment and decrement on adult, child and room
  const handleOption = (name, operation) => {
    setOptions((prev) => {
      return {
        ...prev,
        [name]: operation === "i" ? options[name] + 1 : options[name] - 1,
      };
    });
  };

//for navigation
const navogate = useNavigate()
  //create handleSearch function
  const handleSearch = ()=> {
    navogate("/hotels", {state: {destination,date,options}})
  }

  return (
    <div className='Header'>
      <div className='headerContainer'>
          <div className='HeaderList'>
            <div className='HeaderListItems active'>
                <FontAwesomeIcon icon={faBed} />
                <span>Stays</span>
            </div>

            <div className='HeaderListItems'>
                <FontAwesomeIcon icon={faPlane} />
                <span>Flight</span>
            </div>

            <div className='HeaderListItems'>
                <FontAwesomeIcon icon={faCar} />
                <span>Car Rentals</span>
            </div>

            <div className='HeaderListItems'>
                <FontAwesomeIcon icon={faBed} />
                <span>Attractions</span>
            </div>

            <div className='HeaderListItems'>
                <FontAwesomeIcon icon={faTaxi} />
                <span>Taxi</span>
            </div>
        </div>

        { type !== "list" && <>
        <h1 className='hotelTitle'>Hotel Booking Web App by Kondwani P. Chirwa. </h1>
        <p className='hotelDesc'>Portifolio projects as a backend and front end web developer in ReactJs, NodeJS & MongoDB</p>
        <div className='HeaderSearch'>
            <div className='HeaderSearchItem'>
               <FontAwesomeIcon icon={faHotel} className ="HeaderIcon"  />
               <input type="text" placeholder='where are you going?' className='HeaderSearchInput'
               onChange={e=>setDestination(e.target.value)}
               />
            </div>
       

       
            <div className='HeaderSearchItem'>
               <FontAwesomeIcon icon={faCalendarDays} className ="HeaderIcon"  />
               <span onClick={()=>{setOpenDate(!openDate)}} className='HeaderSearchText'>{`${format(date[0].startDate, "MMMM dd")} - ${format(date[0].endDate, "MMMM dd")}`}</span>
               {openDate && <DateRange
                    editableDateInputs={true}
                    onChange={item => setDate([item.selection])}
                    moveRangeOnFirstSelection={false}
                    ranges={date}

                    className="date"
              />}
            </div>
       
 
            <div className='HeaderSearchItem'>
               <FontAwesomeIcon icon={faPerson} className ="HeaderIcon" />
               <span onClick={()=>{setOpenOptions(!openOptions)}} className='HeaderSearchText'>{`${options.adult} adult · ${options.children} children · ${options.room} room`}</span>
               { openOptions && <div className='options'>

                    <div className='optionItem'>
                          <span className='optionText'>Adult</span>
                          <div className='optionCounter'>
                              <button disabled={options.adult <= 1} className='optionCounterButton' onClick={()=>handleOption("adult", "d")}>-</button>
                              <span className='optionCounterNumber'>{options.adult}</span>
                              <button className='optionCounterButton' onClick={()=>handleOption("adult", "i")}>+</button>
                          </div>
                    </div>

                    <div className='optionItem'>
                          <span className='optionText'>Childern</span>
                          <div className='optionCounter'>
                              <button disabled={options.children <= 1}  className='optionCounterButton' onClick={()=>handleOption("childern", "d")}>-</button>
                              <span className='optionCounterNumber'>{options.children}</span>
                              <button  className='optionCounterButton' onClick={()=>handleOption("children", "i")}>+</button>
                          </div>
                    </div>

                    <div className='optionItem'>
                          <span className='optionText'>Rooms</span>
                          <div className='optionCounter'>
                              <button disabled={options.room <= 1}
                              className='optionCounterButton' onClick={()=>handleOption("room", "d")}>-</button>
                              <span className='optionCounterNumber'>{options.room}</span>
                              <button  className='optionCounterButton' onClick={()=>handleOption("room", "i")}>+</button>
                          </div>
                    </div>
                </div>
              }             
            </div>

            <div className='HeaderSearchItem'>
              <button className='headerBtn' onClick={handleSearch}>Search</button>
            </div>
       </div> </>}
      </div>
    </div>
  )
}
