import React from "react";
import Footer from "../Footer";
import Nav from "../Nav";
import { Products } from "../Products";
import NewsLetter from "../NewsLetters";
import styled from "styled-components";
const Filter = styled.div`
  font-size: 20px;
`;
const Sort = styled.div`
  font-size: 20px;
`;
const Container = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0px 20px;
`;
const Title = styled.h1`
  margin: 20px;
`;
const Select = styled.select`margin-left: 10px;
padding: 4px;
margin-right: 10px;
`;
const Option = styled.option``;

export const ProductList = () => {
  return (
    <div>
      <Nav />
      <Title>Sweaters</Title>
      <Container>
        <Filter>
          Filter By:
          <Select>
            <Option disabled selected>Color</Option>
            <Option>Red</Option>
            <Option>White</Option>
            <Option>Black</Option>
            <Option>Gold</Option>
          </Select>
          <Select>
            <Option disabled selected>Size</Option>
            <Option>S</Option>
            <Option>M</Option>
            <Option>L</Option>
            <Option>XL</Option>
          </Select>
        </Filter>
        <Sort>
          Sort By:
          <Select>
            <Option selected>Newest</Option>
            <Option>Highest Price</Option>
            <Option>Lowest Price</Option>
            <Option>Shirt</Option>
            <Option>Pants</Option>
            <Option>Shoes</Option>
          </Select>
        </Sort>
      </Container>
      <Products />
      <NewsLetter />
      <Footer />
    </div>
  );
};
