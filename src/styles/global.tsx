import styled, {createGlobalStyle} from "styled-components";
import roboto1 from '/fonts/Roboto-Regular.ttf'
import roboto2 from '/fonts/Roboto-Regular.woff'
import roboto3 from '/fonts/Roboto-Regular.woff2'
import robotoM1 from '/fonts/Roboto-Medium.ttf'
import robotoM2 from '/fonts/Roboto-Medium.woff'
import robotoM3 from '/fonts/Roboto-Medium.woff2'

const GlobalStyle = createGlobalStyle`

  @font-face {
    font-family: "Roboto";
    src: url(${roboto1}) format('woff2');
  url(${roboto2}) format('woff');
  url(${roboto3}) format('truetype');
    font-weight: 400
  }

  @font-face {
    font-family: "Roboto-Medium";
    src: url(${robotoM1}) format('woff2');
  url(${robotoM2}) format('woff');
  url(${robotoM3}) format('truetype');
    font-weight: 500
  }

  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body {
    //colors
    --black: #030303;
    --green: #53B175;
    --light-green: #6FAE79;
    --grey: #7C7C7C;
    --white: #FFFFFF;

    //typo
    font-family: 'Roboto', sans-serif;
    color: var(--black);
    font-size: 18px;
    line-height: 21px;
    font-weight: 500;

    background-color: #FCFCFC;
  }

  h3 {
    font-size: 26px;
    line-height: 42px;
  }
`

export const Heading = styled.h3`
  text-align: center;
  margin: 0 auto 30px;
`

export default GlobalStyle;


