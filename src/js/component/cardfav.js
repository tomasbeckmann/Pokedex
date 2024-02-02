import React from "react";
import { Link, useNavigate } from 'react-router-dom';
import { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext"


import "../../styles/cardfav.css";

/* function ButtonLink({ to, children }) {
  return <Link to={to}><button>{children}</button></Link>;
}
 */

function PokeCardFav({ cardtype1, cardtype2, cardtitle, cardimg, cardweight, cardheight, id }) {

  const { store, actions } = useContext(Context)

  // hacer un store.push o actions.push con el id de la card

  const [favorites, setFavorites] = useState([]);
  const [isFavorite, setIsFavorite] = useState(false);

/*   const addToFavorites = () => {
    if (!isFavorite) {
      setFavorites([...favorites, { id }]);
    } else {
      const updatedFavorites = favorites.filter(item => item !== id);
      setFavorites(updatedFavorites);
    }
    setIsFavorite(!isFavorite);
  }; */

  const navigate = useNavigate()

  const goToDetails = () => {
    navigate(`/pokemondetails/${id}`)
  }

  return (

    <div className="card">
      <img className="pokemon-image" src={cardimg} alt="Pokémon Image" />
      <div className="pokemon-info">
        <div className="pokemon-name">{cardtitle}</div>
        <div className="pokemon-types">
          <div id="type1" className={`pokemon-type ${cardtype1}`}>{cardtype1.toUpperCase().slice(0, 1) + cardtype1.slice(1)}</div>
          <div id="type2" className={`pokemon-type ${cardtype2} ${!cardtype2 && "pokemon-type-none"}`}>{cardtype2?.toUpperCase().slice(0, 1) + cardtype2?.slice(1)}</div>
        </div>
        <div className="pokemon-stats">
          <div>Weight: {cardweight} kg</div>
          <div>Height: {cardheight} mt</div>
        </div>
        <div className="buttons">
          <button className={`favorite-button ${isFavorite ? 'active' : ''}`} onClick={ () => actions.RemoveFromFavorites({ cardtype1, cardtype2, cardtitle, cardimg, cardweight, cardheight, id })} >
            <span role="img" aria-label="heart">❌</span> Remove Favorite
          </button>
          <button className="details-button" onClick={() => goToDetails()}>
            Details Page
          </button>
          </div>
      </div>
    </div>
  );
}

export default PokeCardFav;

// crear clase responsive que centre el typo si solo tiene uno