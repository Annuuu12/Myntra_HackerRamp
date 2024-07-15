import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    // <div className="footer">
    //   <div className="menu">
    //     <Link to="/home">Home</Link>
    //     <Link to="/new">New</Link>
    //     <Link to="/explore">Explore</Link>
    //     <Link to="/trendnxt">TrendNxt</Link>
    //     <Link to="/bag">Bag</Link>
    //   </div>
    // </div>

    <div className="footer">
    <div className="menu"></div>
        <div class="container">
        <div class="row">
          <div class="col-sm">
            Home
          </div>
          <div class="col-sm">
            New
          </div>
          <div class="col-sm">
            Explore
          </div>
          <div class="col-sm">
              TrendNxt
          </div>
          <div class="col-sm">
            Bag
          </div>
        </div>
      </div>
    </div>

    
  );
};

export default Footer;
