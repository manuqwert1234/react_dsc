import React, { useEffect } from 'react';
import '../style/Hero.css';
import herobanner from '../HeroBanner.443a02c8bc0f743fc26d.png';

const Hero = () => {
  
  useEffect(() => {
    const canvas = document.getElementById('Matrix');
    const context = canvas.getContext('2d');
  
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  
    const katakana = 'アァカサタナハマヤャラワガザダバパイィキシチニヒミリヰギジヂビピウゥクスツヌフムユュルグズブヅプエェケセテネヘメレヱゲゼデベペオォコソトノホモヨョロヲゴゾドボポヴッン';
    const latin = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const nums = '0123456789';
  
    const alphabet = katakana + latin + nums;
  
    const fontSize = 16;
    const columns = canvas.width / fontSize;
  
    const rainDrops = [];
  
    for (let x = 0; x < columns; x++) {
      rainDrops[x] = 1;
    }
  
    const draw = () => {
      context.fillStyle = 'rgba(0, 0, 0, 0.1)';
      context.fillRect(0, 0, canvas.width, canvas.height);
      
      context.fillStyle = '#0F0';
      context.font = fontSize + 'px monospace';
  
      for (let i = 0; i < rainDrops.length; i++) {
        const text = alphabet.charAt(Math.floor(Math.random() * alphabet.length));
        context.fillText(text, i * fontSize, rainDrops[i] * fontSize);
        
        if (rainDrops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          rainDrops[i] = 0;
        }
        rainDrops[i]++;
      }
    };
  
    setInterval(draw, 30);

    return () => {
        clearInterval(draw);
    };

  }, []);

  return (
    <div className="hero-container">
      <canvas id="Matrix" className="matrix-canvas"></canvas>
      <img src={herobanner} className="hero-image" alt="Hero Banner" />
    </div>
  );
};

export default Hero;
