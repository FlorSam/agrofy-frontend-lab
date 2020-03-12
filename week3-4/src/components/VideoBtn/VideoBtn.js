import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./VideoBtn.css";
import Button from "../Button/Button";

const VideoBtn = () => {
  return (
    <div className="VideoBtn">
      <div>
        <iframe
          id="vid"
          width="660"
          height="415"
          src="https://www.youtube.com/embed/9jRtpMKLsts"
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
      <div className="video">
        <a
          href="https://www.youtube.com/user/pokemon/videos?view=0&sort=p&flow=grid"
        >
          <Button />
        </a>
      </div>
    </div>
  );
};

export default VideoBtn;
