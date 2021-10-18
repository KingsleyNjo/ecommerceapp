import React from "react";
import styled from "styled-components";
import { mobile } from "../responsive";

const Container = styled.div`
  flex: 1;
  margin: 4px;
  height: 70vh;
  position: relative;
`;

//image height and width are 100% since height was declared above in the Container as 70vh
const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  ${mobile({ height: "20vh" })}

`;


//width:100%, height:100% which means basically it will contain all our container
const Info = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Title = styled.h1`
    color:white;
    margin-bottom: 20px;
`;

const Button = styled.button`
    border:none;
    padding: 10px;
    background-color: white;
    color:gray;
    cursor: pointer;
    font-weight: 600;
`;


//prop item is written here which is then passed a s a prop to Categories.jsx
const CategoryItem = ({ item }) => {
  return (
    <Container>
      <Image src={item.img} />
      <Info>
        <Title>{item.title}</Title>
        <Button>SHOP NOW</Button>
      </Info>
    </Container>
  );
};

export default CategoryItem;
