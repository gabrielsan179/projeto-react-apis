import styled from "styled-components"

export const Container = styled.header`
display: flex;
justify-content: center;
align-items: center;
border-bottom: 2px solid white;
gap: 15vw;
height: 16vh;
`
export const Img = styled.img`
width: 20%;
`
export const ButtonExcluir = styled.button`
border: none;
border-radius: 8px;
color: white;
background-color: ${(props) => props.color};
height: 45%;
width: 20%;
font-family: 'Poppins', sans-serif;
font-size: 16px;
font-weight: 700;
`
export const Vazia = styled.div`
height: 45%;
width: 20%;
`