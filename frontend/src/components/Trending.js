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
    <div className="trending-items">
      {items.map(item => (
        <div key={item._id} className="item-card">
          <img src={item.imageUrl} alt={item.name} />
          <h3>{item.name}</h3>
          <p>{item.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Trending;
