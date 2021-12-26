import React from 'react';

import './Preloader.scss'

const Preloader = () => {
    return (
        <section className="preloader-section">
            <div className="preloader-container">
                <img id="logo" className="animate__animated animate__bounce" src={'/images/logo-name.png'} alt="logo" />
                <h3 style={{textAlign:'center', color: '#414756'}} id="logo-name" className="animate__animated animate__fadeInUp" alt="nombre">
                    Test para Frontend Junior position
                    <span style={{display:'block', fontSize:'1.5rem'}}>Elías Moreno Mata</span>
                </h3>
            </div>
        </section>
    )
}

export default Preloader;