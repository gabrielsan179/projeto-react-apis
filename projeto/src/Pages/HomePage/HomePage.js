import React, { useContext } from 'react'
import Card from '../../Components/Card/Card'
import Header from '../../Components/Header/Header'
import PokeContext from '../../Contexts/PokeContext'
import { CardsContainer, Container, Title } from './styled'

const HomePage = () => {
  const context = useContext(PokeContext)
  const { pokelist, capture, buttonCaptere, colorButtonCapture } = context
  return (
    <>
    <Header />
    <Container>
      <Title>Todos Pokémons</Title>
      <CardsContainer>
        {pokelist.sort((pokemonA, pokemonB) => {
          return pokemonA.id < pokemonB.id ? -1 : 1
        })
        .map((pokemon) => {
          return(
          <Card 
            key={pokemon.id}
            pokemon={pokemon}
            functionButton={capture}
            button={buttonCaptere}
            colorButton={colorButtonCapture}
          />
          )
        })}
      </CardsContainer>
    </Container>
    </>
  )
}

export default HomePage