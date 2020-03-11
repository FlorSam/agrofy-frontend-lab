import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './SearchBar.css';

const SearchBar = ({onSearch}) => {
    const [searchValue, setSearchValue] = useState ('');
    const search = event => {
        event.preventDefault();
        onSearch(searchValue);
    }
    
    return (
        <form>
        <input type="text" className="pokedexInput" onChange={this.filterList} />
        <button type="submit" className="pokedexBtn" onClick={searchValue}>Search</button>
        </form>
    )
    }
          
export default SearchBar;