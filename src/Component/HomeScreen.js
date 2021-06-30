import React from 'react'
import styled from 'styled-components'
import HeaderComponent from "./HeaderComponent"
import BodyViewer from "../B/BodyViewer"
import Products from "../Sales/Product"
import BuildHome from '../Building/BuildHome'
import Build from '../Building/Build'
import CurvePart from '../Building/CurvePart'



const GameScreen = () => {
  return (
   <Container>
    <HeaderComponent />  
    <Build/>
   
 
   </Container>
  )
}

export default GameScreen

const Container = styled.main`
  width: 100vw;
  height: 100vh;
  position: relative;
  // min-height: calc(height - 70px)


&:before{
   content: "";
  background: url("/images/home-background.png") center center / cover fixed no-repeat  ;
  position:fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: -1;
}
`