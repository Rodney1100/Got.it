import React from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Sales from "../Header";
import Slider from "../Slider";
import { Badge } from "@mui/material";
import { FaSearch } from "react-icons/fa";
import Categories from "../Categories";
import styled from "styled-components";

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
  font-size: 15px;
  cursor: pointer;
  margin-right: 15px;
  flex: flex-end;
`;
export default function Nav() {
  return (
    <div>
  
      {/* wrapper that contains everything for the menu */}
      <div className="container">
        <LeftNav>
          <input className="input" placeHolder="Search"></input>{" "}
          <FaSearch color="gray" />
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
      </div>    {/* the very top banner for sales and promotions */}
      <div className="promotions">
        <Sales />
      </div>
    </div>
  );
}
