import React, { useEffect, useState } from 'react';
import './MyFavs.css';
import PokemonCard from '../../components/PokemonCard/PokemonCard';

const MyFavs = () => {

    const [fav, setFav] = useState([]);

    const apiFav = () => {
        for (let i = 1; i < 151; i++) {
            const url = `https://pokeapi.co/api/v2/pokemon/${i}`;
            apiFav.push(fetch(url).then(resp => resp.json()));
        }
        Promise.all(apiFav).then(list => {
            const listafavs =list;
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
    return( <div className="myfavspage">

        <h1>My Favs</h1>

        {
            fav.map(favspokemon => <PokemonCard name={favspokemon.name} img={favspokemon.img} type={favspokemon.type} />)
        }

    </div>
);
}

export default MyFavs;