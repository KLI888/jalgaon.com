import React from 'react'
import './BusinessCompo.css'
import { Link } from 'react-router-dom'
function BusinessDetailsCard() {
    return (
        <div className="business_details_card">
            <div className="business_card">
                <div className="business_info">
                    <p className='business_name'>
                        <span>S.K.AUTO</span>
                        <i class='bx bx-heart'></i>
                    </p>
                    <div className="business_rating">
                        <span>5</span>
                        <div className="rating">
                            <i class='bx bxs-star'></i><i class='bx bxs-star'></i><i class='bx bxs-star'></i><i class='bx bxs-star'></i><i class='bx bxs-star'></i>
                        </div>
                    </div>
                    <div className="business_location">
                        <i class='bx bxs-map'></i> <p>Raymond Square, near Sakal Papers, MIDC, Jalgaon</p>
                    </div>
                    <div className="business_keywords">
                        <span>Maruti Suzuki</span>
                        <span>Mahindra</span>
                        <span>Hyundai</span>
                    </div>
                    <div className="business_contact">
                        <a href="tel:8407994909" className='business_call_btn'><i class='bx bxs-phone'></i> Call Us</a>
                        <Link to=''><p><i class='bx bxl-whatsapp'></i> Whatsapp</p></Link>
                        <Link to=''><p><i class='bx bxs-direction-right'></i> Direction</p></Link>
                        <Link to=''><p><i class='bx bx-share-alt'></i> <span>Share</span></p></Link>
                    </div>
                </div>
                <div className="business_img">
                    <img src="https://s3-alpha-sig.figma.com/img/c2f8/ab34/a4e54c00271d2a37b9b73e64af48e8c0?Expires=1721606400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=l-1xWGZ6imoatWmBs~kc2hUYcIEPWP3pfadiSEnHBmOIb6M-DJIr7MtE0ByHY7nnqKBN5CrfVyo6c3NheetbtPmOyTSfnFwyZ77zokjeRTVBwiPx86Tsh4Ye7Ji37rv~EslFblU~YWJoW~DUcGK4qz5HoO56Yxn-ELk-KXPHzxkhkvphkSjZ046bCykWmCNpQdsWscROAefLN4Be~iu1n3jJAXzPr4aPDgtRAjrS085i7iqrxTaSazHfpz7cmpP5UuuwHbC7sHOzEdyuk74F8vixNbT2uh9pADJFlN0lTXs-BOg7BIJ2Ahq8A8EpgaJ37Nxphv3SJyR-PwYpg1C9hA__" alt="" />
                </div>
            </div>
        </div>
    )
}

export default BusinessDetailsCard
