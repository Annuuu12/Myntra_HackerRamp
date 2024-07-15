import React, { useState } from 'react';
import UserList from './UserList';
import UserProfile from './UserProfile';
import ChatWindow from './ChatWindow';
import SearchFilter from './SearchFilter';
import './Inbox.css';

const users = [
  { id: 1, name: 'Shivam Kumar', profilePhoto: 'https://picsum.photos/200/300', messages: [{ sender: 'me', text: 'Hello John!' }, { sender: 'John', text: 'Hi there!' }] },
  { id: 2, name: 'Anubhav Singhania', profilePhoto: 'https://picsum.photos/200/300', messages: [{ sender: 'me', text: 'Hello Jane!' }, { sender: 'Jane', text: 'Hi!' }] },
  { id: 3, name: 'Virat Kohli', profilePhoto: 'https://picsum.photos/200/300', messages: [{ sender: 'me', text: 'Hello User 3!' }, { sender: 'User 3', text: 'Hi!' }] },
  { id: 4, name: 'SR Tendulkar', profilePhoto: 'https://picsum.photos/200/300', messages: [{ sender: 'me', text: 'Hello User 4!' }, { sender: 'User 4', text: 'Hi!' }] },
  { id: 5, name: 'Robert Downey Jr.', profilePhoto: 'https://picsum.photos/200/300', messages: [{ sender: 'me', text: 'Hello User 5!' }, { sender: 'User 5', text: 'Hi!' }] },
  { id: 6, name: 'Leonardo Dicaprio', profilePhoto: 'https://picsum.photos/200/300', messages: [{ sender: 'me', text: 'Hello User 6!' }, { sender: 'User 6', text: 'Hi!' }] },
  { id: 7, name: 'Hiroshi Nohara', profilePhoto: 'https://picsum.photos/200/300', messages: [{ sender: 'me', text: 'Hello User 7!' }, { sender: 'User 7', text: 'Hi!' }] },
];

const Inbox = () => {
  const [selectedUser, setSelectedUser] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  const handleUserClick = (user) => {
    setSelectedUser(user);
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleBackClick = () => {
    setSelectedUser(null);
  };

  const filteredUsers = users.filter(user => user.name.toLowerCase().includes(searchTerm.toLowerCase()));

  return (
    <div className="inbox">
      {selectedUser ? (
        <div className="chat-section">
          <button className="back-button" onClick={handleBackClick}>Back</button>
          <UserProfile user={selectedUser} />
          {selectedUser.messages && <ChatWindow user={selectedUser} />}
        </div>
      ) : (
        <>
          <SearchFilter searchTerm={searchTerm} onSearchChange={handleSearchChange} />
          <div className="user-list-section">
            <UserList users={filteredUsers} onUserClick={handleUserClick} />
          </div>
        </>
      )}
    </div>
  );
};

export default Inbox;
