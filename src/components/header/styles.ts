import styled from "styled-components";

export const Container = styled.nav`
    width: 100%;
    background: var(--black);
    height: 8vh;
    display: flex;
    justify-content: end;
    padding-right: 3rem;
    align-items: center;

    a {
        color: var(--white);
        border-radius: 10px;
        text-align: center;
        padding: 10px;
        margin: 0 5px;
    }

    a:hover{
        background: var(--black-hover);
        transition: 0.8s;
    }

    @media (min-width: 768px) {
        
    }

    @media (min-width: 1080px) {
    }
`;