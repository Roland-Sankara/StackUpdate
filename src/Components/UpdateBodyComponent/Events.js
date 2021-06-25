import React from 'react';
import devNight from './Images/devNight.png';

function Events(){
    return(
        <div className="list-card events-card">
            <h2 className="card-title">UpComing-Events</h2>
            <p>Edu-DevNight</p>
            <img src={devNight} alt="event"/>
        </div>
    )
}

export default Events;