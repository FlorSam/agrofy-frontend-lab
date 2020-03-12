import React from 'react';
import './ButtonFav.css';

const ButtonFav = (props) => {
  const clicked = () => {
    props.callback();
  };

  return <button
    className="btn"
    onClick={() => clicked()}>
    Add to favs
  </button>
}

export default ButtonFav;