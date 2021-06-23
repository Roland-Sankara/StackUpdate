import React from 'react';
import logo from './Images/outbox-edu-logo.png';

function Banner(){
    return(
        <div class="banner-container">
            <div className="logo-container">
                <img src={logo} alt="outbox-edu-logo"/>
            </div>
            <div className="banner-text">
                <div className="banner-title">
                    <h1>OutboxEdu: John Doe</h1>
                </div>
                <div className="program-timeline">
                    <p>2021: March 23rd to July 31st</p>
                </div>
            </div>
        </div>
    )
}

export default Banner;