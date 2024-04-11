import React, { useState } from 'react';


const NavBar = ({ pokemonIndex, handleClickIncrement, handleClickDecrement, pokemonList }) => {

    return (
        <div>
            {pokemonIndex > 0 && (
                <button onClick={handleClickDecrement}>Précédent</button>
            )}
            {pokemonIndex < pokemonList.length - 1 && (
                <button onClick={handleClickIncrement}>Suivant</button>
            )}
        </div>
    )
}
export default NavBar;