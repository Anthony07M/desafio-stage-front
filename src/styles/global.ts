import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    :root{
        --black: #282629;
        --black-hover: #373538;
        --white: #ffff;
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

    .app {
        height: 100vh;
    }
`;
