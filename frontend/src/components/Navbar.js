import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="menu">
      <div class="Hell1 w-10">
      <Link to="/myntra"><img src="myntra-logo.png" class="MyntraLogo" ></img></Link>
      </div>
    
        {/* <Link to="/explore">Explore</Link>
        <Link to="/inbox">Inbox</Link>
        <Link to="/trending">#Trending</Link>
        <Link to="/profiles">Profiles</Link> */}
         <div class="container pt-1">
         <div class="row">
          <div class="col-sm nbtns1">
           <span><Link to="/explore" class="nbtxt1">Explore</Link></span>
          </div>
          <div class="col-sm nbtns2">
          <span><Link to="/inbox" class="nbtxt1">Inbox</Link></span>
          </div>
          <div class="col-sm nbtns2">
          <span><Link to="/trending" class="nbtxt1">#Trending</Link></span>
          </div>
          <div class="col-sm nbtns3">
          <span><Link to="/profiles" class="nbtxt1">Profiles</Link></span>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Navbar;
