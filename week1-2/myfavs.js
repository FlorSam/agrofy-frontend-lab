showFav = () => {
  const sectionFav = document.getElementById("sectionFavPoke");
  const myFavs = window.localStorage.getItem(favoriteListKey);
  favorite = JSON.parse(myFavs);
  console.log(favorite);

  
  
  const pfavoritos = favorite.map(pokemonId => {
    return fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`);
});
Promise.all(pfavoritos).then(list => {
  listapok = list;
    console.log(listapok);

  const dataHtml = listapok.map(pokemon => {

    return `<div class="${pokemonId.id}">
    <img src= ${
      pokemonId.sprites["front_default"]
    } style="width:30%">
    <div class="container">
      <h4><b>${pokemonId.name}</b></h4>
      <p>${pokemonId.types.map(type => type.type.name).join(", ")}</p>
    </div>`;
}).reduce((fullString, currentDiv) => fullString + currentDiv, '')

sectionFav.innerHTML = dataHtml;
});

};

showFav();
