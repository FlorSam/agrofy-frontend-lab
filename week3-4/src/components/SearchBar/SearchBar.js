import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './SearchBar.css';

const SearchBar = () => {
  
    const [Submit, setSubmit] = useState("");
    const [Search, setSearch] = useState ("");

    const searchPokemon = e =>{
        setSearch(e.target.value)
    }
    const mySearch = e => {
        e.preventDefault();
        setSubmit(Search);

    }
    return (
        <form onSubmit={mySearch}>
        <input type="text" className="pokedexInput" value={Search} onChange={searchPokemon}/>
        <button type="submit" className="pokedexBtn">Search</button>
        </form>
        );
    }
            
export default SearchBar;