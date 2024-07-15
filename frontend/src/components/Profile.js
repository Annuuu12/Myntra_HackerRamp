import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Profiles = () => {
  const [profiles, setProfiles] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/profiles')
      .then(response => setProfiles(response.data))
      .catch(error => console.error(error));
  }, []);

  return (
  

    <div class="cntner">
      <nav>
        <ul>
       <li><a href="#">Rakhi</a></li>
       <li><a href="#">Birthday</a></li>
       <li><a href="#">Anniversaries</a></li>
       <li><a href="#">Cakes</a></li>
       <li><a href="#">Personalised</a></li>
       </ul>
       </nav>

       <div id="carouselExampleControls" class="carousel slide pt-2 pb-2" data-ride="carousel">
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
  <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>
<h1 class="giftstxt2">Personalized Mug</h1>
<div class="cntr">
  <div class="row">
    <div class="col-sm-4 pt-1">
    <img class="giftimg-1" src="gifts6.webp" alt="Gift 1"></img>
            <h6 class="giftstxt1">Personalized Mug</h6>
    </div>
    <div class="col-sm-4 pt-1">
    <img class="giftimg-1" src="gifts7.webp" alt="Gift 1"></img>
            <h2 class="giftstxt1">Personalized Mug</h2>
    </div>
    <div class="col-sm-4 pt-1">
    <img class="giftimg-1" src="gifts7.webp" alt="Gift 1"></img>
            <h2 class="giftstxt1">Personalized Mug</h2>
    </div>
    <div class="col-sm-4 pt-1">
    <img class="giftimg-1" src="gifts7.webp" alt="Gift 1"></img>
            <h2 class="giftstxt1">Personalized Mug</h2>
    </div>
    <div class="col-sm-4 pt-1">
    <img class="giftimg-1" src="gifts7.webp" alt="Gift 1"></img>
            <h2 class="giftstxt1">Personalized Mug</h2>

    </div>
    <div class="col-sm-4 pt-1 ">
    <img class="giftimg-1" src="gifts7.webp" alt="Gift 1"></img>
            <h2 class="giftstxt1">Personalized Mug</h2>

    </div>
   
  </div>
</div>
</div>
  
  );
};

export default Profiles;
