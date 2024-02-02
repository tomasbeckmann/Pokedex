import React, { useEffect, useState, useContext } from "react";
import PokeCard from '../component/card.js'
import { Context } from "../store/appContext"

import "../../styles/home.css";
import "../../styles/card.css";

export const Home = () => {


	const { store, actions } = useContext(Context)

	console.log(store.pokemons)
	console.log(store.pokemon)


	useEffect(() => {

		actions.LoadPokeData(1, 151)

	}, [])

	return (
		<>
			<div className="grid-container">
				{
					store.pokemons ? store.pokemons.map((pokemon, index) => {
						return (
							<div className="grid-item">
								<PokeCard
									key={index}
									cardimg={pokemon.sprites.other["official-artwork"].front_default}
									cardtitle={pokemon.name[0].toUpperCase() + pokemon.name.slice(1)}
									cardtype1={pokemon.types[0].type.name}
									cardtype2={pokemon.types[1]?.type.name}
									cardheight={pokemon.height}
									cardweight={pokemon.weight}
									id={index + 1}
								/>
							</div>
						)
					}) : "No Data"
				}
			</div>
		</>
	)
}


// no se puede recibir key como props
//Optional chaining = ? cuando exista store.pokedata ejecuta map

/* 		store.pokeData?.map((poke) => {
			return (
				<PokeCard
					cardimg={"123"}
					cardtitle={"123"}
					cardtext={"123"}
				/>
			)
		}) */

// fragment <> </>		



