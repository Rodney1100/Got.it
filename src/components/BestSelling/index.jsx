import React from "react";
import styled from "styled-components";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
const Info = styled.div`
  opacity: 0;
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  align-items: center;
  justify-content: center;
  display: flex;
  background-color: #eaeaea87;
  transition: all 01.5s ease;
`;
const Container = styled.div`
  flex: 1;
  margin: 5px;
  min-width: 250px;
  max-width: 2500px;
  height: 350px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  background-color: #f5fbfd50;
  &:hover ${Info} {
    opacity: 1;
  }
`;


const Image = styled.img`
  height: 85%;
  border-radius: 10%;
`;

const Icon = styled.div`
  width: 40px;
  height: 40px;
  margin: 5px;
  align-items: center;
  display: flex;
  justify-content: center;
  position: relative;
  border-radius: 50%;
  font-weight: bolder;
  background-color: #929292;
  cursor: pointer;
  :hover{
    background-color: white;
    transform: scale(1.1);
  }
`;

export const Bestselling = ({ item }) => {
  return (
    <Container>
      <Image src={item.img} key={item.id} />
      <Info>
        <Icon>
          <AddShoppingCartIcon />
        </Icon>
        <Icon>
          <FavoriteBorderIcon />
        </Icon>
        <Icon>
          <SearchOutlinedIcon />
        </Icon>
      </Info>
    </Container>
  );
};
