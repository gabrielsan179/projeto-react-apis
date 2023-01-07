import styled from "styled-components";

export const MainContainer = styled.div`
  display: flex;
  padding: 10px;
  margin: 2vw;
  justify-content: space-between;
  align-items: center;
  width: 96vw;
  height: 600px;
  background-color: ${(props) => props.color};
  border-radius: 20px;
  position: relative;
  color: white;
`;
export const Pokeball = styled.img`
  width: 800px;
  position: absolute;
  top: 0;
  right: 0;
`
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px;
  gap: 40px;
`;
export const ContainerImage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  width: 250px;
  height: 250px;
  background-color: white;
`;
export const DetailImage = styled.img`
  width: 100%;
`;
export const BaseStats = styled.div`
  font-family: "Poppins", sans-serif;
  font-weight: 700;
  color: black;
  border-radius: 12px;
  width: 300px;
  height: 540px;
  background-color: white;
  margin: 10px;
  padding: 30px 0 0 20px;
`;
export const TitleBase = styled.h2`
  color: black;
  font-family: "Poppins", sans-serif;
  font-weight: 700;
`;
export const LineStats = styled.div`
  margin-top: 5px;
  font-family: "Poppins", sans-serif;
  font-weight: 700;
  color: black;
  display: flex;
  text-align: right;
  justify-content: space-between;
  font-size: 12px;
  span:first-child {
    width: 20%;
    text-align: end;
  }
  span:last-child {
    width: 60%;
  }
`;
export const StatsBar = styled.span`
  border-radius: 8px;
  height: 10px;
  div {
    width: ${(props) => (props.stats / 100) * 100}%;
    border: 1px solid
      ${(props) =>
        props.stats < 50
          ? "#FF0000"
          : props.stats < 99
          ? "#FFA500"
          : "#000000"};
    background-color: ${(props) =>
      props.stats < 50 ? "#FF7B2E" : props.stats < 99 ? "#FFDD69" : "#000000"};
    border-radius: 8px;
    height: 100%;
  }
`;
export const ContainerNameMove = styled.div`
  margin-left: 10px;
  font-family: "Poppins", sans-serif;
  font-weight: 700;
`;
export const Type = styled.img`
  width: 50px;
  margin-left: 10px;
  margin-bottom: 24px;
`;
export const Id = styled.h4`
  color: white;
`;
export const Name = styled.h1`
  text-transform: capitalize;
`;
export const ContainerMoves = styled.div`
  border-radius: 10px;
  background-color: white;
  padding: 20px;
  height: 390px;
  width: 300px;
`;
export const ContainerMove = styled.div`
margin: 30px 0 ;
`
export const Moves = styled.span`
  background-color: #ececec;
  color: #000000;
  font-size: 14px;
  text-transform: capitalize;
  border-radius: 12px;
  border: 1px gray dashed;
  height: 37px;
  padding: 7px;
  `;
  export const ImagePokemon = styled.img`
      width: 250px;
      margin-left: 30px;
      margin-bottom: 620px;
  `;