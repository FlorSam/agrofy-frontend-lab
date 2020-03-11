import React, { useEffect, useState } from 'react';
import SearchBar from '../../components/SearchBar/SearchBar';
import PokemonCard from '../../components/PokemonCard/PokemonCard';

const Pokedex = () => {
  const [pokemon, setPokemon] = useState([]);

  const api = () => {
    let promises = [];
    for (let i = 1; i < 151; i++) {
      const url = `https://pokeapi.co/api/v2/pokemon/${i}`;
      promises.push(fetch(url).then(resp => resp.json()));
    }
    Promise.all(promises).then(list => {
      console.log(list);
      setPokemon(list.map(poke => {
        return {
          id: poke.id,
          name: poke.name,
          img: poke.sprites["front_default"],
          type: poke.types.map(type => type.type.name).join(", ")

        };
      }))
    });
  };
  useEffect(
    () => {
       api();
    }, []);

return <div className="pokedex page">

  <h1>Pokedex</h1>
  <p>holii</p>
  <SearchBar />
  {
    pokemon.map(poke => <PokemonCard name={poke.name} img={poke.img} type={poke.types} />)
  }
</div>
}

export default Pokedex;
