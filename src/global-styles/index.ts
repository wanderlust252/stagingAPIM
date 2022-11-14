import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  *,
*:before,
*:after {
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  outline: 0;
  margin: 0;
  &:not([class*='padding-']) {
    padding: 0;
  }
}
p {
  margin: 0 ;
  padding: 0;
}

html {
  /* overflow-y: auto;
  overflow-x: hidden;
  font-size: 68%;
  scroll-behavior: smooth;
  @media screen and (min-width: 480px) {
    font-size: 65%;
  }
  @media screen and (min-width: 768px) {
    font-size: 62.5%;
  } */
}
`;

export * from './color';
