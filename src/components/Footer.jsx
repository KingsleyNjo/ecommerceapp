import React from "react";
import { Facebook, Instagram, MailOutline, Phone, Pinterest, Room, Twitter, } from "@material-ui/icons";
import styled from "styled-components";
import { mobile } from "../responsive";

const Container = styled.div`
    display: flex;
    ${mobile({ flexDirection: "column" })}
  `;

const Left = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 20px;
  `;

const Logo = styled.h1``;

const Desc = styled.p`
    margin: 20px 0px;
  `;

const SocialContainer = styled.div`
    display: flex;
  `;

//props is taken from color written and used i background-color here.(props.color)
const SocialIcon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    color: white;
    background-color: #${(props) => props.color};
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 20px;
  `;

const Center = styled.div`
    flex: 1;
    padding: 20px;
    ${mobile({ display: "none" })}
  `;

const Title = styled.h3`
    margin-bottom: 30px;
  `;

const List = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
  `;

const ListItem = styled.li`
    width: 50%;
    margin-bottom: 10px;
  `;

const Right = styled.div`
    flex: 1;
    padding: 20px;
    ${mobile({ backgroundColor: "#fff8f8" })}
  
  `;

const ContactItem = styled.div`
    margin-bottom: 20px;
    display: flex;
    align-items: center;
  `;

const Payment = styled.img`
      width: 50%;
  `;

const Footer = () => {
    return (
        <Container>
            <Left>
                <Logo>KINGSLEY STORES</Logo>
                <Desc>
                    Patronise our store today and get the best experience and advice about fashion and trending wear
                </Desc>
                <SocialContainer>
                    {/* color is wrtitten as a prop here which is used in background-color property above */}
                    <SocialIcon color="3B5999">
                        <Facebook />
                    </SocialIcon>
                    {/* color is wrtitten as a prop here which is used in background-color property above */}
                    <SocialIcon color="E4405F">
                        <Instagram />
                    </SocialIcon>
                    {/* color is wrtitten as a prop here which is used in background-color property above */}
                    <SocialIcon color="55ACEE">
                        <Twitter />
                    </SocialIcon>
                    {/* color is wrtitten as a prop here which is used in background-color property above */}
                    <SocialIcon color="E60023">
                        <Pinterest />
                    </SocialIcon>
                </SocialContainer>
            </Left>
            <Center>
                <Title>Useful Links</Title>
                <List>
                    <ListItem>Home</ListItem>
                    <ListItem>Cart</ListItem>
                    <ListItem>Man Fashion</ListItem>
                    <ListItem>Woman Fashion</ListItem>
                    <ListItem>Accessories</ListItem>
                    <ListItem>My Account</ListItem>
                    <ListItem>Order Tracking</ListItem>
                    <ListItem>Wishlist</ListItem>
                    <ListItem>Wishlist</ListItem>
                    <ListItem>Terms</ListItem>
                </List>
            </Center>
            <Right>
                <Title>Contact</Title>
                <ContactItem>
                    {/* using inline style to separate the icon from the words */}
                    <Room style={{ marginRight: "10px" }} /> 20, Ikeja Street, Lekki Lagos Nigeria
                </ContactItem>
                <ContactItem>
                    <Phone style={{ marginRight: "10px" }} /> +234 9045673245
                </ContactItem>
                <ContactItem>
                    <MailOutline style={{ marginRight: "10px" }} /> kingsley@gmail.com
                </ContactItem>
                <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
            </Right>
        </Container>
    );
};

export default Footer;
