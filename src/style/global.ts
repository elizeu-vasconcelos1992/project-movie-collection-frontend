import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root {
    --color-yellow: #efc900;
    --color-red: #cd3333;
    --color-red-2: #ed718f;
    --color-gray: #e2e2e2;
    --color-gray-2: #c0c0c0;
    --color-blue: #0000FF;
    --color-blue-2: #6495ed;
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
