import styled from "styled-components";

export const Container = styled.header`
  top: 0;
  color: var(--white);
  background: var(--gray-title);
  width: 100%;
  height: 50px;
  display: flex;
  padding-left: 10px;
  display: flex;
  align-items: center;
  gap: 11px;
  font-weight: 400;
  border-top-left-radius: 4px;

  svg {
    font-size: 24px;
    cursor: pointer;
  }

  @media (min-width: 768px) {
    height: 80px;
    font-size: 24px;
    padding-left: 28px;
    gap: 28px;
  }
`;
