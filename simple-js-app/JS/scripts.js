let pokemonRepository = (function () {
  let pokemonList = [
    {
      Name: "Weedle",
      Type: "bug/poison",
      Height: 0.3,
      Abilities: ["Sheid-dust", " Run-away"],
    },

    {
      Name: "Zubat",
      Type: "poison/flying",
      Height: 1.8,
      Abilities: ["Inner-focus", " Infiltrator"],
    },

    {
      Name: "Spearow",
      Type: "flying/normal",
      Height: 0.3,
      Abilities: ["Keen-eye", " Sniper"],
    },
  ];

  function addListItem(pokemon) {
    let pokemonListItems = document.querySelector(".pokemon-list");
    let listItem = document.createElement("li");
    let button = document.createElement("button");
    button.innerText = pokemon.Name;
    button.classList.add("pokemonButton");
    listItem.appendChild(button);
    pokemonListItems.appendChild(listItem);
  }

  function getAll() {
    return pokemonList;
  }

  function add(pokemon) {
    return pokemonList.push(pokemon);
  }

  return {
    getAll: getAll,
    add: add,
    addListItem: addListItem,
  };
})();

pokemonRepository.getAll().forEach(function (pokemon) {
  pokemonRepository.addListItem(pokemon);
});
