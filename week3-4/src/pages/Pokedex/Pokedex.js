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
const [Search, setSearch] = useState ("");

useEffect = (() => {
  api();
}, [Search]);


const api = async () => {
  let pokemon = [];
  let promises = [];
  const poke = [];

  for (let i = 1; i < 151; i++) {
    const url = `https://pokeapi.co/api/v2/pokemon/${i}`;
    promises.push(fetch(url).then(resp => resp.json()));
  }
  Promise.all(promises).then(list => {
    pokemon = list;
    console.log(list);
    setPokemonCards(list);
  
    const { id, name, image, type } = poke;
    console.log(poke);
  
      poke.map(pokemon.map(poke => {
         { id, name, image, type };
        <PokemonCard
          name={poke.name}
          img={poke.sprites.front_default}
          type={poke.types.map(type => type.type.name).join(", ")}
        />
    
      }))
  })
}

export default Pokedex;
