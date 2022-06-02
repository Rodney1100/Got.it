import React from "react";
import Footer from "../Footer";
import Nav from "../Nav";
import { Products } from "../Products";
import NewsLetter from "../NewsLetters";
import styled from "styled-components";

const Wrapper = styled.div`
  padding: 50px;
  display: flex;
  background-color: #f5f5f5ac;
`;
const ImageContainer = styled.div`
  flex: 1;
  font-size: 20px;
  margin-right: 10px;
`;
const Image = styled.img`
  width: 100%;
`;
const InfoContainer = styled.div`
  font-size: 20px;
  padding: 0px 50px;
  flex: 1;
`;
const Title = styled.h1`
  font-weight: 400;
`;
const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 50%;
`;
const FilterTitle = styled.span`
  font-weight: 400;
`;
const Filter = styled.div``;
const FilterColor = styled.div`
  margin-left: 20px;
`;

const FilterSize = styled.select`  margin-left: 20px;
padding: 5px;`;

const FilterSizeOp = styled.option`
`;

const Price = styled.h2`
  font-weight: 400;
`;
const Description = styled.p`
  margin: 20px 0px;
`;

const Product = () => {
  return (
    <div>
      <Nav />
      <Wrapper>
        <ImageContainer>
          <Image src="https://i.ibb.co/52hV0fN/pexels-artem-podrez-6786611.jpg" />
        </ImageContainer>

        <InfoContainer>
          <Title>Title</Title>
          <Description>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
            molestiae aperiam corporis consectetur minima vitae fuga laborum
            velit maiores illo!
          </Description>
          <Price>$15</Price>
          <FilterContainer>
            <Filter>
              <FilterTitle>Color</FilterTitle>
              <FilterColor color="Black" />
              <FilterColor color="Green" />
              <FilterColor color="White" />
            </Filter>

            <Filter>
              <FilterTitle>Size</FilterTitle>
              <FilterSize>
                <FilterSizeOp disabled selected >Size</FilterSizeOp>
                <FilterSizeOp>S</FilterSizeOp>
                <FilterSizeOp>M</FilterSizeOp>
                <FilterSizeOp>L</FilterSizeOp>
                <FilterSizeOp>XL</FilterSizeOp>
              </FilterSize>
            </Filter>
          </FilterContainer>
        </InfoContainer>
      </Wrapper>
      <NewsLetter />
      <Footer />
    </div>
  );
};

export default Product;
