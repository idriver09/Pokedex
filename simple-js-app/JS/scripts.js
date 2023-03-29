let pokemonRepository = (function () {
  let pokemonList = [];
  let apiUrl = "https://pokeapi.co/api/v2/pokemon/?limit=150";

  function addListItem(pokemon) {
    let pokemonListItems = document.querySelector(".pokemon-list");
    let listItem = document.createElement("li");
    let button = document.createElement("button");
    button.innerText = pokemon.name;
    button.classList.add("pokemonButton");
    listItem.appendChild(button);
    pokemonListItems.appendChild(listItem);

    button.addEventListener("click", function (event) {
      showDetails(pokemon);
    });
  }

  function loadList() {
    return fetch(apiUrl)
      .then(function (response) {
        return response.json();
      })
      .then(function (json) {
        json.results.forEach(function (item) {
          let pokemon = {
            name: item.name,
            detailsUrl: item.url,
          };
          add(pokemon);
        });
      })
      .catch(function (e) {
        console.error(e);
      });
  }

  function loadDetails(item) {
    let url = item.detailsUrl;
    return fetch(url)
      .then(function (response) {
        return response.json();
      })
      .then(function (details) {
        item.imageUrl = details.sprites.front_default;
        item.height = details.height;
        item.types = details.types;
      })
      .catch(function (e) {
        console.error(e);
      });
  }

  function getAll() {
    return pokemonList;
  }

  function add(pokemon) {
    return pokemonList.push(pokemon);
  }

  let modalContainer = document.querySelector("#modal-container");

  function showDetails(pokemon) {
    loadDetails(pokemon).then(function () {
      //modalContainer.innerHTML = "";
      let modalCloseButton = document.querySelector(".modal-close");
      let imageContainer = document.querySelector("#image-container");
      let pokemonImage = document.createElement("img");
      let modalTitle = document.querySelector("#modal-title");
      let modalText = document.querySelector("#modal-text");
      modalContainer.classList.add("is-visible");
      modalCloseButton.addEventListener("click", closeModal);
      modalTitle.innerText = pokemon.name;
      modalText.innerText = "Height:" + pokemon.height;
      pokemonImage.src = pokemon.imageUrl;
      imageContainer.appendChild(pokemonImage);

      modalContainer.addEventListener("click", (e) => {
        let target = e.target;
        if (target === modalContainer) {
          closeModal();
        }
      });

      window.addEventListener("keydown", (e) => {
        if (
          e.key === "Escape" &&
          modalContainer.classList.contains("is-visible")
        ) {
          closeModal();
        }
      });
    });
  }

  function closeModal() {
    let modalContainer = document.querySelector("#modal-container");
    modalContainer.classList.remove("is-visible");
  }

  return {
    getAll: getAll,
    add: add,
    addListItem: addListItem,
    loadList: loadList,
    loadDetails: loadDetails,
    showDetails: showDetails,
  };
})();

pokemonRepository.loadList().then(function () {
  pokemonRepository.getAll().forEach(function (pokemon) {
    pokemonRepository.addListItem(pokemon);
  });
});
