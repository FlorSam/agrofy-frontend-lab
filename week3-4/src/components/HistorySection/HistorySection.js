import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './HistorySection.css';
import Icon1980 from '../Icon1980/Icon1980';
import Icon1996 from '../Icon1996/Icon1996';
import Icon1998 from '../Icon1998/Icon1998';


const HistorySection = () => {
return (
    <section id="HistorySection">
		
		<h2>History data</h2><br /><br />

		<div class="his">

			<div class="icon">
				<h3>1980</h3>

				<Icon1980 />
			</div>
			<div>
				<h4>First steps</h4>

				<p>Pokémon is short for “Pocket Monsters", the original Japanese name. The franchise has its roots in a
					gaming magazine in the early 1980s in Japan—Game Freak, started by Satoshi Tajiri and Ken Sugimori.
					Tajiri was the writer, while Sugimori was the illustrator.</p>

			</div>
		</div>

		<div class="his">
			<div class="icon">
				<h3>1996</h3>

				<Icon1996 />
			</div>
			<div>
				<h4>Game Boy</h4>


				<p> 26 February 1996 marks the debut of the Pokémon franchise in the form of both those games on the
					Game Boy in Japan. At its heart, Pocket Monsters: Red and Green was a very basic Japanese
					role-playing game.</p>
			</div>
		</div>
		

		<div class="his">
			<div class="icon">
				<h3>1998</h3>
				<Icon1998 />
			</div>
			<div>
				<h4>Pikachu</h4>
				<p>The popularity of the anime and Yellow, I believe, led to Pikachu becoming the most recognizable and
					loved Pokémon out there. Pocket Monsters’ success led to North America getting the games in 1998 for
					the Game Boy (as Pokémon Red and Blue). These few years in the public saw Pokémon go from a game
					about a hobby to a worldwide phenomenon</p>
			</div>
		</div><br /><br /><br />
	</section>
);
}

export default HistorySection;