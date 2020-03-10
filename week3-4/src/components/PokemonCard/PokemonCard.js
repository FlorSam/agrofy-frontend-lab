import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './PokemonCard.css';

const PokemonCard = ({name, img, type}) => {
return (
   <div>

     <img src= {img} />
     <h4>{name}</h4>
     <p>{type}</p>

   </div>
)
}

export default PokemonCard;