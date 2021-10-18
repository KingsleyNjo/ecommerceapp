import { Badge } from "@material-ui/core";
import { Search, ShoppingCartOutlined } from "@material-ui/icons";
import React from "react";
import styled from "styled-components";
import { mobile } from "../responsive";
import { Link } from "react-router-dom";

const Container = styled.div`
  height: 60px;
  ${mobile({ height: "50px"})}
`;

//display flex in this Wrapper is use to make the Left,Center,Right to display horizontally and not vertically
//justify-content:space-between is use to separate the Left,Right and Center contents, Left is at lweft, Right is at right and Center at center of the webpage

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;  
  align-items: center;
  justify-content: space-between;
  ${mobile({ padding: "10px 0px"})}
`;

//flex:1 is used here so that no matter the content of Left is will take a specific space and not disrupt Right and Center contents on the webpage
const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
  ${mobile({ display: "none" })}
`;

const SearchContainer = styled.div`
  border: 0.5px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
`;

const Input = styled.input`
  border: none;
  ${mobile({ width: "50px" })}
`;

//flex:1 is used here so that no matter the content of Center is will take a specific space and not disrupt Right and Left contents on the webpage
const Center = styled.div`
  flex: 1;
  text-align: center;
`;

const Logo = styled.h1`
  font-weight: bold;
  font-size:20px;
  ${mobile({ fontSize: "24px" })}
`;

//flex:1 is used here so that no matter the content of Right is will take a specific space and not disrupt Left and Center contents on the webpage
//Ww then introduced display:flex, align-items and justify-content so as to make the desired design we want

const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ${mobile({ flex: 2, justifyContent: "center"})}
`;

const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
  ${mobile({ fontSize: "12px", marginLeft: "10px"})}
`;

const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>NG</Language>
          <SearchContainer>
            <Input placeholder="Search" />
            {/* this Search is a material-ui icon */}
            <Search style={{ color: "gray", fontSize: 16 }} />
          </SearchContainer>
        </Left>
        <Center>
          <Logo>KINGSLEY STORES</Logo>
        </Center>
        <Right>
          <Link to="/register"><MenuItem>REGISTER</MenuItem></Link>
          <Link to="/login"><MenuItem>SIGN IN</MenuItem></Link>
          <Link to="/cart">
            <MenuItem>
              {/* using the Badge core component from material-ui, WE CAN WRITE ANY NUMBER IN IT AND WE WRITE (4) */}
              <Badge badgeContent={4} color="primary">
                {/* in here we use the ShoppingCart ICON FROM MATERIAL-UI */}
                <ShoppingCartOutlined />
              </Badge>
            </MenuItem>
          </Link>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;

