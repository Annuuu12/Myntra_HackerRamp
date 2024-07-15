import React from 'react';

const ChatWindow = ({ user }) => {
  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div className="chat-window">
      <div className="messagess">
        {user.messages.map((message, index) => (
          <div key={index} className={`message ${message.sender === 'me' ? 'sent' : 'received'}`}>
            {message.text}
          </div>
        ))}
      </div>
      <input type="text" placeholder="Type a message..." className="message-input" />
    </div>
  );
};

export default ChatWindow;