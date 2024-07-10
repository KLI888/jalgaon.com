import React from 'react'
import './Navbar.css'
import { assets } from '../../assets/assets'
import Search from './Search'
const Navbar = () => {
    return (
        <>
            <div className='header'>
                <div className="navbar">
                    <div className="nav_logo">
                        <img className="icon" src={assets.icon} alt="" />
                        <img className="logo" src={assets.logo} alt="" />
                    </div>
                    <div className="nav_links">
                        <ul className="navbar_menu">
                            <li>Home</li>
                            <li>Add Listing</li>
                            <li>Advertise</li>
                            <li>News</li>
                        </ul>
                        <div className="nav_login">
                            <i class='bx bx-heart'></i>
                            <a href="" className="login_btn">Signup/Login</a>
                            <i class='menu bx bx-menu'></i>
                        </div>
                    </div>
                </div>
                <Search />
            </div>

        </>

    )
}

export default Navbar
