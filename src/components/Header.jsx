import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faUser, faBars, faAngleDown, faArrowRight, faCircle } from '@fortawesome/free-solid-svg-icons';
import logo from '../assets/images/logo.png';
import "../styles/Header.css";
const Header = () => {
  return (
    <div className="header" style={{ position: 'fixed', top: 0, width: '100%', backgroundColor: '#231937', zIndex: 1000 }}>
      <div className="logo">
        <img src={logo} alt="logo" width="60" height="40"/>
      </div>
      <div className="right-side">
      <div className="search-bar">
      <FontAwesomeIcon icon={faSearch} className="rotated-icon"/>
        <input
          type="text"
          placeholder="Search in Lii"
        />
        <span>All</span>
        <FontAwesomeIcon icon={faAngleDown} id="angle-down"/>
      </div>
      <button className="sign-in">
        <span>Sign in</span> 
        <div className="icon">
        <FontAwesomeIcon icon={faUser} id="user"/>
        <FontAwesomeIcon icon={faCircle} id="circle"/>
        <FontAwesomeIcon icon={faArrowRight} id="arrow"/>
        </div>
      </button>
      <button className="home">
        <span>Home</span> <FontAwesomeIcon icon={faBars} id="bars"/>
      </button>
      <div className="language">
        En | عر
      </div>
      </div>
    </div>
  );
};

export default Header;
