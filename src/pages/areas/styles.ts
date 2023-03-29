import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  .content-button {
    width: 100%;
    text-align: right;
    padding-right: 2rem;
    padding-bottom: 1rem;

    button {
      background: var(--black);
      color: var(--white);
      font-weight: bold;
      border-radius: 10px;
      padding: 1rem;
    }

    button:hover {
      background: var(--gray-title);
      transition: 0.7s;
    }
  }

  @media (min-width: 768px) {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
  }

  @media (min-width: 1440px) {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: start;
  }
`;
