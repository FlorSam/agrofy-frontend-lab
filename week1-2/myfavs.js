showFav = () => {
  const sectionFav = document.getElementById("sectionFavPoke");
  let myfavs = localStorage.setItem(favoriteListKey, favoritePokeList);
  let arrayFavs = [];

  if (favoriteListKey === null) {
    const noFavsDiv = document.createElement("div");
    noFavsDiv.innerHTML = `<h4>Todavía no hay pokemones favoritos</h4>`;
  } else {
    const dataHtml = pokemon.map(poke => {
      const { id, name, image, type } = poke;
  
      const myImage = document.createElement("img");
      const myH4 = document.createElement("h4");
      const myType = document.createElement("p");
  
      myH4.textContent = poke.name;
      myImage.imgContent = poke.image;
      myType.textContent = poke.type;
  
      const pokeCard = document.createElement("div");
      pokeCard.innerHTML = `<img src= ${
        poke.sprites.front_default
      } style="width:30%">
      <div class="container">
        <h4><b>${poke.name}</b></h4>
        <p>${poke.types.map(type => type.type.name).join(", ")}</p>
      </div>`;
  }
};
};
showFav();
