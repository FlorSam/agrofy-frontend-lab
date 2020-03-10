import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Hero.css';
import Button from "../Button/Button";

const Hero = () => {
return (
    <section id="hero">

		<h2>Welcome to Pokedex</h2>

		<a href="#historypokemon">
            <Button />
        </a>

	</section>
);
}

export default Hero;