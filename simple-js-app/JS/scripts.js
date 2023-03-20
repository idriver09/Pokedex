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
  if (pokemonDetails.Height > 1){
  document.write('<h5>'  + 'Name: ' +  pokemonDetails.Name + space +  'Type: ' +  pokemonDetails.Type + space +  'Height: '+  pokemonDetails.Height + "(Wow that is Big!)" + space +   +'Abilities: ' 
   + space + pokemonDetails.Abilities +'<br>')
  
  } else if (pokemonDetails.Height < 1 && pokemonDetails.Height > 0.5) {
    document.write('<h5>'  + 'Name: ' +  pokemonDetails.Name + space + 'Type: ' +  pokemonDetails.Type + space +  'Height: '+  pokemonDetails.Height + "(Medium Pokemon)" + space + 'Abilities: ' 
    + space + pokemonDetails.Abilities +'<br>')

  } else {
    document.write('<h5>' + 'Name: ' +  pokemonDetails.Name + space + 'Type: ' +  pokemonDetails.Type + space +  'Height: '+  pokemonDetails.Height + "(Small Pokemon)" + space + 'Abilities: '  
    + space + pokemonDetails.Abilities + '<br>' )
  }
 
    
  });
    
  




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
