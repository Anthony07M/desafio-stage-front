import styled, { css } from "styled-components";

interface InputProps {
  error?: boolean;
}

export const Container = styled.div<InputProps>`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 1rem 0;
  label {
    margin-bottom: 4px;
    font-weight: 400;
    font-size: 16px;
    color: var(--gray-title);
  }

  ${({ error }) =>
    error &&
    css`
      input::placeholder {
        color: var(--red-error);
      }
    `}

  input {
    border: 2px solid var(--gray-text);
    border-radius: 4px;
    height: 25px;
    outline: none;
    color: var(--gray-subtitle);
    font-size: 16px;
    padding: 1rem;

    ${({ error }) =>
      error
        ? css`
            border-color: var(--red-error);
          `
        : css`
            &:focus {
              border-color: var(--black);
            }
          `}
  }
`;
