import styled, { keyframes } from "styled-components";

const animate = keyframes`
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
`

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
  .content-selects {
    display: flex;
    justify-content: space-between;
  }

  @media (min-wight: 768px) {
    padding: 0 4rem;
    border: 1px solid red;
  }
`;

export const ListTasks = styled.div`
  border: 1px solid var(--gray-text);
  overflow: auto;
  border-radius: 10px;
  height: 150px;
  display: flex;
  flex-direction: column;
  padding: 1rem;

  .empty {
    color: var(--gray-subtitle);
    height: 100%;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  @media (min-height: 800px) {
    height: 330px;
  }
`;

export const Task = styled.div`
  width: 100%;
  height: 30px;
  border: 1px solid var(--gray-text);
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 10px;
  margin: 8px 0;
  animation: ${animate} 1s ease;
  p,
  svg {
    font-size: 0.75rem;
    color: var(--gray-subtitle);
  }

  svg {
    font-size: initial;
    cursor: pointer;
  }

  @media (min-width: 1440px) {
    height: 40px;
    p {
      font-size: 1rem;
    }
  }
`;
