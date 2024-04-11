import React, { useState } from 'react';


const NavBar = ({ pokemonIndex, pokemonList, setPokemonIndex }) => {
    const handlePokemonButtonClick = (index) => {
        setPokemonIndex(index);
    };
    return (
        <div>
            {pokemonList.map((pokemon, index) => (
                <button
                    key={index}
                    onClick={() => handlePokemonButtonClick(index)} >
                    {pokemon.name}
                </button>
            ))}
        </div>
    )
}
export default NavBar;