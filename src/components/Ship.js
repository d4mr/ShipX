import React from 'react';

export function Ship({ ship }){
    return (
        <div className = "ship">
            <div className= "ship name">
                <p>{ship.name}</p>
            </div>
            <div className= "ship image">
                <img src={ship.image} alt = {ship.name}></img>
            </div>
            <div className= "ship data">
                <span>WEIGHT(kgs) {ship.weight}</span>
                <span>TYPE {ship.type}</span>
                <p>STATUS {ship.active}</p>
            </div>
            <div className= "url">
                <a href = "{ships.url}">FOR MORE DATA</a>
            </div>
        </div>
    )
}