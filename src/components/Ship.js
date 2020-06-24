import React from 'react';

export function Ship({ ship }){
    return (
        <div className = "ship">
            <div className= "ship_name">
                <p>{ship.name}</p>
            </div>
            <div className= "ship_image">
                <img src={ship.image} alt = {ship.name}></img>
            </div>
            <div className= "ship_data">
                <span>WEIGHT(kgs) {ship.weight_kg }  </span>
                <span>TYPE {ship.type}</span>
                <p>STATUS {ship.active}</p>
            </div>
            <div className= "url">
                <a href = {ship.url}>CLICK FOR MORE DATA</a>
            </div>
        </div>
    )
}