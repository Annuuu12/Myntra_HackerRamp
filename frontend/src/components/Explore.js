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
      <h2>Explore Fashion</h2>
      <div className="clothes-grid">
        {clothes.map(cloth => (
          <div key={cloth.id} className="cloth-card">
            {/* Adjust image URL and other data properties based on API response */}
            <img src={cloth.media.images[0].smallUrl} alt={cloth.name} />
            <div className="cloth-details">
              <h3>{cloth.name}</h3>
              <p>Price: {cloth.price.formatted}</p>
              <p>Brand: {cloth.brand.name}</p>
              {/* Adjust sizeInfo handling based on API response structure */}
              <p>Available sizes: {cloth.sizeInfo.filter(size => size.available).map(size => size.name).join(', ')}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Explore;
