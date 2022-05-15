import React from "react";
import styled from "styled-components";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  position: relative;
  overflow:hidden;
`;
const Arrow = styled.div`
  width: 50px;
  height: 50px;
  background-color: rgb(230, 230, 230);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  bottom: 0;
  left: ${(props) => props.direction === "left" && "10px"};
  right: ${(props) => props.direction === "right" && "10px"};
  margin: auto;
  cursor: pointer;
  opacity: 0.35;
  `;
  const Wrapper = styled.div`
  height: 100%;
  display:flex;
  `;
  const Slide = styled.div`
  display: flex;
  width: 100vw;
  height: 100vw;
  `;
  const InfoSlide = styled.div`
  padding: 50px;
  flex: 1;
  `;
  const Image = styled.img`
  height: 50%;
  `;
  const ImgSlide = styled.div`
  height: 100vw;
  flex: 1;
  `;
  const Title = styled.h1`
  font-size: 70px;
  letter-spacing: 2px;
  `;
  const Button = styled.button`
  padding: 10px;
  font-weight: bold;
  border-radius: 15px;
  cursor: pointer;
`;
const Description = styled.p`
  margin: 50px 0px;
  font-size: 20px;
  font-weight: 500;
  letter-spacing: 2px;
`;
export default function Slider() {
  return (
    <div>
      <Container>
        <Arrow direction="left">
          <ArrowBackIosNewIcon />
        </Arrow>

        <Wrapper>
          <Slide>
            <ImgSlide>
              <Image src="https://i.ibb.co/XsdmR2c/1.png" />
            </ImgSlide>
            <InfoSlide>
              <Title>SPRING SALE</Title>
              <Description>All The Best From Spring At 50% off</Description>
              <Button>Buy Now</Button>
            </InfoSlide>
          </Slide>
          <Slide>
            <ImgSlide>
              <Image src="https://i.ibb.co/XsdmR2c/1.png" />
            </ImgSlide>
            <InfoSlide>
              <Title>SUMMER IS HERE</Title>
              <Description>GET ALL THE SUMMER TOYS AND GADGETS!</Description>
              <Button>Buy Now</Button>
            </InfoSlide>
          </Slide>
          <Slide>
            <ImgSlide>
              <Image src="https://i.ibb.co/XsdmR2c/1.png" />
            </ImgSlide>
            <InfoSlide>
              <Title>WINTER SALE</Title>
              <Description>All The Best From Winter Gears At 50% off</Description>
              <Button>Buy Now</Button>
            </InfoSlide>
          </Slide>
        </Wrapper>

        <Arrow direction="right">
          <ArrowForwardIosIcon />
        </Arrow>
      </Container>
    </div>
  );
}
