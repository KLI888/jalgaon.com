import React, { useState } from 'react'

function CompanyWork() {
    const [rating, setRating] = useState(0)
    const [hover, setHover] = useState(null)
    const [isClicked, setIsClicked] = useState(false);

    const handleMouseEnter = (currentRating) => {
        setHover(currentRating);
        setIsClicked(false);
    };

    const handleMouseLeave = () => {
        if (!isClicked) {
        setHover(null);
        }
    };

    const handleMouseDown = (currentRating) => {
        setRating(currentRating);
        setIsClicked(true);
    };

    return (
        <div className="companyWork">
            <div className="company_brands">
                <h1>Vehicle Brands</h1>
                <div className="brands">
                    <span>Maruti Suzuki</span>
                    <span>Mahindra</span>
                    <span>Tata Motors</span>
                    <span>Ford</span>
                    <span>Volkswagen</span>
                    <span>Hyundai</span>
                    <span>Chevrolet</span>
                    <span>Honda</span>
                    <span>Toyata</span>
                </div>
            </div>
            <div className="company_profile">
                <h1>Company Profile</h1>
                <div className="profile_info">
                    <div className="business_origin">
                        <p>Country of Origin</p>
                        <span>India</span>
                    </div>
                    <div className="vr_line"></div>
                    <div className="business_estab">
                        <p>Year of Establishment</p>
                        <span>2014</span>
                    </div>
                    <div className="vr_line"></div>
                    <div className="business_gst">
                        <p>GST Number</p>
                        <span>27ADZFS9537Q1ZI</span>
                    </div>

                </div>
            </div>
            <div className="company_desc">
                <h1>Description</h1>
                <p>As a locally owned and operated full service AUTOICON shop, we can handle any sized job efficiently and affordably. We are committed to customer satisfaction and strive to be Jalgaon's first resource for automotive repair. In addition to those unexpected repairs we also provide preventative or factory recommended maintenance. We are also happy to arrange a rental car for you with Enterprise Rent-A-Car, should the need arise.</p>
            </div>
            <div className="company_photos">
                <h1>Photos</h1>
                <div className="phtos">
                    <img src="https://s3-alpha-sig.figma.com/img/4edb/71cb/2a99485c33076fb6ba6c538e30066d35?Expires=1722211200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=lqMAJYbdzwQbe2wcPs6ULPyZnvCUzxb6wvkFbDRWmbBltWUGtsNJQCm50h8KVJZi9MtdL0V~hiYB2cf8kmdyfUXsbZbUuPy3sEjvkQLSNrEpOz7pIdvwMYSHPr37KWXC7Q4O-q~c~tdjH41xHODPPx6kOyBhfU8-o8f7-cXHKjst7hs9wQpbAXdOmdmujUHmwnGngzZRvee8c1FKcrms1datfZLYmX1kmlYNxrlAjJ6c39yT8ZaCngRHsNwNQa2x65Z8UO0eRhmhsIPUwO02nlJpBz7RTB6vJwiM1LZHRP-2j4AAV6O0MFWJy3AaOSwko7ogXmx8kiu9VziQoCVyNw__" alt="" />
                    <img src="https://s3-alpha-sig.figma.com/img/4e1a/8c0f/4b1a521f6db90d993340aa58a221ace9?Expires=1722211200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=XSbbjjAeGrA~kYzkviE4X1oQ2JtlFVCA-s5kHghNnNz~VGtBiDKVpl5-oJcNfha71B9sqfAIpwVBE~Eh25AfFIWuVPWUIG0hPAvYsa9C-7GSeSwaffdW40RhU0mNvcHOUTlH3KjygMQm5CkH46EPSqgDoMgpUyemu6PYJykIxNVRXEu1Iv3zo2wl4wK6jMnVdOccZ1-rPVVyouk8EjzoyRQbpuXzvRUPrg8a50FxUPBWeG4i9Jb5kcLG8zsiMJ-d024dF90wZwHTOu2XCBAqfWliGoL5BatDG2JMg2IdjWvisMsPgpuqYKZblL4RlmsYVI9sicIVtbCfeSHBMYBjiQ__" alt="" />
                    <img src="https://s3-alpha-sig.figma.com/img/c2f8/ab34/a4e54c00271d2a37b9b73e64af48e8c0?Expires=1722211200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=IViOt76B5hsl-hPognTcy8ly4WTmQgGC8br6v4HRKr5UFbIyVP1mEm4fr5mMGC~KBg6oB2otZCwp6xBRsPpSk9R080ZOF35YddvAnZHhtUUNNJs7CT0qzlrpHtsXWlzwAxjqV-245Tq0oyXWBIAkhwo8SxjsTl5E8tiklzGlScL5sc5D4mpYxC5yjDdeBnRIBIEJV~T4UGVKxmum7ZPKs9-dMwfex~5gG-ELHIchUsdwDAezqg8rQbCvOV6deGW1p31U82w99cLVMjoSTf304xBcsyyCimkvo-VjdnJ7mN6N7Lc57d1N1Pbala2JDZ1UgJy7caraK7Epo7sto~BGlA__" alt="" />
                </div>
            </div>
            <div className="company_reviw">
                <h1>Add Your Review</h1>
                <div className="rating_star">
                    <span>{rating}</span>
                    {[...Array(5)].map((star, index) => {
                        const currentRating = index + 1
                        return (
                            <label key={index} htmlFor="">
                                <input type="radio" onClick={() => {
                                    setRating(currentRating)
                                }} value={currentRating} name='rating' />
                                <i
                                    
                                    className={`bx bxs-star ${currentRating <= (hover || rating) ? 'star_fill' : ''}`}
                                    onMouseEnter={() => handleMouseEnter(currentRating)}
                                    onMouseDown={() => handleMouseDown(currentRating)}
                                    onMouseLeave={handleMouseLeave}>
                                </i>
                            </label>
                        )
                    })}
                </div>
                <div className="review_form">
                    <form action="">
                        <input type="hidden" value={rating} />
                        <textarea name="" id="" placeholder='Write a review....'></textarea><br />
                        <input className='review_btn' type="submit" value="Add Review" />
                    </form>
                </div>
            </div>
            <div className="review_data">
                <h1>Review (3)</h1>
                <div className="review_rating_star">
                    <span>4</span>
                    <i className='bx bxs-star'></i>
                    <i className='bx bxs-star'></i>
                    <i className='bx bxs-star'></i>
                    <i className='bx bxs-star'></i>
                </div>
                <div className="user_review_card">
                    <div className="review_name">
                        <p>Sanket Satghar</p>
                        <div className="user_review_star">
                            <i className='bx bxs-star'></i>
                            <i className='bx bxs-star'></i>
                            <i className='bx bxs-star'></i>
                            <i className='bx bxs-star'></i>
                        </div>
                    </div>
                    <div className="user_review">
                        <p>S.K. Auto offers excellent service and quality parts. The staff is knowledgeable and friendly, ensuring a smooth and efficient experience. Highly recommend for all your automotive needs!</p>
                    </div>
                    <div className="review_date">
                        <p>-10 July 2024</p>
                    </div>
                </div>
                <div className="user_review_card">
                    <div className="review_name">
                        <p>Pavan Shimpi</p>
                        <div className="user_review_star">
                            <i className='bx bxs-star'></i>
                            <i className='bx bxs-star'></i>
                            <i className='bx bxs-star'></i>
                            <i className='bx bxs-star'></i>
                        </div>
                    </div>
                    <div className="user_review">
                        <p>S.K. Auto offers excellent service and quality parts. The staff is knowledgeable and friendly, ensuring a smooth and efficient experience. Highly recommend for all your automotive needs!</p>
                    </div>
                    <div className="review_date">
                        <p>-10 July 2024</p>
                    </div>
                </div>
                <div className="user_review_card">
                    <div className="review_name">
                        <p>Yash Patil</p>
                        <div className="user_review_star">
                            <i className='bx bxs-star'></i>
                            <i className='bx bxs-star'></i>
                            <i className='bx bxs-star'></i>
                            <i className='bx bxs-star'></i>
                        </div>
                    </div>
                    <div className="user_review">
                        <p>S.K. Auto offers excellent service and quality parts. The staff is knowledgeable and friendly, ensuring a smooth and efficient experience. Highly recommend for all your automotive needs!</p>
                    </div>
                    <div className="review_date">
                        <p>-10 July 2024</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CompanyWork
