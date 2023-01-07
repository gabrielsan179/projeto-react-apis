import React, { useContext, useState } from 'react'
import { useLocation, useNavigate, useParams } from 'react-router-dom'
import { goToHomePage, goToPokedexPage } from '../../Routes/Coordinator'
import { ButtonExcluir, Container, Img, Vazia } from './styled'
import logo from '../../Img/logo.png'
import PokeContext from '../../Contexts/PokeContext'

const Header = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const pathParams = useParams()
  const pokeName = {name: pathParams.pokemon}
  const context = useContext(PokeContext)
  const { remove, capture, buttonExcluir, colorButtonExcluir, buttonCaptere, colorButtonCapture, pokemosNames } = context

  const rendHeader = () => {
    if(location.pathname === `/Detail/${pokeName.name}`){
      return(
        <Container>
          <ButtonExcluir onClick={()=>goToPokedexPage(navigate)} color={"#33A4F5"} >Pokédex</ButtonExcluir>
          <Img src={logo} alt="logo" onClick={()=>goToHomePage(navigate)}/>
          {pokemosNames.includes(pathParams.pokemon) ? 
          <ButtonExcluir onClick={()=>capture(pokeName)} color={colorButtonCapture}>{buttonCaptere}</ButtonExcluir> :
          <ButtonExcluir onClick={()=>remove(pokeName)} color={colorButtonExcluir}>{buttonExcluir}</ButtonExcluir>
          }
        </Container>
      )
    }else if(location.pathname === "/Pokedex"){
      return(
        <Container>
          <Img src={logo} alt="logo" onClick={()=>goToHomePage(navigate)}/>
        </Container>
      )
    }else if(location.pathname === "/"){
      return(
        <Container>
          <Vazia></Vazia>
          <Img src={logo} alt="logo" onClick={()=>goToHomePage(navigate)}/>
          <ButtonExcluir onClick={()=>goToPokedexPage(navigate)} color={"#33A4F5"} >Pokédex</ButtonExcluir>
        </Container>
      )
    }
  }

  return (
    <>
      {rendHeader()}
    </>
  )
}

export default Header