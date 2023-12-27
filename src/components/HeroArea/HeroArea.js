import React from 'react';
import Header from '../Header/Header';
import './HeroArea.css';
const HeroArea = () => {
    return (
        <div className='hero-area'>
            <Header></Header>
            <div className="hero-area-content">
                 <h1 className='heading'>I grow by helping people in need.</h1>
                 <input type="text" className='hero-area-input' placeholder='Search....'/>
                 <button className='search'>Search</button>
            </div>
        </div>
    );
};

export default HeroArea;