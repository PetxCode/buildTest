import React from 'react'
import styled from 'styled-components'

const BodyViewer = () => {
  return (
   <Container>
     <Wrapper>
       <img src="/images/viewers-marvel.png" />
     </Wrapper>
     <Wrapper>
       <img src="/images/viewers-marvel.png" />
     </Wrapper>
     <Wrapper>
       <img src="/images/viewers-marvel.png" />

     </Wrapper>
     <Wrapper>
       <img src="/images/viewers-marvel.png" />
       <video  
          type="video/mp4"
          playsInline={true}
          autoPlay={true}
          loop={true}
          src="/videos/1564676115-marvel.mp4"
/>
     </Wrapper>
    
   </Container>
  )
}

export default BodyViewer

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  grid-gap: 20px;
  margin: 20px;
`
const Wrapper = styled.div`
border: 3px solid rgba(249,249,249, 0.4);
border-radius: 10px;
cursor: pointer;
transform: scale(1);
transition: all 350ms;
box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
rgb(0 0 0 / 73%) 0px 16px 10px -10px;
position: relative;
z-index: 1;

img{
  width: 100%;
  height: 100%;
  object-fit: cover;
}

video{
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -10;
  border-radius: 5px;
  opacity: 0;
}

&:hover{
  transform: scale(1.06);
  border-color: white;

  video{
    opacity: 1;
  }
}

`