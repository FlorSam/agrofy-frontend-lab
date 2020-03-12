import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './PokemonCard.css';
import ButtonFav from '../ButtonFav/ButtonFav';


const PokemonCard = ({name, img, type}) => {
  let [favoritePokeList, setfavoritePokeList] = useState([]);
  let clickFavs = () => {
  const favoriteListKey="";
    favoritePokeList = localStorage.getItem(favoriteListKey);
    if (favoritePokeList === null) {
      favoritePokeList = JSON.stringify([clickFavs]);
    } else {
      const parsedList = JSON.parse(favoritePokeList);
      favoritePokeList = JSON.stringify([...parsedList, clickFavs]);
    }
    localStorage.getItem(favoriteListKey, favoritePokeList);
  };

return (
  <div class="card">
    <div class="img">
  <img class="image" src={img} />
  </div>
  <div class="card-details">
    <h2 class="card-head">{name}</h2>
    <p>{type}</p>
    <ButtonFav callback={() => clickFavs()}/>
  </div>
</div>
)
}

export default PokemonCard;