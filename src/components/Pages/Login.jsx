import React from "react";
import Footer from "../Footer";
import Nav from "../Nav";
import NewsLetter from "../NewsLetters";
import styled from "styled-components";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import RemoveOutlinedIcon from "@mui/icons-material/RemoveOutlined";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: linear-gradient(rgba(255, 255, 255, 0.80), rgba(0, 0, 0, 1)),
    url("https://i.ibb.co/Nnsy4N3/dom-hill-nim-El-Tc-TNy-Y-unsplash-min.jpg");
  background-size: cover;
  align-items: center;
  justify-content: center;
  display: flex;
`;

const Wrapper = styled.div`
  padding: 50px;
  display: flex;
  border-radius: 5px;
  width: 35%;
  background-color: rgba(233, 233, 233, 0.09);
  border: solid black 3px;
  justify-content: space-around;
`;
const Wrapper1 = styled.div``;


const Title = styled.h2`
  font-weight: 300;
  margin-top: 0px;
  padding-top: 0px;
  color: #000000;
  font-weight: 400;
  align-items: center;
  justify-content: center;
  display: flex;
  margin-right:84.074px ;
`;
const Form = styled.form`
  color: #000000;
`;
const Input = styled.input`
  font-weight: bolder;
  background-color: #ffffff84;
  border-radius: 5px;
  padding: 10px 0px;
  margin: 5px 0px;
  display: flex;
  flex-wrap: wrap;
  width: 100%;
`;
 
const Button = styled.button`
  opacity: 60%;
  width: 100%;
  padding: 8px;
  font-weight: 500;
  cursor: pointer;
  margin-top: 10px;
  &:hover {
    opacity: 100%;
  }
`;
const Logo = styled.h1`
  margin-bottom: 50px;
  margin-top: 0px;
`;

const Login = () => {
  return (
    <Container>
      <Wrapper>
        <Wrapper1>
          <Logo className="logo">GOT.It</Logo>
          <Title> SIGN IN </Title>
        </Wrapper1>
        <Form>
          <Input placeholder="Username" />
          <Input placeholder="Password" />
          <Button>SIGN IN</Button>
          <Button>FORGOT PASSWORD</Button>
          <Button>CREATE ACCOUNT</Button>
          <Button>KEEP BROWSING</Button>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Login;
