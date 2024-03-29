import { useState } from 'react'
import './App.css'
import MyTitle from "./components/MyTitle"
import PokemonCard from "./components/PokemonCard"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <MyTitle />
      <PokemonCard />
    </>
  )
}

export default App
