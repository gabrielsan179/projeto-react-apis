import React from 'react'
import { useNavigate } from 'react-router-dom'
import { GetType } from '../../Functions/GetType'
import { goToDetailPage } from '../../Routes/Coordinator'
import { BlockDetail, Button, Container, Id, Nome, Pokeball, Pokemon, Type } from './styled'
import pokeball from '../../Img/pokeball.png'
import { GetColor } from '../../Functions/GetColor'

const Card = (props) => {
  const { functionButton, button, colorButton, pokemon } = props
  const navigate = useNavigate()
      
  return (
    <Container color={GetColor(pokemon.types[0].type.name)}>
      <div>
        <Id>#{pokemon?.id < 10 ? '00' + String(pokemon.id) : pokemon.id < 100 ? '0' + String(pokemon.id) : pokemon.id}</Id>
        <Nome>{pokemon?.name}</Nome>
          {pokemon.types?.map((type) => {
            return <Type src={GetType(type.type.name)} alt={type.type.name} />
          })}
      </div>
      <BlockDetail onClick={()=>goToDetailPage(navigate, pokemon?.name)}>Detalhes</BlockDetail>
      <Pokeball src={pokeball} alt="pokeball" />
      <Pokemon src={pokemon.sprites?.other['official-artwork'].front_default} alt={pokemon?.name}/>
    <Button color={colorButton} onClick={()=>functionButton(pokemon)} >{button}</Button>
    </Container>
  )
}

export default Card