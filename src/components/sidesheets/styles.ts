import styled from "styled-components";

export const Container = styled.div`
  .side-sheet {
    position: fixed;
    top: 0;
    right: -100vw;
    width: 100vw;
    height: 100%;
    background-color: white;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
    transition: right 0.3s ease-in-out;
  }

  .side-sheet.open {
    right: 0;
  }

  .side-sheet-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    border-bottom: 1px solid #ccc;
  }

  .side-sheet-header h2 {
    margin: 0;
  }

  .side-sheet-content {
    padding: 10px;
  }

  .close-button {
    background: none;
    border: none;
    cursor: pointer;
    font-size: 20px;
    font-weight: bold;
  }

  @media (min-width: 1024px) {
    .side-sheet {
      right: -60vw;
      width: 60vw;
    }
  }
`;
