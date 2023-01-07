import React, { useEffect, useState } from 'react'
import { createGlobalStyle } from 'styled-components';
import PokeContext from './Contexts/PokeContext';
import Router from './Routes/Router'
import axios from 'axios'

const GlobalStyle = createGlobalStyle`
  *{
    padding: 0;
    margin: 0;
    box-sizing: border-box;  
  }
`;

const App = () => {
  const buttonCaptere = "Capturar!"
  const colorButtonCapture = "#33A4F5"
  const buttonExcluir = "Excluir!"
  const colorButtonExcluir = "#FF6262"
  const [pokelist, setPokelist] = useState([])
  const [pokedex, setPokedex] = useState([])
  const [pokemosNames, setPokemonsNames] = useState([])
  const [pokedexNames, setPokedexNames] = useState([])

  useEffect(() => {
    addPokelist()
  }, [])

  const addPokelist = async () => {
    const newPokelist = [...new Set(pokelist)]
    const names = [...new Set(pokemosNames)]
    for (let i = 1; i <= 20; i++){
    try {
      const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${i}`)
      newPokelist.push(response.data)
      names.push(response.data.name)
      setPokemonsNames(names)
      setPokelist(newPokelist)
    } catch (error) {
      console.log(error.response)
    }
  } 
} 

  const capture = (pokemon) => {
    const addPokemon = pokelist.filter((item) => item.name === pokemon.name)
    const newPokedex = [...pokedex, addPokemon[0]]
    setPokedex(newPokedex)
    const newPokelist = pokelist.filter((item) => item.name !== pokemon.name)
    setPokelist(newPokelist)
    const addPoke = pokemosNames.filter((item) => item === pokemon.name)
    const newPoke = [...pokedexNames, addPoke[0]]
    setPokedexNames(newPoke)
    const newPokeName = pokemosNames.filter((item) => item !== pokemon.name)
    setPokemonsNames(newPokeName)
  }
  const remove = (pokemon) => {
    const addPokemon = pokedex.filter((item) => item.name === pokemon.name)
    const newPokelist = [...pokelist, addPokemon[0]]
    setPokelist(newPokelist)
    const newPokedex = pokedex.filter((item) => item.name !== pokemon.name)
    setPokedex(newPokedex)
    const addPoke = pokedexNames.filter((item) => item === pokemon.name)
    const newPoke = [...pokemosNames, addPoke[0]]
    setPokemonsNames(newPoke)
    const newPokeName = pokedexNames.filter((item) => item !== pokemon.name)
    setPokedexNames(newPokeName)
  }

  const context = {
    buttonCaptere: buttonCaptere,
    colorButtonCapture: colorButtonCapture,
    buttonExcluir: buttonExcluir,
    colorButtonExcluir: colorButtonExcluir,
    capture: capture,
    remove: remove,
    pokedex: pokedex,
    pokelist: pokelist,
    pokemosNames: pokemosNames,
    pokedexNames: pokedexNames
  }
  return (
    <>
      <GlobalStyle />
      <PokeContext.Provider value={context}>
      <Router />
      </PokeContext.Provider >
    </>
  )
}

export default App