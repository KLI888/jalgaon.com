import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import Bottomnav from './components/Bottomnav/Bottomnav'
function Layout() {
    return (
        <div className='main_section'>
            <Navbar />
            <Outlet />
            <Footer />
            <Bottomnav />
        </div>
    )
}

export default Layout
