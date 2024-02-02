const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {

			pokemons: [],

			pokemon: {},

			favoritesStore: [],

		},
		actions: {
			// nuevos actions (son funciones) no se ejecutan autiamticamente , se deben llamar a los actions y ejecutarlos. luego se guardan en variable de estado global.

			/* 			LoadPokeData1: async () => {
							fetch("https://pokeapi.co/api/v2/pokemon/?limit=151")
								.then((response) => response.json())
								.then(data => setStore({ pokeData: data.results }))
						}, */
			LoadPokeData: async (startId, endId) => {
				try {
					const promises = [];
					for (let id = startId; id <= endId; id++) {
						promises.push(fetch(`https://pokeapi.co/api/v2/pokemon/${id}`).then(resp => resp.json()))
					}

					const pokemonsData = await Promise.all(promises)

					setStore({ pokemons: pokemonsData })
				} catch (error) {
					console.log("error to obtain pokemon data", error)
				}
			},
			LoadPokeDataDetails: (id) => {
				fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
					.then((response) => {
						return response.json()
					})
					.then((data) => {
						setStore({ detailspage: data })
					})
			},
			AddToFavorites: (pokemonfav) => {
				const {favoritesStore} = getStore()
				let exist = favoritesStore.some((pokemonFavExist) => pokemonFavExist.id === pokemonfav.id)
				if( !exist ){
				setStore({favoritesStore: [...favoritesStore, pokemonfav]})
				} else {
					console.log("already in favorites")
				}

			  },

			  RemoveFromFavorites: (deletedFavorites) => {

				const {favoritesStore}  = getStore();
				
				const updatedFavorites = favoritesStore.filter((favorite) => favorite.id !== deletedFavorites.id );
			
				setStore({ favoritesStore : updatedFavorites });	

			  },

		}
	};
};

// actualizar guardar respuseta de pokemons agregados a favoritos en actyions y hacer push a la store. luego creear nueva tarjeta igual como se hizo en el home pasando los datos de pokemons.store



export default getState;








/* 

AddToFavorites: (id) => {
	// Get the current state
	const store = getStore();
	
	// Check if the Pokemon is already in favorites
	const isAlreadyFavorite = store.favorites.some((favorite) => favorite.id === id);

	if (!isAlreadyFavorite) {
	  // Find the Pokemon in the pokemons array
	  const selectedPokemon = store.pokemons.find((pokemon) => pokemon.id === id);

	  // Add the selected Pokemon to the favorites array
	  const updatedFavorites = [...store.favorites, selectedPokemon];

	  // Update the store with the new favorites array
	  setStore({ favorites: updatedFavorites });
	}
  },
  RemoveFromFavorites: (id) => {
	// Get the current state
	const store = getStore();

	// Filter out the selected Pokemon from the favorites array
	const updatedFavorites = store.favorites.filter((favorite) => favorite.id !== id);

	// Update the store with the updated favorites array
	setStore({ favorites: updatedFavorites });
  },



 */