import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    :root{
        --black: #282629;
        --black-hover: #373538;
        --white: #ffffff;
        --gray-title: #333333;
        --gray-subtitle: #707070;
        --gray-text: #A9A9A9;
        --background: #f1efef;
        --red-error: #df2020;
        --red: #DC143C;
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
    body {
        background: var(--background);
    }
    
    button:hover{
        cursor: pointer;
    }

    .app {
        height: 100vh;
    }
`;
