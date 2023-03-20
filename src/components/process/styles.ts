import styled from "styled-components";

export const Container = styled.div`
  width: 309px;
  height: 226px;
  border-radius: 10px;
  padding: 15px;
  -webkit-box-shadow: 3px 4px 5px -3px rgba(0, 0, 0, 0.62);
  -moz-box-shadow: 3px 4px 5px -3px rgba(0, 0, 0, 0.62);
  box-shadow: rgba(0, 0, 0, 0.32) 1px 1px 14px 0px;

  h2,
  h3,
  p {
    font-weight: 400;
    margin-bottom: 1rem;
  }

  h2 {
    font-size: 0.8rem;
  }

  h3 {
    font-size: 1.125rem;
  }

  .status {
    display: flex;
    justify-content: space-between;
    font-weight: 400;

    p {
      font-size: 0.875rem;
    }
  }

  .progress-bar {
    height: 10px;
    border-radius: 10px;
    padding: 2px;
    background-color: #ccc;
    display: flex;
    margin-bottom: 0.8rem;
  }

  .progress-bar::before {
    content: "";
    border-radius: 10px;
    text-align: center;
    width: 70%;
    background-color: blue;
  }

  .imgs {
    img {
      margin: 0px 3px;
      width: 24px;
      height: 24px;
      border-radius: 50%;
    }
  }

  &:hover {
    transition: 0.6s;
    cursor: pointer;
    background: #fff1f1;
    box-shadow: rgba(0, 0, 0, 0.32) 1px 1px 14px 5px;
  }
`;
