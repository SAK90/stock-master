import React from "react";
import {BrowserRouter as Router, useNavigate, Link} from 'react-router-dom'

import './style.css';
function NavBar() {
  let navigate = useNavigate();
  return (     
      <div>
        <div className="navbar">
          <div className="heading"><Link to="/" className="heading1">Stock Master</Link></div>
          <div className="topics">
            <div className="about-me"><Link to="/">About us</Link></div>
            <div className="remove-media">|</div>
            <div className="stocks">Stocks</div>
            <div className="remove-media">|</div>
            <div className="crypto"><Link to="/MainPage">Cryptocurrency</Link></div>
            <div className="remove-media">|</div>
            <div className="news"><Link to="/news">News</Link></div>
          </div>
          <div className="contact-me">Contact me</div>
        </div>
      </div>
    
  );
}

export default NavBar;
