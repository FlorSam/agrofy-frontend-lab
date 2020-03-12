import React, { useEffect, useState } from 'react';
import SearchBar from '../../components/SearchBar/SearchBar';
import PokemonCard from '../../components/PokemonCard/PokemonCard';
import Footer from '../../components/Footer/Footer';
import './Pokedex.css';


const Pokedex = () => {
  const [pokemon, setPokemon] = useState([]);
  const [filtered, setFiltered] = useState([]);

  const api = () => {
    let promises = [];
    for (let i = 1; i < 151; i++) {
      const url = `https://pokeapi.co/api/v2/pokemon/${i}`;
      promises.push(fetch(url).then(resp => resp.json()));
    }
    Promise.all(promises).then(list => {
      const poke = list.map(poke => {
        return {
          id: poke.id,
          name: poke.name,
          img: poke.sprites["front_default"],
          type: poke.types.map(type => type.type.name).join(", ")
        };
      });
      setPokemon(poke);
      setFiltered(poke);
    });
  }
  useEffect(
    () => {
       api();
    }, []);
    const filter = text => {
      const updatedList = pokemon.filter(item => item.name.includes(text));
      setFiltered(updatedList);
    }
 
return <div className="pokedexpage">
<div className="search">
  <h1>Pokedex</h1>
  <SearchBar onSearch={filter}/>
  </div>
  <div className="pok">
  {
    filtered.map(poke => <PokemonCard name={poke.name} img={poke.img} type={poke.type} /> )
  }
  </div>
  <Footer />
</div>


}
export default Pokedex;
