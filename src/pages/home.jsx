import React from 'react';

import Header from '../components/header';
import Footer from '../components/footer';

import img from "../assets/image.png";

const Home = () => {
  return (
    <>
      <Header/>

      <img src={img} alt="" />

      <Footer/>
    </>
  );
}

export default Home;
