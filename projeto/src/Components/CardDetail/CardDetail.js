import React from "react";
import { GetType } from "../../Functions/GetType";
import pokeball from '../../Img/pokeball.png'
import {
  BaseStats,
  Container,
  ContainerImage,
  ContainerMoves,
  ContainerNameMove,
  DetailImage,
  ImagePokemon,
  Id,
  LineStats,
  MainContainer,
  Name,
  StatsBar,
  TitleBase,
  Type,
  Moves,
  ContainerMove,
  Pokeball,
} from "./styled";

const CardDetail = (props) => {
  const { pokemon, cardColor } = props;
  console.log(pokemon);
  return (
    <MainContainer color={cardColor}>
      <Container>
        <ContainerImage>
          <DetailImage
            src={pokemon?.sprites?.front_default}
            alt={pokemon?.name}
          />
        </ContainerImage>
        <ContainerImage>
          <DetailImage
            src={pokemon?.sprites?.back_default}
            alt={pokemon?.name}
          />
        </ContainerImage>
      </Container>
      <BaseStats>
        <TitleBase>Base stats</TitleBase>
        {pokemon?.stats?.map((stats) => {
          return (
            <LineStats>
              <span>
                {stats.stat.name
                  .replace("hp", "HP")
                  .replace("special-attack", "Sp.Atk")
                  .replace("special-defense", "Sp.Def ")}
              </span>
              <span>{stats.base_stat}</span>
              <StatsBar stats={stats.base_stat}>
                <div></div>
              </StatsBar>
            </LineStats>
          );
        })}
        <LineStats>
          <span>Total:</span>
          <span>{pokemon?.stats?.reduce((valorA, valorB) => valorA + valorB.base_stat, 0)}</span>
          <span></span>
        </LineStats>
      </BaseStats>
      <ContainerNameMove>
        <div>
          <Id>#
            {pokemon?.id < 10
              ? "00" + String(pokemon?.id)
              : pokemon?.id < 100
              ? "0" + String(pokemon?.id)
              : pokemon?.id}
          </Id>
          <Name>{pokemon?.name}</Name>
            {pokemon?.types?.map((type) => {
              return <Type src={GetType(type.type.name)} alt={type.type.name} />;
            })}
        </div>
        <ContainerMoves>
          <TitleBase>Moves:</TitleBase>
          {pokemon?.moves &&
            pokemon?.moves
              .filter((move, i) => i < 4)
              .map((move) => {
                return <ContainerMove><Moves>{move.move.name}</Moves></ContainerMove>;
              })}
        </ContainerMoves>
      </ContainerNameMove>
      <Pokeball src={pokeball} alt="pokeball" />
        <ImagePokemon
          src={pokemon?.sprites?.other["official-artwork"].front_default}
          alt="pokemon"
        />
    </MainContainer>
  );
};

export default CardDetail;
