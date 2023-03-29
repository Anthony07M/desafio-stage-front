import styled, { keyframes } from "styled-components";

const animate = keyframes`
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
`;

export const Container = styled.div`
  overflow: auto;
  height: 95vh;
  padding: 1rem 0;
  padding-bottom: 10rem;

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

    button:hover{
      background: var(--gray-subtitle);
    }
    .outlined {
      border: 2px solid var(--black);
      color: var(--black);
      background: var(--white);
    }

    .outlined:hover{ 
      background: var(--black);
      color: var(--white);
    }

  }

  span {
    color: var(--gray-title);
  }

  @media (min-width: 768px) {
    padding: 0 6rem;
    .button-save {
      padding-bottom: 3rem;
    }
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
  width: 100%;

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

export const Section = styled.section`
  border: 1px solid var(--gray-subtitle);
  border-radius: 10px;
  width: 100%;
  padding: 10px;
  margin: 2rem 0;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  border: 1px solid var(--gray-text);

  .content-select,
  .content-button {
    width: 100%;
    padding-bottom: 1rem;
  }

  h2 {
    color: var(--gray-subtitle);
    text-align: left;
  }
`;

export const SubprocessContent = styled.div`
  animation: ${animate} 1s ease;
`;
