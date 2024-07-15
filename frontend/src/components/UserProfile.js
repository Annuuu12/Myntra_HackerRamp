import React from 'react';

const UserProfile = ({ user }) => {
  return (
    <div className="user-profile">
      <img src={user.profilePhoto} alt={`${user.name}'s profile`} className="profile-photo-large" />
      <h2>{user.name}</h2>
    </div>
  );
};

export default UserProfile;
