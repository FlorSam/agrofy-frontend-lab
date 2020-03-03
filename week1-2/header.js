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
  //const pokedex = document.getElementById("pokedexpage");

  let pokemonUrl = () => {
    
    let promises = [];
    
    for (let i = 0; i < 151; i++) {
    const url = `https://pokeapi.co/api/v2/pokemon/${i}`;
      promises.push(fetch(url).then(resp => resp.json()));
    }
    Promise.all(promises)
      .then(list => {
        let listPokemon = list;
        console.log(listPokemon);
      });
    }
  
  

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
  pokemonUrl();

  let pokemonInfo = pokemonData => {
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
    if ('id' in obj && typeof(obj.id) === 'number' && !isNaN(obj.id)) {
      return true;
    } else {
      entradasInvalidas++;
      return false;
    }
  }
  var arrPorID = arr.filter(filtrarPorID);

console.log('', arrPorID)
  };
