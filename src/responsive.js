//using styled components css
import { css } from "styled-components";


//using a props, so it will return css styled components css so that we can use media queries
export const mobile = (props) => {
  return css`
    @media only screen and (max-width: 380px) {
      ${props}
    }
  `;
};

/*
export const tablet = (props) => {
  return css`
    @media only screen and (max-width: 900px) {
      ${props}
    }
  `;
};

*/

/*
export const ipad = (props) => {
  return css`
    @media only screen and (max-width: 1080px) {
      ${props}
    }
  `;
};

*/
