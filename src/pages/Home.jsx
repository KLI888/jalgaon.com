import React from 'react'
import Advertise from '../components/Advertise/Advertise'
import Categorytile from '../components/Categorytile/Categorytile'
import Navbar from '../components/Navbar/Navbar'
import Stocktickle from '../components/Stocktickle/Stocktickle'
import Releatedarticles from '../components/Releatedarticles/Releatedarticles'
import Footer from '../components/Footer/Footer'
import Services from '../components/Services/Services'
import Bottomnav from '../components/Bottomnav/Bottomnav'
function Home() {
  return (
    <div className="main_section">
      <Navbar/>
      <Stocktickle />
      <Advertise/>
      <Services />
      <Categorytile/>
      <Releatedarticles />
      <Footer />
      <Bottomnav />
    </div>
  )
}

export default Home
