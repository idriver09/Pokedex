let pokemonList = [
  {
    Name: "Weedle",
    Type: "bug/poison",
    Height: 0.3,
    Abilities: ["Sheid-dust", "Run-away"],
  },

  {
    Name: "Zubat",
    Type: "poison/flying",
    Height: 1.8,
    Abilities: ["Inner-focus", "Infiltrator"],
  },

  {
    Name: "Spearow",
    Type: "flying/normal",
    Height: 0.3,
    Abilities: ["Keen-eye", "Sniper"],
  },
];

/*The following loop lists the pokemon names and height values. 
It also checks the height of the pokemon and renders whether it is large, medium, or small. */

let space = " ";
for (let i = 0; i < pokemonList.length; i++) {
  if (pokemonList[i].Height < 1) {
    document.write(
      pokemonList[i].Name +
        "-" +
        space +
        "Height" +
        space +
        pokemonList[i].Height +
        space +
        "(Small Pokemon)" +
        space
    );
  } else if (pokemonList[i].Height > 0 && pokemonList[i].Height < 0.5) {
    document.write(
      pokemonList[i].Name +
        "-" +
        "Height" +
        space +
        pokemonList[i].Height +
        space +
        "(Medium Pokemon)" +
        space
    );
  } else {
    document.write(
      pokemonList[i].Name +
        "-" +
        "Height" +
        space +
        pokemonList[i].Height +
        space +
        "(Wow that is Big!)" +
        space
    );
  }
}
