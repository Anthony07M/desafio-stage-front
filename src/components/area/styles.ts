import styled from "styled-components";

export const Container = styled.div`
    width:  350px;
    height: 150px;
    border-radius: 15px;
    border: 1px solid #ccc;
    background: var(--white);
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    margin: 1rem 0;
    padding: 0 1rem;

    h3 {
        color: var(--gray-title);
    }

    p {
        color: var(--gray-subtitle);
    }

    div {
        display: flex;
        justify-content: space-between;
    }

    span {
        color: var(--gray-text);
    }

    @media (min-width: 1440px) {
         margin: 1rem;
     }
`;