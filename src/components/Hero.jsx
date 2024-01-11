import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../styles/Hero.css'; 
import profile from '../assets/images/profile.jpg';
import scroll from '../assets/images/scroll.png';
import ExploreNFTsPage from './Explore';
import jsonData from '../assets/JSON/slide-data.json'; 

const HeroSection = () => {
  const [scrollDirection, setScrollDirection] = useState('down');
  const [lastScrollTop, setLastScrollTop] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const direction = scrollTop > lastScrollTop ? 'down' : 'up';

      setScrollDirection(direction);
      setLastScrollTop(scrollTop);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollTop]);

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    appendDots: (dots) => (
      <div style={{ bottom: '80px', right: '400px' }}>
        <ul className="custom-dots">{dots}</ul>
      </div>
    ),
  };

  return (
    <>
      <div className="hero-section" style={{marginTop: '60px'}}>
        <Slider {...sliderSettings}>
          {jsonData.map((item, index) => (
            <div key={index} className="slide">
              <div className="text-container">
                <h1>
                  {item.notSpan1}<span>{item.span1}</span>{item.notSpan2}<span>{item.span2}</span>{item.notSpan3}<span>{item.span3}</span>
                </h1>
                <p>{item.description}</p>
              </div>
              <div className="image-container">
                <img src={new URL(`../assets/images/${item.image}`, import.meta.url).toString()} alt="Your Alt Text" />
              </div>
            </div>
          ))}
        </Slider>
        <div className="image">
          <img src={profile} alt="" className="profile-img" />
        </div>
        <div>
          <img src={scroll} alt="scroll-down" className="scroll" />
        </div>
      </div>
      <ExploreNFTsPage />
    </>
  );
};

export default HeroSection;
