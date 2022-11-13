import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root {
    --color-yellow: #efc900;
    --color-red: #cd3333;
    --color-gray: #d3d3d3;
    --color-blue: #0000FF;
  } 
  
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
  }

  ul, ol {
    list-style: none;
  }
`;
