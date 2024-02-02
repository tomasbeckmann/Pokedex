import { useParams } from "react-router";
import React, { useContext, useEffect, useState } from "react"
import { Context } from "../store/appContext"
import "../../styles/detailspage.css";

export const DetailsPage = () => {

    const [favorites, setFavorites] = useState([]);
    const [isFavorite, setIsFavorite] = useState(false);

    const addToFavorites = () => {
        if (!isFavorite) {
            setFavorites([...favorites, { id }]);
        } else {
            const updatedFavorites = favorites.filter(item => item !== id);
            setFavorites(updatedFavorites);
        }
        setIsFavorite(!isFavorite);
    };

    let params = useParams();

    console.log(params);

    const { id } = useParams();

    const { store, actions } = useContext(Context)

    useEffect(() => {

        actions.LoadPokeDataDetails(id)

    }, [])

    return (

        <div className='jumbotron-card'>

            <img className="pokemon-image-details" src={store.detailspage?.sprites.other["official-artwork"].front_default} alt="Pokémon Image" />

            <div className="pokemon-info-details">

                <div className="pokemon-base-details">
                    <div className="pokemon-name-details">{store.detailspage?.name[0].toUpperCase() + store.detailspage?.name.slice(1)}</div>
                    <div className="pokemon-types-details">
                        <div className={`pokemon-type-details  ${store.detailspage?.types[0].type.name}`} >{store.detailspage?.types[0].type.name.toUpperCase().slice(0, 1) + store.detailspage?.types[0].type.name.slice(1)}</div>
                        {store.detailspage?.types[1] ? (
                            <div className={`pokemon-type-details  ${store.detailspage?.types[1]?.type.name}`}>{store.detailspage?.types[1]?.type.name.toUpperCase().slice(0, 1) + store.detailspage?.types[1]?.type.name.slice(1)}</div>
                        ) : (
                            <div></div>
                        )}
                    </div>
                </div>

                <div className="pokemon-stats-details">
                    <div className="stat-details">HP: {store.detailspage?.stats[0].base_stat}</div>
                    <div className="stat-details">Attack: {store.detailspage?.stats[1].base_stat}</div>
                    <div className="stat-details">Defense: {store.detailspage?.stats[2].base_stat}</div>
                    <div className="stat-details">Special-Attack: {store.detailspage?.stats[3].base_stat}</div>
                    <div className="stat-details">Special-Defense: {store.detailspage?.stats[4].base_stat}</div>
                    <div className="stat-details">Speed: {store.detailspage?.stats[5].base_stat}</div>
                </div>

                <div className="pokemon-abilities-details">
                    <div className="ability-details">Ability 1: {store.detailspage?.abilities[0].ability.name.toUpperCase().slice(0, 1) + store.detailspage?.abilities[0].ability.name.slice(1)}</div>
                    {store.detailspage?.abilities[1] ? (
                        <div className="ability-details">Ability 2: {store.detailspage?.abilities[1]?.ability.name.toUpperCase().slice(0, 1) + store.detailspage?.abilities[1]?.ability.name.slice(1)}</div>
                    ) : (
                        <div></div>
                    )}
                </div>

            </div>
        </div>

    )
}


// concatenar a ruta de pokemon para hacer consulta por id y crear nuevo fetch en flux.