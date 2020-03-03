//pokedex
const pokedex = document.getElementById("pokedexpage");
const pokemon = [];

let pokemonUrl = () => {

  let promises = [];

  for (let i = 1; i < 151; i++) {
    const url = `https://pokeapi.co/api/v2/pokemon/${i}`;
    promises.push(fetch(url).then(resp => resp.json()));
  }
  Promise.all(promises)
    .then(list => {
      pokemon = list;
      console.log(list);
      showPokemon();
    });
}


showPokemon = () => {
  const pokeSection = document.getElementById('idPoke');
  const dataHtml = pokemon.map(poke => {
    let {id, name, image, type } = poke;
  
    const myImage = document.createElement('img');
    const myH4 = document.createElement('h4');
    const myType = document.createElement('p');
  
    myH4.textContent = poke.name;
    myImage.imgContent = poke.image;
    myType.textContent = poke.type;
    
    const cardHtml = `
    <div class="card">
    <img src= ${poke.image} style="width:30%">
    <div class="container">
      <h4><b>${poke.name}</b></h4>
      <p>${poke.type}</p>
    </div>
  </div>
    `;
    return cardHtml;
  }).join();
  pokeSection.innerHTML = cardHtml;
}
pokemonUrl();
showPokemon();

/*let pokemonInfo = pokemonData => {
  Promise.all(pokemonData).then(results => {
    let pokemonId = results.map(result => ({
      name: result.name,
      image: result.image,
      type: result.types.map(type => type.type.name).join(", "),
      id: result.id
    }));
    console.log(pokemonData);
  });

};
const pokemonData = [];
const result = words.filter(word =>
  word.length > 6
);
console.log(result);
//
filtroPokemon = () => {
  if ('id' in obj && typeof (obj.id) === 'number' && !isNaN(obj.id)) {
    return true;
  } else {
    entradasInvalidas++;
    return false;
  }
}
var arrPorID = arr.filter(filtrarPorID);

console.log('', arrPorID);
*/
