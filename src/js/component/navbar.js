import React from "react";
import { Link } from "react-router-dom";
import "../../styles/navbar.css";
import pokedex from '/src/img/pokedex.png'
import pokedexlogo from '/src/img/pokedexlogo.png'


export const Navbar = () => {
	return (
		<nav className="navbar">
			<Link to="/">
				<img className="imagen" src={pokedex} alt="logopokedex" />
				<img className="imagenlogo" src={pokedexlogo} alt="logopokedex" />
			</Link>
			<div className="ml-auto">
				<Link to="/favorites">
					<button className="boton">Favorites</button>
				</Link>
			</div>
		</nav>
	);
};


