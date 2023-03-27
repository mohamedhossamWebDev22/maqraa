import React from 'react';

import Header from '../components/header';
import Footer from '../components/footer';

import img2 from "../assets/image2.png";
import img from "../assets/image.png";

const Home = () => {
  return (
    <>
      <Header/>

      <div className="main">
        <div className="landing-page">
          <img src={img2} alt="" />
          <div className="txt">
            <h1>جمعية التيسير
            <br/> لتحفيظ القرآن الكريم</h1>
          
            <h3>جمعية لتحفيظ القرآن الكريم بالقراءات العشر للأطفال (للصبيان ، و البنات).</h3>
          </div>
        </div>
        <div className="first">
          <h1>خيرُكُم مَن تعلَّمَ القرآنَ وعلَّمَهُ</h1>
          <img src={img} alt="" />
        </div>
      </div>

      <Footer/>
    </>
  );
}

export default Home;
