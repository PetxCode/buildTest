import axios from 'axios'
import React, {useEffect, useState} from 'react'
import { connect, useDispatch } from 'react-redux'
import styled from "styled-components"
import { laodAllProduct } from './Redux/actionState'
import MyProduct from './Redux/MyProduct'

const Products = ({data}) => {
const dispatcher = useDispatch()

const getData = async() => {
  const res = await axios("https://fakestoreapi.com/products")
  console.log(res.data)
  if(res){
    dispatcher(laodAllProduct(res.data))
  }
}
console.log("This is the Data: ", data)
useEffect(()=>{
  getData()
}, [])
  return (
    <Container>    
     <Product>
          {/* <MyProduct q={data} /> */}
          <img src={data.image} />
      </Product>   
    
    </Container>
  )
}

const mapToState = state => {
  return {
    data : state.reducer.prod
  }
}

export default connect(mapToState) (Products)



const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(5, minmax(0, 1fr));
  grid-gap: 20px;
  margin: 20px;
`
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
