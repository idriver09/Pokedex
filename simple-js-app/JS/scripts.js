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

let space = "  ";
pokemonList.forEach(function(pokemonDetails){
  document.write('<h5>' + 'Name: ' + '</h5>' + pokemonDetails.Name + space +'<h5>' + 'Type: '+ '</h5>' + pokemonDetails.Type + space +'<h5>' + 'Height: '+ '</h5>' + pokemonDetails.Height + space + '<h5>' +'Abilities: '+ '</h5>'
   + space + pokemonDetails.Abilities + '<br>');
})
/*The following loop lists the pokemon names and height values. 
It also checks the height of the pokemon and renders whether it is large, medium, or small. */

// let space = " ";
// for (let i = 0; i < pokemonList.length; i++) {
//   if (pokemonList[i].Height < 1) {
//     document.write(
//       "<h4>" +
//       pokemonList[i].Name +
//         "-" +
//         space +
//         "Height" +
//         space +
//         pokemonList[i].Height +
//         space +
//         "(Small Pokemon)" +
//         space
//         + "</h4>"
//     );
//   } else if (pokemonList[i].Height > 0 && pokemonList[i].Height < 0.5) {
//     document.write(
//       "<h4>" +
//       pokemonList[i].Name +
//         "-" +
//         "Height" +
//         space +
//         pokemonList[i].Height +
//         space +
//         "(Medium Pokemon)" +
//         space
//         + "</h4>"
//     );
//   } else {
//     document.write(
//       "<h4>" +
//       pokemonList[i].Name +
//         "-" +
//         "Height" +
//         space +
//         pokemonList[i].Height +
//         space +
//         "(Wow that is Big!)" +
//         space
//         + "</h4>"
//     );
//   }
// }
