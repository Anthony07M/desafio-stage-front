import styled from "styled-components";

export const Container = styled.div`
  border: 1px solid #ccc;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  width: 90%;
  .content {
    width: 100%;
  }

  .content-titles {
    padding-left: 1rem;
  }

  .content-date {
    text-align: center;
  }

  .content-user {
    text-align: right;
    padding-right: 1rem;
  }

  img {
    width: 24px;
    height: 24px;
    border-radius: 50%;
  }

  &:hover{
    cursor: pointer;
    background: #efede9;
    transition: .8s;
  }
`;
