import React from 'react' 
import './Offers.css'
import hero_img from '../Assets/hero.jpg'
const Offers = () => {
    return (
        <div className='offers'>
            <div className='offers-left'>
                <h1>Exclusive</h1>
                <h1>Offers For You</h1>
                <p>ONLY ON STYLENOOK</p>
                <button>Check now</button>
            </div>
            <div className='offers-right'>
                <img src={hero-img} alt=""/>

            </div>
        </div>
    )
}

export default Offers
