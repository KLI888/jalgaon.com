import React, { useState, useEffect } from 'react';
import './Releatedarticles.css';
import BlogSlider from './BlogSlider';
import axios from 'axios';

function Articles() {
    const [articleData, setArticleData] = useState([]);

    useEffect(() => {
        const getArticlesData = async () => {
            try {
                const response = await axios.get("http://127.0.0.1:8000/app/articles/");
                setArticleData(response.data);
                console.log(response.data);
                console.log("Data fetched successfully");
            } catch (error) {
                console.error('Error fetching articles:', error);
            }
        };

        getArticlesData();
    }, []);

    return (
        <div className="articles_section">
            <div className="all_articles">
                {articleData.length > 0 ? (
                    articleData.map((article, index) => (
                        <BlogSlider key={index} data={article} is_all={true} />
                    ))
                ) : (
                    <p>No articles available</p>
                )}
            </div>
        </div>
    );
}

export default Articles;
