import React from 'react'
import Advertise from '../components/Advertise/Advertise'
import Categorytile from '../components/Categorytile/Categorytile'
import Navbar from '../components/Navbar/Navbar'
import Stocktickle from '../components/Stocktickle/Stocktickle'
import Releatedarticles from '../components/Releatedarticles/Releatedarticles'
import Footer from '../components/Footer/Footer'
import Services from '../components/Services/Services'
import Bottomnav from '../components/Bottomnav/Bottomnav'
import LoginSignup from '../components/LoginSignup/LoginSignup'
function Home() {
  return (
    <div className="main_section">
      <Stocktickle />
      <Advertise/>
      <Services />
      <Categorytile/>
      <Releatedarticles />
      <LoginSignup />
    </div>
  )
}

export default Home
