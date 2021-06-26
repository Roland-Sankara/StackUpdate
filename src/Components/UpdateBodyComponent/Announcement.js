import React from 'react';

function Announcement(){
    return(
        <div className="card-body">
            <div className="news-feed">
                <h3 className="news-title">Welcome! We are getting ready for a wonderful class 🚀</h3>
            </div>
            <div className="news-content">
                <p>A very warm welcome to Outbox-Edu. We are gearing up for a fun fullStack course, to help you bootstrap your skills.</p>
                <p>This is your course website! More information will show up here in the next few days. Throughout the course, this website will be your portal to the course resources. For now, here are the things you need to know:</p>
                <p><strong>Start time: </strong>The first day of class is Monday. We are going to be releasing the first set of materials on Monday 10am EAT, right here on this page.</p>
            </div>
        </div>
    )
}

export default Announcement;