import React from 'react';

import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <>
      <div className="navBar">
        <div className="logo">
          <h1>التيسير</h1>
        </div>
        
        <NavLink className='link' to="/">الرئيسية</NavLink>
          
        <NavLink className='link' to="/programmes">خدماتنا</NavLink>

        <NavLink className='link' to="/about">من نحن؟</NavLink>
      </div>
    </>
  );
}

export default Header;
