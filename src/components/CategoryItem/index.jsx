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
background-color: rgba(0, 0, 0, 0.57);
  color: #ffffff;
  margin: 20px;
  border-radius: 5px;
  font-family: bold;
  border: 5px solid black;
  font-size: 70px;
  `;
const Button = styled.button`
  border: none;
  padding: 10px;
  transition: all 0.9s ease;
  border-radius: 5px;
  cursor: pointer;
  background-color: #e0e0e0;
  border: 5px solid black;
  :hover {
    background-color: white;
    transform: scale(1.1);
    border: 1px solid black;
  }
`;
export default function CategoryItem({ item }) {
  return (
    <Container>
      <Image src={item.img} />
      <Info>
        <Title>{item.title}</Title>
        <Button>SHOP NOW</Button>
      </Info>
    </Container>
  );
}