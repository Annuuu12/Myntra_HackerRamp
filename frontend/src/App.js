import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Explore from './components/Explore';
import Trending from './components/Trending';
import Profiles from './components/Profile';
import Chat from './components/Chat';
import './App.css';

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/explore" element={<Explore />} />
          <Route path="/inbox" element={<Inbox />} />
          <Route path="/trending" element={<Trending />} />
          <Route path="/profiles" element={<Profiles />} />
        </Routes>
        <Chat />
      </div>
    </Router>
  );
};

export default App;
