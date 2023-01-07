import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import CardDetail from '../../Components/CardDetail/CardDetail'
import Header from '../../Components/Header/Header'
import PokeContext from '../../Contexts/PokeContext'
import { GetColor } from '../../Functions/GetColor'
import pokeball from '../../Img/pokeball.png'
import { Container, Pokeball, Title } from './styled'

const DetailPage = () => {
  const pathParams = useParams()
  const pokeName = pathParams.pokemon
  const context = useContext(PokeContext)
  const { pokedex, pokelist, pokemosNames, pokedexNames } = context
  const rendCard = () => {
    if(pokemosNames.includes(pokeName)){
      return(
        <>
          {pokelist.filter((pokemon) => {
            return pokeName === pokemon.name
          }).map((pokemon)=>{
            return <CardDetail key={pokemon.id} pokemon={pokemon} cardColor={GetColor(pokemon.types[0].type.name)}/>
          })}
        </>
      )
    } else if (pokedexNames.includes(pokeName)){
      return(
        <>
          {pokedex.filter((pokemon) => {
            return pokeName === pokemon.name
          }).map((pokemon)=>{
            return <CardDetail key={pokemon.id} pokemon={pokemon} cardColor={GetColor(pokemon.types[0].type.name)}/>
          })}
        </>
      )
    }
  }

  return (
  <>
  <Header />
    <Container>
      <Pokeball src={pokeball} alt="pokeball" />
      <Title>Detalhes do {pokeName}</Title>
      {rendCard()}
      <CardDetail/>
    </Container>
  </>
  )
}

export default DetailPage