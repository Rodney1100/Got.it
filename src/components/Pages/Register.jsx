import React from "react";
import Footer from "../Footer";
import styled from "styled-components";
const Wrapper = styled.div`
  padding: 50px;
  display: flex;
  border-radius: 5px;
  width: 30%;
  background-color: rgba(233, 233, 233, 0.005);
  border: solid black 3px;
  justify-content: space-around;
`;

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: linear-gradient(#ffffff, #310000ce),
    url("https://i.ibb.co/ScsRWCw/pexels-wesley-carvalho-3622614.jpg");
  background-size: cover;
  align-items: center;
  justify-content: center;
  display: flex;
`;

const Title = styled.h1`
  font-weight: 300;
  margin-top: 0px;
  padding-top: 0px;
  color: #000000;
  font-weight: bolder;
  align-items: center;
  justify-content: center;
  display: flex;
  margin-right: 50px;
`;
const Form = styled.form`
  color: #000000;
  
`;
const Input = styled.input`
  font-weight: bolder;
  background-color: #ffffff84;
  border-radius: 5px;
  margin: 5px 0PX;
   display: flex;
  flex-wrap: wrap; 
  width: 98%;

`;
const Agreement = styled.span``;
const Button = styled.button`
  opacity: 70%;
  width: 100%;
  padding: 8px;
  font-weight: 500;
  margin-top: 10px;
  &:hover {
    opacity: 100%;
  }
`;

const Register = () => {
  return (
    <div>
      <Container>
        <Wrapper>
          <Title>CREATE AN ACCOUNT</Title>
          <Form>
            <Input placeholder="First Name" />
            <Input placeholder="Last Name" />
            <Input placeholder="Email" />
            <Input placeholder="Username" />
            <Input placeholder="Password" />
            <Input placeholder="verify Password" />
            <Agreement>
              By creating an account, I consent to my personal data being used
              in accordance with the <b>PRIVACY POLICY</b>
            </Agreement>
            <Button>CREATE ACCOUNT</Button>
          </Form>
        </Wrapper>
      </Container>
      <Footer />
    </div>
  );
};

export default Register;
