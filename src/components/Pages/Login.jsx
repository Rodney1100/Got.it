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
  background-color: #e9e9e92b;
`;
const Title = styled.h1`
  font-weight: 300;
  margin-top: 0px;
  padding-top: 0px;
`;
const Login = () => {
  return (
    <div>
      <Nav />
      <Wrapper>
        <Title> SIGN IN</Title>
      </Wrapper>
      <Footer />
    </div>
  );
};

export default Login;
