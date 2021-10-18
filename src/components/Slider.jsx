import { ArrowLeftOutlined, ArrowRightOutlined } from "@material-ui/icons";
import React, { useState } from "react";
import styled from "styled-components";
import { sliderItems } from "../data";
import { mobile } from "../responsive";
import {Link} from 'react-router-dom';

//overflow:hidden to prevent page from overflowing so we can easily slide through the Wrapper Component when we click on the Arrow without it overflowing on our webpage
//remember this Container Component is a parent component so we use position:relative, so as to use position:absolute

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  position: relative;
  overflow: hidden;
  ${mobile({ display: "none" })}
`;

//the margin:auto written here is writrten with top:0 and bottom:0 so as to center the Arrow Component vertically
//z-index:2 to make our arrow icons show well
const Arrow = styled.div`
  width: 50px;
  height: 50px;
  background-color: #ffabab;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  bottom: 0;
  left: ${(props) => props.direction === "left" && "10px"};
  right: ${(props) => props.direction === "right" && "10px"};
  margin: auto;
  cursor: pointer;
  opacity: 0.5;
  z-index: 2;
`;

//out wrapper here will include our images and when we click the left and right Arrow icons, then the wrapper will move either to left or right so height:100%
//display:flex is written here so as to slide through our images and Infomation of different sales in Slide Component
//the transform property here is use to click on the arrow left and right icon and we pass in a prop which is slideIndex * -100 ( where  -100 indicate the slider and how we can easily allow the slide functionality to work)
//transition is introduced so as to allow for animation when we slide the arrow icons
const Wrapper = styled.div`
  height: 100%;
  display: flex;
  transition: all 1.5s ease;
  transform: translateX(${(props) => props.slideIndex * -100}vw);
`;

//in here we use width:100vw and height:100vh because it is parent
//using our background-color props we declared in Slide Component below.
const Slide = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  background-color: #${(props) => props.bg};
`;


//flex:1 here in ImgContainer same as in InfoContainer because theyll be same size
//height:100% here because the parent Slide above is width:100vw and height:100vh
const ImgContainer = styled.div`
  height: 100%;
  flex: 1;
`;

//for this i say height:80% because remember the parent Slide component is height:100vh
const Image = styled.img`
  height: 80%;
`;

//flex:1 here in InfoContainer same as in ImgContainer because theyll be same size
const InfoContainer = styled.div`
  flex: 1;
  padding: 50px;
`;

const Title = styled.h1`
  font-size: 70px;
`;

const Desc = styled.p`
  margin: 50px 0px;
  font-size: 20px;
  font-weight: 500;
  letter-spacing: 3px;
`;

const Button = styled.button`
  padding: 10px;
  font-size: 20px;
  background-color: transparent;
  cursor: pointer;
`;

const Slider = () => {
    const [slideIndex, setSlideIndex] = useState(0);
    const handleClick = (direction) => {
        if (direction === "left") {
            //if slideIndex is greater than 0,  then slideIndex-1, if it is not >0 then slideIndex is at position 2 in the array(that means we should go to the last item), when we click left.
            setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
        } else {
            //for rightside, if slideIndex is smaller than 2, then it means we can click on the right arrow(so we can increase our slide index), if its not then return our first slide which is 0 in the array

            setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
        }
    };

    return (
        <Container>
            {/* the direction="left" is a prop where the are used in Arrow styling above*/}
            <Arrow direction="left" onClick={() => handleClick("left")}>
                <ArrowLeftOutlined />
            </Arrow>
            {/* the Wrapper is written here */}
            {/* in out Wrapper here we pass the {slideIndex}, so we can use it in styling in transform property above */}
            <Wrapper slideIndex={slideIndex}>
                {sliderItems.map((item) => (
                    //Slide here has our image with title,description and Button
                    //the bg here is for background-color of this Slide component, so to use this bakf=ground props we go to styled component styling and take our props
                    <Slide bg={item.bg} key={item.id}>
                        <ImgContainer>
                            <Image src={item.img} />
                        </ImgContainer>
                        <InfoContainer>
                            <Title>{item.title}</Title>
                            <Desc>{item.desc}</Desc>
                            <Link to="/products"><Button>SHOW NOW</Button></Link>
                        </InfoContainer>
                    </Slide>
                ))}
            </Wrapper>
            {/* the direction="right" is a prop where the are used in Arrow styling above */}
            <Arrow direction="right" onClick={() => handleClick("right")}>
                <ArrowRightOutlined />
            </Arrow>
        </Container>
    );
};

export default Slider;
