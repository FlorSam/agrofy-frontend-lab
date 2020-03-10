import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './SearchBar.css';

const SearchBar = () => {
    const [Search, setSearch] = useState ("");
    const [submit, setSubmit] = useState("");

    const searchPokemon = e =>{
        setSearch(e.target.value)
    }
    const mySearch = e => {
        e.preventDefault();
        setSubmit(Search);

    }
    return (
        <form onSubmit={mySearch}>
        <input type="text" className="pokedexInput" value={search} onChange={searchPokemon}/>
        <button type="submit" id="pokedexBtn">Search</button>
        </form>
        );
    }
            
export default SearchBar;