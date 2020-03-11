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

    const filter = text => {
      updatedList = this.state.initialItems;    
      updatedList = updatedList.filter(function(item){
       return item.toLowerCase().search(
         event.target.value.toLowerCase()) !== -1;
       });
       this.setState({items: updatedList})
    }
    getInitialState = () => {
      return{
        initialItems: this.props.items,
        items: this.props.items
      }
    }
   

    show = () => {
      return (
        <ul>
           {
            this.props.items.map(function(item) {
             return <li key={item}>{item}</li>
           })
           }
        </ul>
       )
    }


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
