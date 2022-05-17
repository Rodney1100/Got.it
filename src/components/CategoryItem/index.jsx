import React from "react";
import styled from "styled-components";

const Container = styled.div`
  flex: 1;
  margin: 5px;
  height: 60vh;
  position: relative;
`;
const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
const Info = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
const Title = styled.h1`
color: darkgreen;
margin: 20px;
font-family:bold;;
font-size:70px;`;
const Button = styled.button`
border:none;
padding:10px;
background-color:lightgray;
border-radius:5px;
cursor:pointer;

`;
export default function CategoryItem({ item }) {
  return (
    <Container>
      {/* <Image src={item.img} alt= "img" /> */}
      <Image src={item.img} />
      <Info>
        {/* <Title>{item.Title}</Title> */}
        <Title>{item.title}</Title>
        <Button>SHOP NOW</Button>
      </Info>
    </Container>
  );
}

// <Description>{item.description}</Description>
