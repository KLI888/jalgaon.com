import React from 'react';
import './Releatedarticles.css';

function BlogSlider({ image }) {
  return (
    <div className="article_card">
      <div className="article_img">
        <img src={image.url} alt="" />
      </div>
      <p className="article_title">Cultural Events and Festivals in Jalgaon You Can’t Miss This Year</p>
      <p className="article_explore">Explore</p>
    </div>
  );
}

export default BlogSlider;
