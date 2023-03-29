import styled, { keyframes } from "styled-components";

export const Container = styled.div`
  .content-button {
    text-align: right;
    margin: 1rem 0;
    button {
      background: var(--black);
      color: var(--white);
      border-radius: 10px;
      padding: 0.75rem;
      font-weight: bold;
      transition: 0.8s;
    }
    button:disabled {
      background: var(--gray-text);
      cursor: not-allowed;
    }
  }

  span {
    color: var(--gray-title);
  }

  @media (min-width: 768px) {
    padding: 0 6rem;
  }

  @media (min-width: 1440px) {
    padding: 0 9rem;
  }
`;

export const Form = styled.form`
  #deleted {
    background: var(--red);
    margin-left: 1rem;
  }

  .content-button {
    padding: 0;
  }

  @media (min-wight: 768px) {
    padding: 0 4rem;
    border: 1px solid red;
  }
`;
