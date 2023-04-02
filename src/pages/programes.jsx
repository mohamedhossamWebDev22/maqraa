import React from 'react';

import { NavLink } from "react-router-dom";


import Header from '../components/header';
import Footer from '../components/footer';

import Card from "../components/card";

import icon from '../assets/icon.png';


const Pro = () => {
  return (
    <>
      <Header/>

      <div style={{background: 'green'}} className="main">
        <div className="cards">
          <Card pic={icon} title="تعليم القرآن"/>
          <Card pic={icon} title="قصص الأنبياء"/>
          <Card pic={icon} title="تعليم التفسير"/>
        </div>
        <div className="cards">
          <Card pic={icon} title="علم الحديث"/>
          <Card pic={icon} title="تعلم العقيدة"/>
          <Card pic={icon} title="تعلم الفقه"/>
        </div>
        <div className="cards">
          <Card pic={icon} title="السيرة النبوية"/>
          
        </div>
      </div>

      <Footer/>
    </>
  );
}

export default Pro;
