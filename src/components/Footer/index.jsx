import React from "react";
import styled from "styled-components";
import { FaFacebook, FaGithub, FaLinkedinIn } from "react-icons/fa";
const Container = styled.div`
  display: flex;
  background-color: #c19c6b49;
`;
const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;
const Center = styled.div`
  flex: 1;
`;
const Right = styled.div`
  flex: 1;
`;
const Logo = styled.h1`
  font-weight: bold;
`;
const SocialMedia = styled.div`
  display: flex;
`;
const SocialMediaIcon = styled.div`
  margin: 2px;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: #ffffff;
  background-color: #${(props) => props.color};
  justify-content: center;
  align-items: center;
  display: flex;
  font-size: 25px;
`;
const Desc = styled.div`
  margin: 20px 0px;
`;

export const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo className="logo">GOT.It</Logo>
        <Desc>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptates,
          amet error eum culpa dolore dolorem cum esse! Nulla saepe quia quo
          obcaecati ut itaque architecto hic provident, quas facilis officiis
          porro alias magni rerum praesentium modi laboriosam odit, vero, neque
          vitae aspernatur iste cupiditate labore! Veritatis esse eligendi iusto
          repellat dicta explicabo, rerum cumque, alias excepturi, nam accusamus
          odio!
        </Desc>
        <SocialMedia>
          <SocialMediaIcon color="E60023">
            <FaLinkedinIn />
          </SocialMediaIcon>
          <SocialMediaIcon color="000000">
            <FaGithub />
          </SocialMediaIcon>
          <SocialMediaIcon color="3B5999">
            <FaFacebook />
          </SocialMediaIcon>
        </SocialMedia>
      </Left>
      <Center></Center>
      <Right></Right>
    </Container>
  );
};
