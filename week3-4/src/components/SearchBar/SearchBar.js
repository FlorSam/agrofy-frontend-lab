import React, { useState } from "react";
import "./SearchBar.css";

const SearchBar = ({ onSearch }) => {
  const [searchValue, setSearchValue] = useState("");
  const search = event => {
    event.preventDefault();
    onSearch(searchValue);
  };

  return (
    <form>
      <input
        type="text"
        className="pokedexInput"
        onChange={e => setSearchValue(e.target.value)}
      />
      <button type="submit" className="pokedexBtn" onClick={e => search(e)}>
        Search
      </button>
    </form>
  );
};

export default SearchBar;
