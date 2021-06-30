import React from 'react'
import styled from 'styled-components'

const MyProduct = ({q}) => {
  return (
   <Container
   src={q.image}
   />    
 
  )
}

export default MyProduct

const Container = styled.img``

const Product = styled.div`
  border: 2px solid rgba(249,249,249, 0.6);
  border-radius: 8px;
  cursor: pointer;
transform: scale(1);
transition: all 350ms;
box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
rgb(0 0 0 / 73%) 0px 16px 10px -10px;

  img{
    width:100%;
    height: 100%;
    object-fit: cover;
    border-radius: 7px;
  }

  &:hover{
    transform: scale(1.06);
    border: 2px solid white;
  }
`
