import React from "react";
import Footer from "../Footer";
import Nav from "../Nav";
import NewsLetter from "../NewsLetters";
import styled from "styled-components";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import RemoveOutlinedIcon from "@mui/icons-material/RemoveOutlined";
const Wrapper = styled.div`
  padding: 50px;
  display: flex;
  height:60vw;
  background-color: #e9e9e92b;
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
  font-weight: 300;
  margin-top: 0px;
  padding-top: 0px;
`;
const FilterContainer = styled.div`
  display: flex;
  margin: 30px 0px;
  justify-content: space-between;
  width: 50%;
`;
const FilterTitle = styled.span`
  font-weight: 350;
  font-size: 20px;
`;
const Filter = styled.div`
  display: flex;
  align-items: center;
`;
const FilterColor = styled.div`
  margin-left: 10px;
  height: 20px;
  width: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  cursor: pointer;
`;

const FilterSize = styled.select`
  margin-left: 10px;
  padding: 5px;
  cursor: pointer;
`;

const FilterSizeOp = styled.option``;

const Price = styled.h2`
  font-weight: 300;
`;
const Description = styled.p`
`;
const AddContainer = styled.div`
  display: flex;
  align-items:center;
  width: 50%;
justify-content: space-between;
`;
const AmountCount = styled.div`
align-items: center;
display: flex;
font-weight: 500;
`;
const Amount = styled.span`
border-radius: 5px;
border: 1.3px solid darkgray;
padding: 0px 10px;
margin:10px;
`;
const AddButton = styled.button`
border: 1.3px solid darkgray;
padding: 10px;
background-color: white;
border-radius: 5px;
cursor: pointer;
font-weight: 600;

&:hover{
  background-color: lightgray;
}
`;


const Product = () => {
  return (
    <div>
      <Nav />
      <Wrapper>
        <ImageContainer>
          <Image src="https://i.ibb.co/TMNBJQB/512b4b870390fac58da5206e88d228d6-min.png" />
        </ImageContainer>

        <InfoContainer>
          <Title>Plain T</Title>
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
              <FilterColor color="rgb(78, 247, 0)" />
              <FilterColor color="Gray" />
            </Filter>

            <Filter>
              <FilterTitle>Size</FilterTitle>
              <FilterSize>
                <FilterSizeOp disabled selected>
                  Size
                </FilterSizeOp>
                <FilterSizeOp>S</FilterSizeOp>
                <FilterSizeOp>M</FilterSizeOp>
                <FilterSizeOp>L</FilterSizeOp>
                <FilterSizeOp>XL</FilterSizeOp>
              </FilterSize>
            </Filter>
          </FilterContainer>
          <AddContainer>
            <AmountCount>
              <RemoveOutlinedIcon cursor="pointer" />
              <Amount>3</Amount>
              <AddOutlinedIcon cursor="pointer"/>
            </AmountCount>
            <AddButton>Add To Cart</AddButton>
          </AddContainer>
        </InfoContainer>
      </Wrapper>
      {/* <NewsLetter /> */}
      <Footer />
    </div>
  );
};

export default Product;
