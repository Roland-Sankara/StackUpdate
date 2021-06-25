import React from 'react';
import ListCard from './ListCard';
import Instructors from './Instructors';
import ValuesCard from './ValuesCard';
import Events from './Events';

function UpdateBody(){
    return(
        <div className="updates-container">
            <div className="left-column">
                <ListCard/>
                <ListCard/>
                <Instructors/>
            </div>
            <div className="center-column">
                <div>Hello</div>
            </div>
            <div className="right-column">
                <ListCard/>
                <ValuesCard/>
                <Events/>
            </div>
        </div>
    )
}

export default UpdateBody;