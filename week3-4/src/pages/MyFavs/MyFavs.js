import React, { useEffect, useState } from 'react';
import './MyFavs.css';
import PokemonCard from '../../components/PokemonCard/PokemonCard';

const MyFavs = () => {

    const favoriteListKey = "";
    const [fav, setFav] = useState([]);
    const myfavspok = window.localStorage.getItem(favoriteListKey);
    let favorite = JSON.parse(myfavspok) || [];
    const apiFav = () => {

        const pfavoritos = favorite.map(pokemonId => {
            return fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`).then(resp => resp.json());
        });
        Promise.all(pfavoritos).then(list => {
            const listafavs = list;
            const favspokemon = listafavs.map(favspokemon => {
                return {
                    id: favspokemon.id,
                    name: favspokemon.name,
                    img: favspokemon.sprites["front_default"],
                    type: favspokemon.types.map(type => type.type.name).join(", ")

                };
            })
            setFav(favspokemon);
        });

    };
    useEffect(
        () => {
            apiFav();
        }, []);
    return (<div className="myfavspage">

        <h1>My Favs</h1>

        {
            fav.map(favspokemon => <PokemonCard name={favspokemon.name} img={favspokemon.img} type={favspokemon.type} />)
        }

    </div>
    );
}

export default MyFavs;