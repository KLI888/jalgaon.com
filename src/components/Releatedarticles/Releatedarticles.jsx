import React from 'react';
import './Releatedarticles.css';
import BlogSlider from './BlogSlider';

const slideImages = [
  {
    url: 'https://s3-alpha-sig.figma.com/img/4b30/59ae/fd28a9ca20002d1aef17df2b4478f809?Expires=1721001600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=JZKxd3iDBeYw4wsQi0gv2k81Tj6TcBdK67cTgncd-OGRrP5keTy0PSM5WOHSxkZmGma5D-agtteuOuWyTxQKYwGHNvdZhhrujS7Qsz7XBnBe2hO5dLxrS6DqzjLVQiPPLsT4I-kEvKZUrTDQCssmnUAOp2uktwyCnEPgXykfTy4JB-ZjJoCxkxNxpTdrRIY0BUT9Sb51ojYcEP9YnlVZZCf69TIdovI2Uy-o2333UuOxMtD4ZRYoXj5bzjJb~X9614gdc6OFt~djXA7pp9F0mqz1dzJAx-feB-AoS~Q4u~K14tVlrQjlBhOTAux4IoRtBTEr13r-xzQYT6hkxA3E2g__',
  },
  {
    url: 'https://s3-alpha-sig.figma.com/img/a9f6/2961/83cb3062054233a83061bc01e3f3530f?Expires=1721001600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=HRb-7veT-UewCWdJQaWXkeg7oxXD~tLGe-z3l6n-UTpg4x-MEkJYwXenXg7h806vnDXRlWgCoz-P5ZxZgp5MsDALs5mGz9lHyCRViidFdwTyQh8xkDXwd-zqwkHBw70MwM0YhH2dILENapClem9Jb4Ei7qgbD7IxLweIlm6abNP~nLmqgh~vo5x0IG0iWkMUXRppbBEAA7mYrNLtTlHiIchZ3KTuLBykZrLwOwTuSsxFpjo7xxLdK5RC79sFQrrVv-ipIPQOoFLcSjpy0HqGeR7sCjvq0rU0LnE4xYDLBs8MZ5~R7O7Sm2-wef2-hFZO4gOTthaaB8HxnPSw4L5oWg__',
  },
  {
    url: 'https://s3-alpha-sig.figma.com/img/b8c9/11a8/41454a92eae4a0a44f0ec3e93f71a35e?Expires=1721001600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=SmyUn31RWwf1B7c1MhOvlMuJR8NZQ5U9VrHwf1j4oglkjHpsZI2GcHlM1Ltna7k2ieztlLutektvdcNd91gEsWpT5fMVeronfP7GkKlNj18HRPqtD7XPf14eoER1iuFQXmpVzFMDUA5miOQEiMURvluquJF9NRfLKR4CZHF4cm0rAZ96S5NBaD6SbSz5uiQjpsSVloNjr5H4pQ9HX3VwW5Yafv~8gSsvpx6IhSVVtG~GJCkDR9PF4smnfMW4JRnKoZhTZpGAqoqDJD81GoMvAFNgDQvzbGle74-nEKs3zji5fx7uZE~4T6twLgLiqbeBhufMDt62oNU6V0N3sjyMZg__',
  },
  {
    url: 'https://s3-alpha-sig.figma.com/img/8713/39aa/f0f256004c84b86725d243e8884cffda?Expires=1721001600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=U-I15hOI2hixmLowFd3Z~sv5AhkURyR0I8vXooDswqzqmYKpK-Jn4pmOLzPXVTrPyb0HWadBHaHBmIZiKqI-HUxGIlIpwjX12kFYyNCXQf9Hby9x0SGFowJlcsqcxv8qy-vEFXd27pOdgUqtE-loxwi57jzCoDthDj5A3YshdBLoLr7IrYe4DNy9np6~iv2jsdG6OQh3WUyCOWecY2gAZztBiO~eHt6TnhJcwpwxF0yvmddGTmmE1qLcMcucRzigsjWOQlnTsGy9Dr2HKP9h06gHpwmqvdW-JADzPycwCBg4dEl3gh9tfdjQ13-ypgXelvO2bHqqRrCsNV8WCcacvg__',
  },
  {
    url: 'https://s3-alpha-sig.figma.com/img/86ac/08d3/16b5b5451bdbaa1e8a262c52ae95fd13?Expires=1721001600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=BrMcpJ7L1-0fzfMSmx4bOR0BoEYI6wcPmEd5QH3Hs9PYPgnZKLQVdOqgBEt~xmMdhmvP3JhOegWUWxDdlKD8QQp1akMrU7qA2XIFLg0ZXfzN3Ptrzzbbl6O9emhNitjE4S82HGZQ2bBNgOki-2xe2MPU46CidjVNVV2jtyNJfbPjj3HNLA5oyLKG7xZJBRb6M4-NyneihSBRneL1ztW5ax2njqasOXhZWOBaWleUUlrc~4vNfkak1qCZpEl2y3pHCwBdMzOfiQz1ll9COv71bNY8slYdKhWNaQfFQiPOuGtaqL3itc8ukm87O7LQXlZDrJKCOGkeER7Kd-WLjrBeYA__',
  },
];

export default function RelatedArticles() {
  const prevSlide = () => {
    let box = document.querySelector('.articles_cards');
    let width = box.clientWidth;
    box.scrollLeft = box.scrollLeft - width;
  };

  const nextSlide = () => {
    let box = document.querySelector('.articles_cards');
    let width = box.clientWidth;
    box.scrollLeft = box.scrollLeft + width;
  };

  return (
    <div className="related_articles">
      <div className="articles_header">
        <h1 className="header_text">Related Articles</h1>
        <a href='' className="see_more">Explore More <i className='bx bx-right-arrow-circle'></i></a>
      </div>
      <div className="articles_slider">
        <div className="slider_button">
          <button onClick={prevSlide}><i className='bx bxs-chevron-left'></i></button>
          <button onClick={nextSlide}><i className='bx bxs-chevron-right'></i></button>
        </div>
        <div className="articles_cards">
          {slideImages.map((item, index) => (
            <BlogSlider key={index} image={item} />
          ))}
        </div>
      </div>
    </div>
  );
}
