import React from 'react';
import ListCard from './ListCard';
import Instructors from './Instructors';
import ValuesCard from './ValuesCard';
import Events from './Events';
import Subheading from './Subheading';
import Announcement from './Announcement';

function UpdateBody(){
    let dummyData = {
        "Todo":[
            "To do List",
            [
                {
                    icon:"fas fa-check",
                    content: "Access teachable"
                },
                {
                    icon:"fas fa-check",
                    content: "Attend onboarding session"
                },
                {
                    icon:"fas fa-check",
                    content: "Participate in Slack Channel"
                }
            ]
        ],
        "Team":[
            "Your Team",
            [
                {
                    icon:"far fa-calendar-check",
                    content: "You have a meeting with your team members"
                },
                {
                    icon:"far fa-comment-dots",
                    content: "Team Slack Channel"
                },
                {
                    icon:"fas fa-users",
                    content: "Zoom Session Link"
                }
            ]
        ],
        "Resources":[
            "Resources",
            [
                {
                    icon:"fab fa-slack",
                    content: "Resources Channel"
                },
                {
                    icon:"fas fa-chalkboard-teacher",
                    content: "Teachable LMS"
                },
                {
                    icon:"fas fa-book",
                    content: "Edu-PlayBook"
                }
            ]
        ]

    }

    return(
        <div className="updates-container">
            <div className="left-column">
                <ListCard list={dummyData["Todo"]}/>
                <ListCard list={dummyData["Team"]}/>
                <Instructors/>
            </div>
            <div className="center-column">
                <Subheading/>
                <Announcement/>
                <Announcement/>
                <Subheading/>
                <Announcement/>  
            </div>
            <div className="right-column">
                <ListCard list={dummyData["Resources"]}/>
                <ValuesCard/>
                <Events/>
            </div>
        </div>
    )
}

export default UpdateBody;