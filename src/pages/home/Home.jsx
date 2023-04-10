import React, { useState } from 'react'
import { Feature } from '../../componets/featured/Feature'
import { FeaturedProperties } from '../../componets/featuredProperties/FeaturedProperties'
import { Footer } from '../../componets/footer/Footer'
import { Header } from '../../componets/header/Header'
import { MailList } from '../../componets/mailList/MailList'
import { Navbar } from '../../componets/Navbar/Navbar'
import { PropertyList } from '../../componets/propertyList/PropertyList'
import './home.css'

export const Home = () => {

  const [drag, setDrag] = useState(true)
  return (
    <>
      <Navbar/>
      <Header/>

      
      <div className='homeContainer'>
        { drag &&
        <>
          <Feature/>
          <h1 className='homeTitle'>Browse by Property</h1>
          <PropertyList/>
          <h1 className='homeTitle'>Homes that Guests love</h1>
          <FeaturedProperties/>
       
       </> }
          <MailList/>
          <Footer/>
         
      </div>
    </>
  )
}
