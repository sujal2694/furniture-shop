import React from 'react'
import { assets } from '../../assets/assets'
import './Hero.css'

const Hero = () => {
    return (
        <div className='hero'>
            <div className='img-container'>
                <img src={assets.hero_img} alt="" />
                <div className="text-container">
                    <h1>Modern & Luxurious furniture</h1>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Distinctio, voluptatibus. Eligendi accusantium rem maiores maxime.</p>
                    <button className='hero-btn'>Rent Now</button>
                </div>
            </div>
        </div>
    )
}

export default Hero
