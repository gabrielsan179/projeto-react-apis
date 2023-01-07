import styled from "styled-components";

export const Container = styled.div`
display: flex;
padding: 10px;
width: 400px;
height: 200px;
background-color: ${(props) => props.color};
border-radius: 10px;
position: relative;
color: white;
`
export const Pokeball = styled.img`
  position: absolute;
  top: 0;
  right: 0;
`
export const Pokemon = styled.img`
width: 193px;
height: 193px;
position: absolute;
top: -60px;
right: -10px;
`
export const Type = styled.img`
width: 50px;
margin-left: 20px;
`
export const BlockDetail = styled.div`
text-decoration: underline;
font-family: 'Poppins', sans-serif;
font-size: 16px;
font-weight: 700;
position: absolute;
bottom: 20px;
left: 30px;
cursor: pointer;
`
export const Id = styled.p`
font-family: 'Inter', sans-serif;
font-size: 16px;
font-weight: 700;
margin-left: 20px;
`
export const Nome = styled.p`
font-family: 'Inter', sans-serif;
font-size: 32px;
font-weight: 700;
margin-left: 20px;
text-transform: capitalize;
`
export const Button = styled.button`
  width: 146px;
  height: 38px;
  background: ${(props) => props.color};
  border-radius: 8px;
  border: none;
  cursor: pointer;
  position: absolute;
  bottom: 10px;
  right: 22px;
  color: #000;
`;