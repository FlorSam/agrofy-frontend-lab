const pokedex = document.getElementById("pokedexpage");
let pokemon = [];
const favoriteListKey = "favPokeList";

let pokemonUrl = () => {
  let promises = [];

  for (let i = 1; i < 151; i++) {
    const url = `https://pokeapi.co/api/v2/pokemon/${i}`;
    promises.push(fetch(url).then(resp => resp.json()));
  }
  Promise.all(promises).then(list => {
    pokemon = list;
    console.log(list);
    showPokemon();
  });
};

showPokemon = () => {
  const pokeSection = document.getElementById("idPoke");
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

    const pokeButton = document.createElement("button");
    pokeButton.innerHTML = "fav";
    pokeCard.appendChild(pokeButton);
    pokeCard.classList.add("card");
    pokeCard["data"] = poke.id;
    pokeButton.addEventListener("click", event => {
      
      const pokeId = event.target.parentElement.data;
      let favoritePokeList = localStorage.getItem(favoriteListKey);
      if (favoritePokeList === null) {
        favoritePokeList = JSON.stringify([pokeId]);
      } else {
        const parsedList = JSON.parse(favoritePokeList);
        favoritePokeList = JSON.stringify([...parsedList, pokeId]);
      }
      localStorage.setItem(favoriteListKey, favoritePokeList);
    });

    return pokeCard;
    // }).join();
  });
  pokeSection.append(...dataHtml);
  // pokeSection.innerHTML = dataHtml;
};
pokemonUrl();
showPokemon();
