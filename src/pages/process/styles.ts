import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  h1 {
    text-align: center;
    padding-top: 1rem;
  }
  .content {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  @media (min-width: 1024px) {
    .content {
      flex-direction: row;
      justify-content: space-evenly;
      flex-wrap: wrap;
      height: 100%;
    }
  }
`;
