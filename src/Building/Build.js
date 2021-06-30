import React, {useRef, useEffect, useState} from 'react'
import styled from 'styled-components'
import TheButton from "./Button"

const Build = () => {
  const ref = useRef()
  const ref1 = useRef()
  const ref2 = useRef()

  const textColor = [
    "#e21b18", "white", "linear-gradient(180deg, #090979, #00d4ff)"
  ]

  const textColor2 = [
    "white", "#6AC1D5", "white"
  ]

  const textColor3 = [
    "white", "white", "#FE9900", 
  ]

const [counter, setCounter] = useState(0)

const showMarker = counter % 3

useEffect(()=>{
  setInterval(()=>{
    setCounter(el => el + 1)
  }, 3000)
},[])

useEffect(()=>{
  ref.current.style.color = textColor[showMarker]
  ref.current.style.transition = "all 450ms"
  ref1.current.style.color = textColor2[showMarker]
  ref1.current.style.transition = "all 450ms"
  ref2.current.style.color = textColor3[showMarker]
  ref2.current.style.transition = "all 450ms"
}, [counter])


  return (
    <Container>
      
      <Wraper> 
        
        <Text ref={ref} >Develop.</Text>
        <Text1 ref={ref1} >Preview.</Text1>
        <Text2 ref={ref2} >Ship.</Text2>
      </Wraper>
      <TheButton/>
    </Container>
  )
}

export default Build

const Container = styled.div`
  width: 100%;
  height: 50rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

`
const Wraper = styled.div`
width: 100%;
height: 70%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

`
const Text = styled.div`
font-size: 110px;
font-weight: bold;
margin-bottom:0;
`
const Text1 = styled.div`
font-size: 110px;
font-weight: bold;
padding-top:0;
margin-bottom:0;
`
const Text2 = styled.div`
font-size: 110px;
font-weight: bold;
`



