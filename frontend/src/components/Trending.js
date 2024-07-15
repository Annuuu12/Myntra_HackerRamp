import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Trending = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/trending')
      .then(response => setItems(response.data))
      .catch(error => console.error(error));
  }, []);

  return (

<div>
  
</div>
  );
};

export default Trending;
