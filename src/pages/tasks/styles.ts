import styled from "styled-components";

export const Container = styled.div`
  h1 {
     color: var(--gray-title);
     margin: 1rem 0;
     text-align: left;
  }
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .content-button {
    text-align: right;
    padding-right: 1rem;
    padding: 1rem;
    width: 80%;
    button {
      background: var(--black);
      color: var(--white);
      border-radius: 15px;
      padding: 1rem;
      font-weight: bold;
    }
  }
`;
