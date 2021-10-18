import React from "react";
import styled from "styled-components";
import { categories } from "../data";
import { mobile } from "../responsive";
import CategoryItem from "./CategoryItem";

//display:flex so as to put it horizontally
const Container = styled.div`
  display: flex;
  padding: 20px;
  justify-content: space-between;
  ${mobile({ padding: "0px", flexDirection:"column" })}

`;

const Categories = () => {
  return (
    <Container>
      {categories.map((item) => (

        //the item={item} where item is a prop gotten from CategoryItem Component in CategoryItem.jsx
        <CategoryItem item={item} key={item.id} />
      ))}
    </Container>
  );
};

export default Categories;

