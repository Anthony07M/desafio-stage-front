import styled from "styled-components";

interface ContainerProps {
  isCenter: boolean;
}

export const Container = styled.div<ContainerProps>`
  color: var(--gray-subtitle);
  position: ${(props) => (props.isCenter ? "absolute" : "initial")};
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  font-size: 12px;
  width: 100%;
  p {
    text-align: center;
  }

  @media (min-width: 1024px) {
    p {
        font-size: 1rem;
    }
  } 
`;
