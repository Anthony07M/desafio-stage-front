import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  h1 {
    text-align: center;
    margin: 1rem 0;
    color: var(--gray-title);
  }

  .content-button {
    text-align: right;
    padding-right: 1rem;
    padding: 1rem;
    button {
      background: var(--black);
      color: var(--white);
      border-radius: 15px;
      padding: 1rem;
      font-weight: bold;
    }
  }

  section {
    display: flex;
    flex-direction: column;
    align-items: center;

    @media (min-width: 768px) {
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: center;
    }
  }
`;
