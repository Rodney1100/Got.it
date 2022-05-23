import React from "react";
import styled from "styled-components";
import { bestSellers } from "../../data";
import { Bestselling } from "../BestSelling";

const Container = styled.div`
display :flex;
flex-wrap: wrap;
padding:20px

`;
export const Products = () => {
  return (
    <Container>
      {bestSellers.map((item) => (
        <Bestselling item={item} />
      ))}
    </Container>
  );
};
