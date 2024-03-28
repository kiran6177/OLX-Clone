import React from 'react'
import Header from '../Components/Header/Header'
import Navbar from '../Components/Navbar/Navbar'
import Banner from '../Components/Banner/Banner'
import QuickmenuTab from '../Components/Quickmenu/QuickmenuTab'
import Footer from '../Components/Footer/Footer'

function Home() {
  return (
    <div>
        <Header/>
        <Navbar/>
        <Banner/>
        <QuickmenuTab/>
        <Footer/>
    </div>
  )
}

export default Home
