import React from 'react';
import Dropdown from './Dropdown';

function Header(){
    return(
        <header class="header-section">
            <nav className="nav-links">
                <div className="brand">Outbox-Edu</div>
                <ul>
                    <li><a href="https://outboxedu.teachable.com/">Teachable</a></li>
                    <li><a href="https://docs.google.com/spreadsheets/d/1WLQahsu1QiOLh_xrBogx5NQXIiCIrJhsc1ATfn56UEs/edit?usp=sharing">Teams</a></li>
                    <li><Dropdown/></li>
                    <li><a href="https://oul-edu-learning.slack.com"><i className="fab fa-slack"></i></a></li>
                </ul>
            </nav>
            <div className="current-user">
                <i className="fas fa-user"></i>
                <p>John Doe</p>
            </div>
        </header>
    )
}

export default Header;