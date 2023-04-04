let pokemonRepository = (function () {
  let pokemonList = [];
  let apiUrl = "https://pokeapi.co/api/v2/pokemon/?limit=150";

  function getAll() {
    return pokemonList;
  }

  function add(pokemon) {
    return pokemonList.push(pokemon);
  }

  function addListItem(pokemon) {
    let pokemonListItems = document.querySelector(".pokemon-list");
    pokemonListItems.classList.add("list-group");
    let listItem = document.createElement("li");
    listItem.classList.add("list-group-item");

    let button = document.createElement("button");
    button.classList.add("btn");
    button.innerText = pokemon.name;
    button.classList.add("pokemonButton");
    listItem.appendChild(button);
    pokemonListItems.appendChild(listItem);

    button.addEventListener("click", function () {
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

  //let modalContainer = document.querySelector("#modal-container");

  function showDetails(pokemon) {
    loadDetails(pokemon).then(function () {
      showModal(pokemon);
    });
  }

  function showModal(item) {
    pokemonRepository.loadDetails(item).then(function () {
      let modalTitle = document.querySelector(".modal-title");
      modalTitle.innerText = item.name;
      let pokemonHeight = document.querySelector(".height");
      pokemonHeight.innerText = "Height: " + item.height;
      let modal = document.querySelector(".modal");
      modal.classList.add("modal-is-visible");
      modal.classList.remove("modal");
      let modalHeader= document.querySelector('.modal-header');
      let modalCloseButton = document.createElement("button");
      modalCloseButton.classList.add("btn");
      modalCloseButton.classList.add('modal-close');
      modalHeader.append(modalCloseButton);
      modalCloseButton.innerText= 'x';

      modalCloseButton.addEventListener("click", function () {
        closeModal();
      });
    });

    function closeModal() {
      let modal = document.querySelector(".modal");
      modal.classList.remove("modal-is-visible");
      modal.classList.add('modal');
    }
  }

  return {
    getAll: getAll,
    add: add,
    addListItem: addListItem,
    loadList: loadList,
    loadDetails: loadDetails,
    showDetails: showDetails,
    showModal: showModal,
  };
})();

pokemonRepository.loadList().then(function () {
  pokemonRepository.getAll().forEach(function (pokemon) {
    pokemonRepository.addListItem(pokemon);
  });
});
