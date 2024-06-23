import React, { useEffect } from 'react';
import '../style/Middle.css';
import aboutbanner from '../AboutBanner.308aa283623acb725f01.jpg';

function Middle() {
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.pageYOffset || document.documentElement.scrollTop;
      const imgElement = document.querySelector('.aboutbanner');

      if (imgElement) {
        imgElement.style.width = `${190 - scrollY / 10}%`;
        imgElement.style.height = `${190 - scrollY / 10}%`;
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div>
      <div className="Middle">
        <div className="middle-fist">
          <h1>What is this club about?</h1>
          <p>
            Our club is an initiative aimed at promoting data literacy, fostering
            innovation, and creating a platform for data-driven discussions and
            collaborations. Established in 2020, we are a dynamic community of
            data enthusiasts passionate about exploring the fascinating world of
            data science. Whether you're a data professional or just beginning
            your journey, our club offers a vibrant community and exciting
            opportunities to fuel your passion for data.
          </p>
        </div>
        <div className="middle-last">
          <img className="aboutbanner" src={aboutbanner} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Middle;
