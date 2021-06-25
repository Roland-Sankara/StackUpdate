import React from 'react';

function ListCard(){
    return(
        <div className="list-card">
            <h2 className="card-title">Your List</h2>
            <ul>
                <li><i class="far fa-calendar-check"></i> <span>Item-1</span></li>
                <li><i className="fas fa-check"></i> <span>Item-2</span></li>
                <li><i class="far fa-comment-dots"></i> <span>Item-3</span></li>
                <li><i className="fas fa-check"></i> <span>Item-4</span></li>
                <li><i class="fas fa-users"></i> <span>Item-4</span></li>
                <li><i class="fas fa-stopwatch"></i> <span>Item-4</span></li>
            </ul>
        </div>
    )
}

export default ListCard;