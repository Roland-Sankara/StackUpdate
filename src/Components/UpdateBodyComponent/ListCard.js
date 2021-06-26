import React from 'react';

function ListCard({list}){
    return(
        <div className="list-card">
            <h2 className="card-title">{list[0]}</h2>
            <ul>
                {list[1].map((item,index)=><li key={`${item.icon}-${index}`} className="list-item"><i class={item.icon}></i> <span>{item.content}</span></li>)} 
            </ul>
        </div>
    )
}

export default ListCard;