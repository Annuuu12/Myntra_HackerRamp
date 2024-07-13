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
    <div className="profiles">
      {profiles.map(profile => (
        <div key={profile.id} className="profile-card">
          <img src={profile.imageUrl} alt={profile.name} />
          <h3>{profile.name}</h3>
          <p>{profile.bio}</p>
        </div>
      ))}
    </div>
  );
};

export default Profiles;
