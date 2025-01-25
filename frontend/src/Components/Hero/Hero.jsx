import React from 'react';
import './Hero.css';

import hero_img from '../Assets/hero.png';

const Hero = () => {

    return (
        <div className="hero">
            <div className="hero-left">
                <h2>NEW ARRIVALS ONLY</h2>
                <div>
                    <p>New</p>
                    <p>collections</p>
                    <p>for everyone</p>
                </div>
                <div className="hero-latest-button">
                    <div>Latest Collection</div>
                </div>
            </div>
            <div className="hero-right">
                <img src={hero_img} alt="Hero" />
            </div>
        </div>
    );
};

export default Hero;
