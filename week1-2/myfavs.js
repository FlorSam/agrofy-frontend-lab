showFav = () => {
  const sectionFav = document.getElementById("sectionFavPoke");
  const myFavs = window.localStorage.getItem(favoriteListKey);
  favorite = JSON.parse(myFavs);
  console.log(favorite);

  
  
  const pfavoritos = favorite.map(pokemonId => {
    return fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`).then(resp => resp.json());
  });
  Promise.all(pfavoritos).then(list => {
    listapok = list;
      console.log(listapok);

    const dataHtml = listapok.map(pokemon => {

      return `<div class="${pokemon.id}">
      <img src= ${
        pokemon.sprites["front_default"]
      } style="width:30%">
      <div class="container">
        <h4><b>${pokemon.name}</b></h4>
        <p>${pokemon.types.map(type => type.type.name).join(", ")}</p>
      </div>`;
    }).reduce((fullString, currentDiv) => fullString + currentDiv, '')

    sectionFav.innerHTML = dataHtml;
  });

};

showFav();


const filter = text => {
  updatedList = this.state.initialItems;    
  updatedList = updatedList.filter(function(item){
   return item.toLowerCase().search(
     event.target.value.toLowerCase()) !== -1;
   });
   this.setState({items: updatedList})
}
getInitialState = () => {
  return{
    initialItems: this.props.items,
    items: this.props.items
  }
}


