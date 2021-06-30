import React, {useEffect, useState, useRef} from 'react'
import styled from 'styled-components'

const BuildHome = () => {
  const textColor = useRef();
  const [counter, setCounter] = useState(1)

  const myColor = [
    "#e21b18", "#6AC1D5", "#FE9900", "#FAD500"
  ]
  // "#FE9900", "#6AC1D5", "#FFB901", "#E21B18"
  const show = myColor.length % 3
  const showCounter = counter % 4;
  const counterCount = () => {
    if(counter > 3){
      setCounter(1 )
    }
  }

  useEffect(() => {
    setInterval(() => {    
        setCounter(el => el + 1)      
    }, 2000) 
  }, [])
 
  useEffect(()=>{
     textColor.current.style.color = myColor[showCounter ]
    // chngBckColr.current.style.backgroundColor = myColor[Math.floor(Math.random()*myColor.length)]
  }, [counter])

  return (
    <Container>
      
      <Wrap>
        <Text ref={textColor} 
        
        >Build.</Text>
        <Text1>Develop.</Text1>
        <Text2>Preview.</Text2>
        <Text3>Ship.</Text3>
      </Wrap>
    </Container>
  )
}

export default BuildHome

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 30rem;
`
const Wrap = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center
`

const Text1 = styled.div`
  font-size: 100px;
  font-weight: bold;
`
const Text2 = styled.div`

font-size: 100px;
font-weight: bold;`

const Text3 = styled.div`
font-size: 100px;
font-weight: bold;`

const Text = styled.div`
font-size: 100px;
font-weight: bold;`

