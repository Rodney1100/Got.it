import React from "react";
import styled from "@emotion/styled";
import Nav from "../Nav";
import Footer from "../Footer";
import AddOutlined from "@mui/icons-material/AddOutlined";
import RemoveOutlined from "@mui/icons-material/RemoveOutlined";
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
  margin-bottom: 100px;
  padding: 30px;
`;
const TopButtom = styled.button`
  border: 1px solid darkgray;
  padding: 20px;
  background-color: #252424a6;
  border-radius: 5px;
  cursor: pointer;
  font-weight: 600;
  color: #ffffff;
  font-weight: bolder;
  &:hover {
    background-color: #c3c3c3;
    color: #000000;
  }
`;
const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Info = styled.div`
  flex: 3;
  /* background-color: rgba(255, 255, 255, 0.1); */
`;
const Hr = styled.hr`
  background-color: #eee;
  border: none;
  height: 5px;
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
const ProductAmount = styled.span`
  border-radius: 5px;
  border: 1px solid darkgray;
  padding: 5px 10px;
  font-size: large;
`;
const AmountDetail = styled.span`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  font-weight: 500;
`;

const Price = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const Image = styled.img`
  width: 250px;
`;
const ProductPrice = styled.span`
  font-size: 25px;
  font-weight: 300;
`;
const SummaryTitle = styled.H1`
  font-weight: bold;
  margin-bottom: 30px;
`;
const SummaryBody = styled.div``;
const SummaryItemPrice = styled.div``;
const SummaryItemText = styled.div``;
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
                <Image src="https://i.ibb.co/5Bv4Yfs/Screenshot-2022-05-22-220819-removebg-preview-min.png" />
                <Details>
                  <ProductName>
                    <b>ITEM: </b>Robotic Graphic T
                  </ProductName>
                  <ProductID>
                    <b>ID:</b>3388
                  </ProductID>
                  <ProductColor color="#232020" />
                  <ProductSize>
                    <b>SIZE:</b> L
                  </ProductSize>
                </Details>
              </ProductDetails>
              <Price>
                <AmountDetail>
                  <RemoveOutlined />
                  <ProductAmount>2</ProductAmount>
                  <AddOutlined />
                </AmountDetail>
                <ProductPrice>$ 120.00</ProductPrice>
              </Price>
              <Summary>
                <SummaryTitle>Running Shoes</SummaryTitle>
                <SummaryBody>
                  <SummaryItemText>SubTotal</SummaryItemText>
                  <SummaryItemPrice>$ 240.00</SummaryItemPrice>
                </SummaryBody>
              </Summary>
            </Product>

            <Hr />

            <Product>
              <ProductDetails>
                <Image src="https://i.ibb.co/TMNBJQB/512b4b870390fac58da5206e88d228d6-min.png" />
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
              <Price>
                <AmountDetail>
                  <RemoveOutlined />
                  <ProductAmount>2</ProductAmount>
                  <AddOutlined />
                </AmountDetail>
                <ProductPrice>$ 120.00</ProductPrice>
              </Price>
              <Summary>
                <SummaryTitle>ORDER SUMMARY</SummaryTitle>
                <SummaryBody>
                  <SummaryItemText>SubTotal</SummaryItemText>
                  <SummaryItemPrice>$ 240.00</SummaryItemPrice>
                </SummaryBody>
              </Summary>
            </Product>
          </Info>
        </Bottom>
      </Wrapper>
      {/* <Footer/> */}
    </Container>
  );
};

export default Cart;
