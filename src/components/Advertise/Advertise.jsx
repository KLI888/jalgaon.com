import React, { useState, useEffect  } from 'react';
import './Advertise.css';
// import { Slide } from 'react-slideshow-image';
// import 'react-slideshow-image/dist/styles.css';

const divStyle = {
  // display: 'flex',
  // alignItems: 'center',
  // justifyContent: 'center',
  // backgroundSize: 'cover',
  // width: '100%',
  // height: '320px',
  // position: 'relative' // Add this for positioning dots relative to the image
};

const slideImages = [
  {
    url: 'https://www.jalgaon.com/_next/image?url=https%3A%2F%2Fs3.ap-south-1.amazonaws.com%2Fjalgaon.com%2FFind_investing_confusing_1.webp&w=3840&q=75',
  },
  {
    url: 'https://www.jalgaon.com/_next/image?url=https%3A%2F%2Fs3.ap-south-1.amazonaws.com%2Fjalgaon.com%2FFind_investing_confusing.png&w=3840&q=75',
  },
  {
    url: 'https://www.jalgaon.com/_next/image?url=https%3A%2F%2Fs3.ap-south-1.amazonaws.com%2Fjalgaon.com%2FFind_investing_confusing_1.png&w=3840&q=75',
  },
  {
    url: 'https://www.jalgaon.com/_next/image?url=https%3A%2F%2Fs3.ap-south-1.amazonaws.com%2Fjalgaon.com%2FLetter.png&w=3840&q=75',
  },
];

function Advertise() {

  const [slide, setSlide] = useState(0);
  useEffect(() => {
    const autoSlideInterval = setInterval(() => {
      setSlide((prevSlide) => (prevSlide + 1) % slideImages.length);
    }, 3000); // Change slide every 3 seconds

    return () => {
      clearInterval(autoSlideInterval);
    };
  }, [slideImages.length]);


  return (
    <div className="advertise_container">
      <div className="slide_container">
        {slideImages.map((item, index) => {
          return <img key={index} src={item.url} className={slide === index ? "slider_img_div" : "slider_img_div_hidden"} />;
        })}
        <span className="indicators">
          {slideImages.map((_, index)=> {
            return <button key={index} onClick={()=> setSlide(index)} className={slide === index ? "indicator indicator_active": "indicator"}></button>
          })}
        </span>
      </div>

      <div className="banner_ads">
        <img src="https://www.jalgaon.com/_next/image?url=https%3A%2F%2Fs3.ap-south-1.amazonaws.com%2Fjalgaon.com%2Fexplore_JalGaon.webp&w=1920&q=75" alt="" />

        <img src="https://www.jalgaon.com/_next/image?url=https%3A%2F%2Fs3.ap-south-1.amazonaws.com%2Fjalgaon.com%2Fexplore_JalGaon_1.webp&w=1920&q=75" alt="" />
      </div>
    </div>
  );
}

export default Advertise;
