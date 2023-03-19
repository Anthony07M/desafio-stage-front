import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    :root{

    }
    
    * {
        margin:0;
        padding: 0;
        border: 0;
        list-style: none;
        box-sizing: border-box;
        text-decoration: none;
        outline: none;
        font-family: Poppins, sans-serif;
    }
    
    button:hover{
        cursor: pointer;
    }
`;
