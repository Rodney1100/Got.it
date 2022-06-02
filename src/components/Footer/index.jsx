import React from "react";
import MarkunreadIcon from '@mui/icons-material/Markunread';
import styled from "styled-components";
import {
  FaFacebook,
  FaGithub,
  FaLinkedinIn,
  FaMapMarker,
  FaPhoneAlt,
  FaCcAmex,
  FaCcVisa,
  FaCcMastercard,
} from "react-icons/fa";

const Container = styled.div`
  display: flex;
  background-color: #5e350048;
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

const Logo = styled.h1``;

const Center = styled.div`
  flex: 1;
  padding: 20px;
`;

const Right = styled.div`
  flex: 1;
  padding: 20px;
`;

const SocialMedia = styled.div`
  display: flex;
`;

const ListItem = styled.li`
  width: 50%;
  margin-bottom: 10px;
`;

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;

const Title = styled.h3`
  margin-bottom: 20px;
`;

const SocialMediaIcon = styled.div`
  margin: 2px;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  color: #ffffff;
  background-color: #${(props) => props.color};
  justify-content: center;
  align-items: center;
  display: flex;
  font-size: 20px;
`;

const Desc = styled.p`
  margin: 20px 0px;
`;

const ContactInfo = styled.div``;
const ContactList = styled.div`
  margin-bottom: 20px;
  font-size: medium;
`;
const ContactList1 = styled.div`
  font-size: medium;
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`;

export const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo className="logo">GOT.It</Logo>
        <Desc>
          This is NOT a Real website; it is a Demo E-commerce website created by
          Rodney Plancher. You can use the Demo card to check out the Purchase
          on this Project.
        </Desc>
        <SocialMedia>
          <SocialMediaIcon color="3B5999">
            <FaFacebook />
          </SocialMediaIcon>
          <SocialMediaIcon color="E60023">
            <FaLinkedinIn />
          </SocialMediaIcon>
          <SocialMediaIcon color="000000">
            <FaGithub />
          </SocialMediaIcon>
        </SocialMedia>
      </Left>
      <Center>
        <Title>Usefull Links</Title>
        <List>
          <ListItem> Men's Fashion </ListItem>
          <ListItem> Women's Fashion </ListItem>
          <ListItem> Order Tracking </ListItem>
          <ListItem> Home </ListItem>
          <ListItem> Wishlist </ListItem>
          <ListItem> Cart </ListItem>
          <ListItem> My Account </ListItem>
          <ListItem>Terms</ListItem>
        </List>
      </Center>
      <Right>
        <ContactInfo>
          <Title>Contact</Title>
          <ContactList>
            <FaMapMarker style={{ marginRight: "10px" }} />
            2040 Delmar Ave, Vero Beach, FL 32960
          </ContactList>
          <ContactList>
            <FaPhoneAlt style={{ marginRight: "10px" }} />
            555-555-5555
          </ContactList>
          <ContactList1>
              <MarkunreadIcon style={{ marginRight: "10px", fontSize:"larger"}} />
              Rodney.plancher@yahoo.com
          </ContactList1>
          <ContactList1>
              <FaCcAmex  style={{ marginRight: "10px", fontSize:"larger"}} />
              <FaCcVisa style={{ marginRight: "10px", fontSize:"larger"}} />
            <FaCcMastercard style={{ marginRight: "10px", fontSize: "larger" }} />
            We accept all Major Credit cards 
          </ContactList1>
   
        </ContactInfo>
      </Right>
    </Container>
  );
};
export default Footer;