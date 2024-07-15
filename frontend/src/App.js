import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Explore from './components/Explore';
import Inbox from './components/Inbox';
import Trending from './components/Trending';
import Profiles from './components/Profile';
import Myntra from './components/Myntra';
import './App.css';

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
        <Route path="/myntra" element={<Myntra />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/Inbox" element={<Inbox />} />
          <Route path="/trending" element={<Trending />} />
          <Route path="/profiles" element={<Profiles />} />
        </Routes>
        <Footer />
      </div>  
    </Router>
  );
};




export default App;
