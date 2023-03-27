import React from 'react';
import { Link, animateScroll as scroll } from "react-scroll";
import { NavLink } from "react-router-dom";

import Header from '../components/header';
import Footer from '../components/footer';

import img2 from "../assets/image2.png";
import img from "../assets/image.png";

import icon from '../assets/icon.png';
import icon2 from '../assets/icon2.png';
import icon3 from '../assets/icon3.png';
import icon4 from '../assets/icon4.png';

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

            <button><Link to="first"
                      spy={true}
                      smooth={true}
                      offset={-70}
                      duration={500}>
                        اعرف المزيد
                    </Link>
            </button>
          </div>
        </div>
        <div className="first">
          <h1 id="first">خيرُكُم مَن تعلَّمَ القرآنَ وعلَّمَهُ</h1>
          <img src={img} alt="" />
          
          <br />
          <br />

          <h1>مميزاتنا</h1>

          <div className="services">
            <div className="cards">
              <div className="card">
                <img src={icon}/>

                <p>معلمون مدربون</p>
              </div>
              <div className="card">
                <img src={icon2}/>

                <p>تفسير للكتاب و شرح معانيه</p>
              </div>
              <div className="card">
                <img src={icon3}/>

                <p>تعليم الاطفال و البالغين</p>
              </div>
            </div>
          </div>

          <button>
            <NavLink to='/programmes'>اعرف المزيد</NavLink>
          </button>
        </div>
        <div className="sec">
          <h1>من نحن؟</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere quasi voluptate eligendi esse autem, asperiores neque voluptatem corporis laboriosam, amet veritatis aliquam! Dignissimos incidunt soluta hic reiciendis maxime, in obcaecati?Lorem ipsum dolor sit amet consectetur adipisicing elit. 
          </p>
          <button>
            <NavLink to='/about'>اعرف المزيد</NavLink>
          </button>
        </div>
      </div>

      <Footer/>
    </>
  );
}

export default Home;
