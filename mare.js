const searchBox = document.querySelector('.search-box input');
const pokemonDiv = document.querySelector('.pokemon');

searchBox.addEventListener('keyup', function(event) {
  if (event.keyCode === 13) { // Enter key
    const query = event.target.value;
    pokemonDiv.innerHTML = 'Loading...';

    fetch(`https://pokeapi.co/api/v2/pokemon/${query}`)
      .then(response => response.json())
      .then(pokemon => {
        pokemonDiv.innerHTML = `
          <h2>${pokemon.name}</h2>
          <img src="${pokemon.sprites.front_default}" alt="${pokemon.name}">
          <p>Pokedex number: ${pokemon.id}</p>
        `;
      })
      .catch(error => {
        pokemonDiv.innerHTML = 'Pokemon not found :(';
        console.error(error);
      });
  }
});
