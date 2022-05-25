import React from "react";
import styled from "styled-components";
import { FaTelegramPlane } from "react-icons/fa";
const Container = styled.div`
  height: 60vh;
  color: #515151;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Title = styled.div`
  margin: 3px;
  font-size: 25px;
  font-weight: bold;
  `;
const Description = styled.div`
  margin: 3px;
  font-weight: bold;
  font-size: 17px;
  `;
const Button = styled.button`
  flex: 1;
  font-size: 30px;
  background-color: #a5e4e1;

`;
const Input = styled.input`
  flex: 8;
  padding-left: 20px;
`;

const InputContainer = styled.div`
  margin: 3px;
  width: 31%;
  height: 40px;
  font-size: 20px;
  background-color: #4798b313;
  display: flex;
  justify-content: space-between;
  padding: 4px;
`;

export const NewsLetter = () => {
  return (
    <Container>
      <Title>What's Next?</Title>
      <Description>
        Please enter your email to find out with our Newsletter
      </Description>
      <InputContainer>
        <Input placeholder="Email Here"/>
        <Button>
          <FaTelegramPlane color="gray" />
        </Button>
      </InputContainer>
    </Container>
  );
};
