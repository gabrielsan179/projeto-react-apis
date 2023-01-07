import React, { useContext } from 'react'
import Card from '../../Components/Card/Card'
import Header from '../../Components/Header/Header'
import PokeContext from '../../Contexts/PokeContext'
import { CardsContainer, Container, Title } from './styled'

const PokedexPage = () => {
  const context = useContext(PokeContext)
  const { pokedex, remove, buttonExcluir, colorButtonExcluir } = context

  return (
    <>
    <Header />
    <Container>
      <Title>Meus Pokémons</Title>
      <CardsContainer>
      {pokedex.sort((pokemonA, pokemonB) => {
          return pokemonA.id < pokemonB.id ? -1 : 1
        })
        .map((pokemon) => {
          return(
            <Card 
            key={pokemon.name}
            pokemon={pokemon}
            functionButton={remove}
            button={buttonExcluir}
            colorButton={colorButtonExcluir}
            />
            )
          })}
      </CardsContainer>
    </Container>
    </>
  )
}

export default PokedexPage