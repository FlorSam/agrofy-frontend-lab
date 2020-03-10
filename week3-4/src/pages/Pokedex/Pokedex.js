import React, { useEffect, useState } from 'react';
import SearchBar from '../../components/SearchBar/SearchBar';
import PokemonCard from '../../components/PokemonCard/PokemonCard';

const Pokedex = () => (

  <div className="pokedex page">
    <h1>Pokedex</h1>
    <p>holii</p>
    <SearchBar />
  </div>
)

const [PokemonCards, setPokemonCards] = useState([]);

useEffect = (() => {
  api();
}, [search]);


const api = async () => {
  let promises = [];
  for (let i = 1; i < 151; i++) {
    const url = `https://pokeapi.co/api/v2/pokemon/${i}`;
    promises.push(fetch(url).then(resp => resp.json()));
  }
  Promise.all(promises).then(list => {
    pokemon = list;
    console.log(list);
    setPokemonCards(data);
    const { id, name, image, type } = poke;
    console.log(data);
  
      poke.map(poke => (
        <PokemonCard
          name={poke.name}
          img={poke.image}
          type={poke.type}
        />
      ))
    }
  }

export default Pokedex;
