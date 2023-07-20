import React, { useEffect, useState } from 'react';
import './App.css';
import disk from './assets/disk.png';

const App = () => {
  const [rotationAngle, setRotationAngle] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const maxScroll = (document.documentElement.scrollHeight - window.innerHeight);
      const percentageScroll = (scrollY / maxScroll) * 100;
      const maxRotation = -140; // Maximum rotation angle in degrees
      const angle = (maxRotation * percentageScroll) / 100;
      setRotationAngle(angle);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="block">
      <div className="wrapper">
        <div className="text-main">
          so as not to panic and be prepared in case of a disaster, start preparing now
        </div>
        <div className="section" style={{ transform: `rotate(${rotationAngle}deg)` }}>
          <img src={disk} alt="Disk" />
          <div className="text">
            so as not to panic and be prepared in case of a disaster, start preparing now
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
