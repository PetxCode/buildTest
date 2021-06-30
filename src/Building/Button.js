import React from 'react'
import styled from 'styled-components'

const TheButton = () => {
  return (
    <div>
      <Container >
        <Wrapper >The Button</Wrapper>
      </Container>
    </div>
  )
}

export default TheButton

const Container = styled.div`
display: flex;
justify-content: center;
align-items: center;
font-size: 15 px;
text-transform: uppercase;
font-weight: bold;

  height: 40px;
  width: 150px;
  
    background-color:  ${({bgc1})=> bgc1 ? "black" : "white" };
    color: white; 
    border-radius: 3px;
    border: 1px solid white;
  

  &:hover{
    cursor: pointer;
    background-color: ${({bgc})=> bgc ? "white" : "black" }
    color: ${({c})=> c ? "black" : "white" };
    border-color: ${({bc})=> bc ? "black" : "white" }
`
const Wrapper = styled.div`
  
`