import React, { useState } from 'react';
import Input from '../Input/Input';
import QRcode from '../QRcode/QRcode';
import './Hero.css';

const Hero = () => {
  // To handle the user submitted URL and return the QR
  const [url, setUrl] = useState('');
  const [route, setRoute] = useState('');

  return (
    <div className="hero-container">
      <div className="input-container">
        <Input url={url} setUrl={setUrl} route={route} setRoute={setRoute} />
      </div>
      <div className="qr-container">
        <QRcode route={route} />
      </div>
    </div>
  );
};

export default Hero;
