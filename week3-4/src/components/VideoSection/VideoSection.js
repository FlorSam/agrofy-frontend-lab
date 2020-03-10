import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './VideoSection.css';
import VideoBtn from "../VideoBtn/VideoBtn"

const VideoSection = () => {
return (
    <section className="videos">

		<h2>Checkout the Official Pokémon YouTube channel</h2>
		<VideoBtn />

	</section>
);
}

export default VideoSection;