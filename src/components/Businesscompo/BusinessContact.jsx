import React, { useState } from 'react'
import './BusinessCompo.css'


function BusinessContact() {
    const [sideActive, setSideActive] = useState(true)
    return (
        <div className={`business_contact_container ${sideActive == true ? "show_contact" : ""}`}>
            <div className="show_btn" onClick={()=> setSideActive(!sideActive)}>
                <i class='bx bxs-right-arrow'></i>
            </div>
            <div className="business_contact_details">
                <ul>
                    <li>Business Details</li>
                    <li><a href=""><i class='bx bx-map'></i> Address</a></li>
                    <li><a href=""><i class='bx bxs-phone'></i> Contact Number</a></li>
                    <li><a href=""><i class='bx bx-envelope'></i> Send Enquiry via Email</a></li>
                    <li><a href=""><i class='bx bx-globe'></i> Website</a></li>
                    <li><a href=""><i class='bx bxl-instagram'></i> Instagram</a></li>
                    <li><a href=""><i class='bx bxl-facebook-circle'></i> Facebook</a></li>
                    <li><a href=""><i className='bx bxs-share bx-flip-horizontal'></i>Share Profile</a></li>
                </ul>
            </div>
        </div>
    )
}

export default BusinessContact