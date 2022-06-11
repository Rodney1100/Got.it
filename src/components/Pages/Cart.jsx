import React from "react";
import styled from "@emotion/styled";
import Nav from "../Nav";
import Footer from "../Footer";
const Container = styled.div``;
const Wrapper = styled.div`
  padding: 20px;
`;
const Title = styled.h1`
  font-weight: 400;
  text-align: center;
`;
const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
`;
const TopButtom = styled.button`
  padding: 10px;
  font-weight: 500;
  cursor: pointer;
  border-radius: 5px;
`;
const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Info = styled.div`
  flex: 3;
  /* background-color: rgba(255, 255, 255, 0.1); */
`;
const Summary = styled.div`
  /* background-color: rgba(0, 255, 255, 0.1); */
  flex: 1;
`;

const TopText = styled.span`
  cursor: pointer;
  border-bottom: solid 1px black;
  margin: 0px 10px;
`;
const TopTexts = styled.div``;
const Product = styled.div`
  display: flex;
  justify-content: space-between;
`;
const ProductDetails = styled.div`
  flex: 2;
  display: flex;
`;
const ProductID = styled.span``;
const Details = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
const ProductName = styled.span``;
const ProductColor = styled.div`
  width: 20px;
  height: 20px;
  background-color: ${(props) => props.color};
  border-radius: 50%;
`;
const ProductSize = styled.span``;
const Price = styled.div`
  flex: 1;
`;
const Image = styled.img`
  width: 250px;
`;

const Cart = () => {
  return (
    <Container>
      <Nav />
      <Wrapper>
        <Title>Your Products</Title>
        <Top>
          <TopButtom>CONTINUE SHOPPING</TopButtom>
          <TopTexts>
            <TopText>WISH LIST (2) </TopText>
            <TopText>CART (5)</TopText>
            <TopText></TopText>
          </TopTexts>
          <TopButtom className="checkoutBTN">CHECKOUT</TopButtom>
        </Top>
        <Bottom>
          <Info>
            <Product>
              <ProductDetails>
                <Image src="https://i.ibb.co/p1Q1mWs/512b4b870390fac58da5206e88d228d6.png" />
                <Details>
                  <ProductName>
                    <b>ITEM: </b>Nike Running Shoes
                  </ProductName>
                  <ProductID>
                    <b>ID:</b>3588
                  </ProductID>
                  <ProductColor color="#c8ff00" />
                  <ProductSize>
                    <b>SIZE:</b> 11 M
                  </ProductSize>
                </Details>
              </ProductDetails>
              <Price>pro Price</Price>
            </Product>
          </Info>
          <Summary>Summary</Summary>
        </Bottom>
      </Wrapper>
      <Footer></Footer>
    </Container>
  );
};

export default Cart;
