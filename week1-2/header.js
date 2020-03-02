window.addEventListener("load", () => {
  window.onscroll = function() {
    myFunction();
  };

  let header = document.getElementById("myHeader");

  let sticky = header.offsetTop;

  function myFunction() {
    if (window.pageYOffset > sticky) {
      header.classList.add("sticky");
    } else {
      header.classList.remove("sticky");
    }
    console.log("myFunction");
  }

  //pokedex
  const pokedex = document.getElementById("pokedexpage");

  fetch("https://pokeapi.co/api/v2/pokemon/")
    .then(response => {
      return response.json();
    })
    .then(function(json) {
      let pokemonUrl = URL.createObjectURL(json);
      inicialize(pokemonId);
    })
    .then(json => {
      console.log(json);
    })
    .catch(error => console.error(error));

  createObjectURL();

  // function showPokemon(jsonObj) {
  //   let pokemonId = jsonObj['id'];

  //   for (let i = 0; i < 151; i++) {
  //     const myImage = document.createElement('img');
  //     const myH4 = document.createElement('h4');
  //     const myType = document.createElement('p');

  //     myH4.textContent = pokemonUrl[i].name;
  //     myImage.imgContent = pokemonUrl[i].image;
  //     myType.textContent = pokemonUrl[i].type;

  //   }
  // }
});
