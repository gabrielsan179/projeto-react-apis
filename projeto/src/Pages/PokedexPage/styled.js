import styled from "styled-components";

export const Container = styled.main`
background-color: gray;
width: 100%;
min-height: 80vh;
padding-bottom: 10px;
`
export const Title = styled.h1`
font-family: 'Poppins', sans-serif;
font-size: 48px;
padding: 30px;
color: white;
`
export const CardsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
  justify-items: center;
  gap: 50px 10px;
  margin: 30px 15px;
`