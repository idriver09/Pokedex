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

  function getAll() {
    return pokemonList;
  }

  function add(pokemon) {
    return pokemonList.push(pokemon);
  }

  return {
    getAll: getAll,
    add: add,
  };
})();

let space = " ";
pokemonRepository.getAll().forEach(function (pokemonDetails) {
  if (pokemonDetails.Height > 1) {
    document.write(
      "<h5>" +
        "Name: " +
        pokemonDetails.Name +
        space +
        "Type: " +
        pokemonDetails.Type +
        space +
        "Height: " +
        pokemonDetails.Height +
        "(Wow that is Big!)" +
        space +
        "Abilities: " +
        space +
        pokemonDetails.Abilities +
        "<br>"
    );
  } else if (pokemonDetails.Height < 1 && pokemonDetails.Height > 0.5) {
    document.write(
      "<h5>" +
        "Name: " +
        pokemonDetails.Name +
        space +
        "Type: " +
        pokemonDetails.Type +
        space +
        "Height: " +
        pokemonDetails.Height +
        "(Medium Pokemon)" +
        space +
        "Abilities: " +
        space +
        pokemonDetails.Abilities +
        "<br>"
    );
  } else {
    document.write(
      "<h5>" +
        "Name: " +
        pokemonDetails.Name +
        space +
        "Type: " +
        pokemonDetails.Type +
        space +
        "Height: " +
        pokemonDetails.Height +
        "(Small Pokemon)" +
        space +
        "Abilities: " +
        space +
        pokemonDetails.Abilities +
        "<br>"
    );
  }
});
