import React, { useEffect, useState, useContext } from "react";
import PokeCardFav from '../component/cardfav.js'
import { Context } from "../store/appContext"

import "../../styles/favorites.css";
import "../../styles/cardfav.css";

export const FavoritesPage = () => {

	const { store, actions } = useContext(Context)

	console.log("HOLA", store.favoritesStore)

	return (
		<>
			<div className="grid-container">
				{
					store.favoritesStore ? store.favoritesStore.map((pokemon, index) => {
						console.log("hola", pokemon)
						return (
							<div className="grid-item">
								<PokeCardFav

									key={index}
									cardimg={pokemon.cardimg}
									cardtitle={pokemon.cardtitle}
									cardtype1={pokemon.cardtype1}
									cardtype2={pokemon.cardtype2}
									cardheight={pokemon.cardheight}
									cardweight={pokemon.cardweight}
									id={pokemon.id}
								/>
							</div>
						)
					}) : "No Data"
				}
			</div>
		</>
	)
}

