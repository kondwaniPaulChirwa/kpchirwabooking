import React, { useState } from 'react'
import './list.css'
import { DateRange } from 'react-date-range'
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import format from 'date-fns/format'
import { Header } from '../../componets/header/Header'
import { Navbar } from '../../componets/Navbar/Navbar'
import { useLocation } from 'react-router-dom'
import { SearchItem } from '../../componets/searchItem/SearchItem';
import { MailList } from '../../componets/mailList/MailList';
import { Footer } from '../../componets/footer/Footer';

export const List = () => {

  const location = useLocation();
 

  //giving default values from home page
  const [destination, setDestination] = useState(location.state.destination)
  const [date, setDate] = useState(location.state.date)
  const [options, setOptions] = useState(location.state.options)
  const [openDate, setOpenDate] = useState(false)
  const [openOptions, setOpenOptions] = useState(false);


  //handle increment and decrement on adult, child and room
  const handleOption = (name, operation) => {
    setOptions((prev) => {
      return {
        ...prev,
        [name]: operation === "i" ? options[name] + 1 : options[name] - 1,
      };
    });
  };


  return (
    <div>
      <Navbar/>
      <Header type="list"/>
     

      <div className='listContainer'>
        <div className='listWrapper'>
          <div className='listSearch'>
            <h1 className='listSearchTitle'>Search</h1>
              <div className='lsItem'>
                <label>Destination</label>
                <input type="" placeholder={destination}/>
              </div>

              <div className='lsItem'>
                <label>Check in Date</label>
                <span onClick={()=>{setOpenDate(!openDate)}} >{`${format(date[0].startDate, "MMMM dd")} - ${format(date[0].endDate, "MMMM dd")}`}</span>
                  {openDate && <DateRange
                        editableDateInputs={true}
                        onChange={item => setDate([item.selection])}
                        moveRangeOnFirstSelection={false}
                        ranges={date}

                        className="date"
                  /> }
            </div>

            <div className='lsItem'>
                <label>Guests</label>
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
          <button className='lBtn'>Search</button>
          </div>
          <div className='listResult'>
            <SearchItem/>
            <SearchItem/>
            <SearchItem/>
            <SearchItem/>
            <SearchItem/>
            <SearchItem/>
            <SearchItem/>
            <SearchItem/>
            <SearchItem/>
            <SearchItem/>
            
          </div>
        </div>
      </div>
    <div className='list'>
      <MailList/>
      <Footer/>
      </div>
    </div>
  )
}
