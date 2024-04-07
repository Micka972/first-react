import { useState } from 'react'
import './App.css'
import MyTitle from "./components/MyTitle"
import PokemonCard from "./components/PokemonCard";

function App() {
  const [pokemonIndex, setPokemonIndex] = useState(0);
  const handleClickIncrement = () => {
    if (pokemonIndex < pokemonList.length - 1) {
      setPokemonIndex(pokemonIndex + 1)
    }
  }

  const handleClickDecrement = () => {
    if (pokemonIndex > 0) {
      setPokemonIndex(pokemonIndex - 1)
    }
  }


  const pokemonList = [
    {
      name: "bulbasaur",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
    },
    {
      name: "charmander",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
    },
    {
      name: "squirtle",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
    },
    {
      name: "pikachu",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
    },
    {
      name: "mew",
    },
  ];

  return (
    <>
      <MyTitle />
      <PokemonCard pokemon={pokemonList[pokemonIndex]} />
      <div>
        {pokemonIndex > 0 && (
          <button onClick={handleClickDecrement}>Précédent</button>
        )}
        {pokemonIndex < pokemonList.length - 1 && (
          <button onClick={handleClickIncrement}>Suivant</button>
        )}
      </div>
    </>
  )
};

export default App
