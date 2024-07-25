import React, { useEffect, useState, useRef } from 'react';
import Select from 'react-select';
import './AddListingForm.css'
import axios from 'axios';


function AddListingForm() {
    const [mainCategories, setMainCategories] = useState([]);
    const [subCategories, setSubCategories] = useState({});
    const [subCategoriesLast, setSubCategoriesLast] = useState({});
    const [filteredSubCategories, setFilteredSubCategories] = useState([]);
    const [selectedMainCategory, setSelectedMainCategory] = useState(null);

    // map_url
    const [locationUrl, setLocationUrl] = useState('')
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://127.0.0.1:8000/app/categorys/');
                const categories = response.data.categories;
                console.log(response.data)
                const categoryOptions = categories.map(category => ({
                    value: category.main_category.toLowerCase().replace(/\s+/g, '_'), // Format the value
                    label: category.main_category
                }));
                setMainCategories(categoryOptions);

                const sub_response = await axios.get('http://127.0.0.1:8000/app/subCategorys/')
                const sub_categories = sub_response.data.categories
                const subCategoryOptions = sub_categories.map(category => ({
                    value: category.sub_category.toLowerCase().replace(/\s+/g, '_'),
                    label: category.sub_category,
                    main_category: category.main_category
                }));
                setSubCategories(subCategoryOptions)
                console.log(subCategoryOptions);

            } catch (error) {
                console.error('Error fetching data:', error);
                setError(error.message); // Set error message to state
            }
        };

        fetchData();
    }, []);

    const handleMainCategoryChange = (selectedOption) => {
        console.log('Selected Main Category:', selectedOption);
        setSelectedMainCategory(selectedOption);

        // Filter the subCategoryOptions based on the selected main category
        const filteredSubCategories = subCategories.filter(category =>
            category.main_category === selectedOption.label
        );

        console.log('Filtered Sub Categories:', filteredSubCategories);
        setFilteredSubCategories(filteredSubCategories);
    };

    const handleSubChange = (selectedOption) => {
        console.log('Selected Sub Category:', selectedOption);
        // Implement any additional logic for sub-category selection here
    };



    // google map handle
    const getUserLocation = (e)=> {
        e.preventDefault()
        console.log("Get uer location");
        let watchID;
        watchID = navigator.geolocation.watchPosition(function(position){
            const pos = {
                lat: position.coords.latitude,
                lng: position.coords.longitude
            };
            const locationUrlGmap = `https://www.google.com/maps/search/?api=1&query=${pos.lat},${pos.lng}`;
            setLocationUrl(locationUrlGmap)
        })
    }

    return (
        <div className="addListingForm_section">
            <div className="addListingForm_heading">
                <h1>List your bussiness to Jalgaon.Com</h1>
            </div>
            <div className="addListingForm_form">
                <form action="">
                    <hr className="form_hr" />
                    <div className="business_info_div business_details">
                        <h3>Add Business Details</h3>
                        <div className="form_input_fields">
                            <div className="input_data">
                                <label htmlFor="">Business Name</label>
                                <input type="text" name='business_name' placeholder='Business Name' />
                            </div>
                            <div className="input_data">
                                <label htmlFor="">Leagal Bussiness Name</label>
                                <input type="text" name='business_name' placeholder='Leagal Bussiness Name' />
                            </div>
                        </div>
                    </div>
                    <hr className="form_hr" />
                    <div className="business_contactdet">
                        <h3>Add Bussiness Contact Info</h3>
                        <div className="form_input_fields">
                            <div className="input_data">
                                <label htmlFor="">Contact Email</label>
                                <input type="email" name='business_name' placeholder='Business Name' />
                            </div>
                            <div className="input_data">
                                <label htmlFor="">Phone Number</label>
                                <input type="text" name='business_name' placeholder='Leagal Bussiness Name' />
                            </div>
                        </div>
                    </div>
                    <hr className="form_hr" />
                    <div className="business_categories">
                        <h3>Add Bussiness Category</h3>
                        <div className="form_input_fields">
                            <div className="business_mainCategory">
                                <Select
                                    options={mainCategories}
                                    onChange={handleMainCategoryChange}
                                    placeholder='Select a main category...'
                                    isSearchable={true}
                                />
                            </div>
                            <div className="business_subCategory">
                                <Select
                                    options={filteredSubCategories}
                                    onChange={handleSubChange}
                                    placeholder='Select a sub category...'
                                    isSearchable={true}
                                // isDisabled={!filteredSubCategories.length}
                                />
                            </div>
                        </div>
                    </div>
                    <hr className="form_hr" />
                    <div className="business_description">
                        <h3>Add Bussiness Contact Info</h3>
                        <div className="form_input_fields">
                            <div className="input_data">
                                <label htmlFor="">Description</label>
                                <textarea type="text" name='business_description' placeholder='Business Description' />
                            </div>
                        </div>
                    </div>
                    <hr className="form_hr" />
                    <div className="business_subDomains">
                        <h3>Business Sub-Domains</h3>
                        <div className="form_input_fields">
                            <div className="input_data">
                                <label htmlFor="">Description</label>
                                <div className="sub_domain_input">
                                    <input type="text" name='business_subdomain_one' placeholder='Business Sub-domain' />
                                    <input type="text" name='business_subdomain_one' placeholder='Business Sub-domain' />
                                    <input type="text" name='business_subdomain_one' placeholder='Business Sub-domain' />
                                    <input type="text" name='business_subdomain_one' placeholder='Business Sub-domain' />
                                    <input type="text" name='business_subdomain_one' placeholder='Business Sub-domain' />
                                    <input type="text" name='business_subdomain_one' placeholder='Business Sub-domain' />
                                </div>
                            </div>
                        </div>
                    </div>
                    <hr className="form_hr" />
                    <div className="busniess_profile">
                        <h3>Business Profile</h3>
                        <div className="form_input_fields">
                            <div className="input_data">
                                <label htmlFor="">Country of Origin</label>
                                <input type="text" name='business_origin' placeholder='Country of Origin' />
                            </div>

                            <div className="input_data">
                                <label htmlFor="">Year fo Establishment</label>
                                <input type="text" name='business_estab' placeholder='Year fo Establishment' />
                            </div>

                            <div className="input_data">
                                <label htmlFor="">GST Number</label>
                                <input type="text" name='business_gst' placeholder='GST Number' />
                            </div>
                        </div>
                    </div>
                    <hr className="form_hr" />
                    <div className="business_socialLinks">
                        <h3>Social Media</h3>
                        <div className="form_input_fields">
                            <div className="input_data">
                                <label htmlFor="">Instagram</label>
                                <input type="text" name='business_ig' placeholder='Instagram' />
                            </div>

                            <div className="input_data">
                                <label htmlFor="">Facebook</label>
                                <input type="text" name='business_fb' placeholder='Facebook' />
                            </div>

                            <div className="input_data">
                                <label htmlFor="">Website</label>
                                <input type="text" name='business_web' placeholder='Website' />
                            </div>
                        </div>
                    </div>
                    <hr className="form_hr" />
                    <div className="business_imgs">
                        <h3>Business Media</h3>
                        <div className="form_input_fields">
                            <div className="input_data">
                                <label htmlFor="">Business Banner</label>
                                <input type="file" name="business_banner" id="" />
                            </div>
                            <div className="input_data">
                                <label htmlFor="">Business Photos</label>
                                <div className="business_show_img">
                                    <input type="file" name="business_img_one" id="" />
                                    <input type="file" name="business_img_two" id="" />
                                    <input type="file" name="business_img_three" id="" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <hr className="form_hr" />
                    <div className="business_address">
                        <h3>Add Bussiness Address</h3>
                        <div className="form_input_fields">
                            <div className="input_data">
                                <label htmlFor="">Add Busniess Address</label>
                                <div className="get_location">
                                    <div  onClick={getUserLocation}>
                                    <i className='bx bxs-map'></i>
                                    <p>Get Current Location</p>
                                    </div>
                                    <a href={locationUrl} target='_blank' rel="noopener noreferrer">View on Google Maps</a>
                                </div>
                                <input type="hidden" name="business_gmap" id="business_gmap" value={locationUrl} />
                            </div>
                            <div className="input_data">
                                <label htmlFor="">Address</label>
                                <input type="text" name="business_addrss" id="" placeholder='Address' />
                            </div>
                        </div>
                    </div>
                    <div className="submit_form">
                        <input type="submit" value="Submit Form" />
                    </div>
                </form>
            </div>
        </div>
    )
}

export default AddListingForm
