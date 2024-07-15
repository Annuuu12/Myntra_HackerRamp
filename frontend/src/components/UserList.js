import React from 'react';

const UserList = ({ users, onUserClick }) => {
  return (
    <div className="user-list">
      {users.map(user => (
        <div key={user.id} className="user" onClick={() => onUserClick(user)}>
          <img src={user.profilePhoto} alt={`${user.name}'s profile`} className="profile-photo" />
          <span className="user-name">{user.name}</span>
        </div>
      ))}
    </div>
  );
};

export default UserList;
