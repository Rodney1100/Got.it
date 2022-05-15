// everything needed to import
import React, { useState } from "react";
import styled from "styled-components";
import { slidersItems } from "../../data";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

// holds the body for all the page of the hero images
const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  position: relative;
  overflow: hidden;
`;
// arrows for the changing of the images for the hero image
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
  z-index: 2;
`;
// wraps the image and the information that is next to it.
const Wrapper = styled.div`
  height: 100%;
  display: flex;
  transform: translateX(-0vw);
`;
// slider style start
const Slide = styled.div`
  width: 100vw;
  height: 100vw;
  display: flex;
  background-color: #${(props) => props.bg};
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
// slider style end

export default function Slider() {
  // const [slideIndex, setSlideIndex] = useState;
  const handleSlider = (direction) => {};
  return (
    <div>
      {/* everything on the page for the slider is called here */}
      <Container>
        {/* arrow keys to change the pictures */}
        <Arrow direction="left" onClick={() => handleSlider("left")}>
          <ArrowBackIosNewIcon />
        </Arrow>
        {/* the wrapper from above */}
        <Wrapper>
          {/* called from the array in data.js to display the images and info here*/}
          {slidersItems.map((item) => (
            <Slide bg="f5fafd">
              <ImgSlide>
                <Image src={item.img} />
              </ImgSlide>
              <InfoSlide>
                <Title>{item.title}</Title>
                <Description>{item.description}</Description>
                <Button>Buy Now</Button>
              </InfoSlide>
            </Slide>
          ))}
        </Wrapper>

          {/* arrow keys to change the pictures */}
        <Arrow direction="right" onClick={() => handleSlider("right")}>
          <ArrowForwardIosIcon />
        </Arrow>
      </Container>
    </div>
  );
}
