import React from 'react'
import { Link } from 'react-router-dom'
import './pageUtil.css'
import BusinessDetailsCard from '../components/Businesscompo/BusinessDetailsCard'
import CompanyWork from '../components/Businesscompo/CompanyWork'
import BusinessContact from '../components/Businesscompo/BusinessContact'

function BusinessDetailsPage() {
  return (
    <div className='main_section'>
        <div className="page_location_tow"><Link to='/'>Home</Link> &gt; Search &gt; <Link to='/categories'>Automotive</Link> &gt; <span>S.K Auto</span></div>
        <BusinessDetailsCard/>
        <div className="company_contact_details">
            <CompanyWork />
            <BusinessContact/> 
        </div>
    </div>
  )
}

export default BusinessDetailsPage
