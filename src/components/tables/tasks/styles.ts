import styled from "styled-components";

export const Table = styled.table`
  font-family: arial, sans-serif;
  border-collapse: collapse;
  width: 100%;
  -webkit-border-radius: 25px;
  -moz-border-radius: 25px;
  border-radius: 25px;
  margin: 1rem 0;

  td,
  th {
    border: 1px solid #dddddd;
    text-align: left;
    padding: 8px;
  }
  tr:nth-child(even) {
    background-color: #dddddd;
    border-radius: 10px;
  }
`;
