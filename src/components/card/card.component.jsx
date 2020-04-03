import React from 'react';

import './card.style.css'

export const Card = (props) => (
        /* strings with `` are named template strings and allow embeded expressions as id in this case*/
    <div className = 'card-container'>
        <img 
            alt = "monster" 
            src ={`https://robohash.org/${props.monster.id}?set=set2&size=180x180`}/>  
        <h2>{props.monster.name}</h2>
        <h2>{props.monster.email}</h2>
    </div>
);