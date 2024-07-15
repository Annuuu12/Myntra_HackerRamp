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




const Myntra = () => {
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
    <div>
      <div>
    <img class="imghm-1" src="myntrahome.jpg" ></img>
      </div>  
      
       
      <div>
      <div id="carouselExampleIndicators " class="carousel slide pt-4 pb-4" data-ride="carousel">
  <ol class="carousel-indicators">
    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
  </ol>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img class="d-block w-100" src="gifts1.jpg" alt="First slide"></img>
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src="gifts5.jpg" alt="Second slide"></img>
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src="gifts4.webp" alt="Third slide"></img>
    </div>
  </div>
  <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>
      </div>
    </div>
  );
};

export default Myntra;
