import React from "react";
import { Badge } from "@mui/material";
import { FaSearch } from "react-icons/fa";
import styled from "styled-components";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Sales from "../Header";
import Slider from "../Slider";
const LeftNav = styled.div`
  border: 0.5px solid lightgray;
  display: flex;
  align-items: center;
  padding: 4px;
  margin-left: 25px;
  border-radius: 50px;
`;
const Logo = styled.h1`
  font-weight: bold;
`;
const Center = styled.div`
  flex: 1;
  text-align: center;
`;
const Right = styled.div`
  display: flex;
`;
const MenuItems = styled.div`
font-size 15px;
cursor:pointer;
margin-right: 15px;
flex:flex-end;
`;

export default function Home() {
  return (
    <div>
      <div className="promotions">
        <Sales />
      </div>

      <div className="container">
        <LeftNav>
          <input placeHolder="Search"></input> <FaSearch color="gray" />
        </LeftNav>

        <Center>
          <Logo className="logo">GOT.It</Logo>
        </Center>

        <Right>
          <MenuItems> SIGN IN</MenuItems>
          <MenuItems> SIGN UP</MenuItems>
          <MenuItems>
            <Badge badgeContent={5} color="secondary">
              <ShoppingCartIcon />
            </Badge>
          </MenuItems>
        </Right>
      </div>
      <div>
        <Slider />
      </div>
    </div>
  );
}
