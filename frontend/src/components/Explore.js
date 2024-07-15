import React, { useState, useEffect } from 'react';
import axios from 'axios';


const options = {
  method: 'GET',
  url: 'https://asos10.p.rapidapi.com/api/v1/getProductList',
  params: {
    categoryId: '15935',
    currency: 'USD',
    country: 'US',
    store: 'US',
    languageShort: 'en',
    sizeSchema: 'US',
    limit: '50',
    offset: '0',
    sort: 'recommended'
  },
  headers: {
    'x-rapidapi-key': '0ebd7e68f4msh9573fba9150792cp1b5d3ejsn7dcb888b35b2',
    'x-rapidapi-host': 'asos10.p.rapidapi.com'
  }
};





  const Explore = () => {
    const [clothes, setClothes] = useState([]);
    const [showFooter, setShowFooter] = useState(false); // Add this state variable

  useEffect(() => {
    const fetchClothes = async () => {
      try {
        const response = await axios.request(options);
        console.log(response.data);
        // Assuming response.data.articles contains clothing items
        if (Array.isArray(response.data.brands)) {
          setClothes(response.data.brands);
        } else {
          console.error('Expected array of articles not found in API response');
        }
      } catch (error) {
        console.error('Error fetching clothes:', error);
      }
    };

    
    fetchClothes();
  }, []); // Empty dependency array ensures useEffect runs once

  return (
    <div className="explore">
      <h5>Explore Fashion</h5>
      <div class="instagram-feed-container">
     <div class="instagram-feed-header">
    
    <h2></h2>
  </div>
  <div class="instagram-feed-posts">
  <div class="container">
  <div class="row">
    <div class="col-sm pt-2">
    <div class="instagram-post">
      <img src="WhatsApp Image 2024-07-14 at 8.40.40 PM (1).jpeg" alt="Post 1 Image" />
      <div class="instagram-post-info">
        <p>Post 1 Caption</p>
        <i class="icosn1 fa fa-thumbs-up" ><span class="h6 text-dark">12 likes</span></i>
      </div>
    </div>
    </div>
    <div class="col-sm pt-2">
    <div class="instagram-post">
      <img src="WhatsApp Image 2024-07-14 at 8.40.38 PM.jpeg" alt="Post 1 Image" />
      <div class="instagram-post-info">
        <p>Post 1 Caption</p>
        <i class="icosn1 fa fa-thumbs-up" ><span class="h6 text-dark">12 likes</span></i>
      </div>
    </div>
    </div>
  </div>
</div>
<div class="container">
  <div class="row">
    <div class="col-sm pt-3">
    <div class="instagram-post">
      <img src="WhatsApp Image 2024-07-14 at 8.48.26 PM (1).jpeg" alt="Post 1 Image" />
      <div class="instagram-post-info">
        <p>Post 1 Caption</p>
        <i class="icosn1 fa fa-thumbs-up" ><span class="h6 text-dark">12 likes</span></i>
      </div>
    </div>
    </div>
    <div class="col-sm pt-3">
    <div class="instagram-post">
      <img src="WhatsApp Image 2024-07-14 at 8.40.40 PM.jpeg" alt="Post 1 Image" />
      <div class="instagram-post-info">
        <p>Post 1 Caption</p>
        <i class="icosn1 fa fa-thumbs-up" ><span class="h6 text-dark">12 likes</span></i>
      </div>
    </div>
    </div>
  </div>
</div>
  </div>
</div>
    </div>    
  );
};

export default Explore;
