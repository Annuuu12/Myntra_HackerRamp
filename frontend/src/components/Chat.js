import React, { useState } from 'react';

const Chat = () => {
  const [open, setOpen] = useState(false);

  const toggleChat = () => {
    setOpen(!open);
  };

  return (
    <>
      <button onClick={toggleChat}>+</button>
      <div className={`chat-window ${open ? 'open' : ''}`}>
        <h3>Chat with Seller</h3>
        {/* Implement chat functionality here */}
      </div>
    </>
  );
};

export default Chat;
