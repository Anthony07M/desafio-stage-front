import styled from "styled-components";

export const ContainerSelect = styled.div<{ isOpen: boolean }>`
  position: relative;
  width: 49%;
  color: var(--gray-subtitle);
  height: 56px;
  label {
    margin-bottom: 4px;
    font-weight: 400;
    font-size: 16px;
    color: var(--gray-title);
  }
  display: flex;
  flex-direction: column;
`;

export const SelectedOption = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 4px;
  border: 2px solid var(--gray-text);
  background-color: var(--white);
  cursor: pointer;
  height: 32px;
  padding: 0px 10px;
`;

export const ArrowIcon = styled.span`
  display: inline-block;
  width: 0;
  height: 0;
  margin-left: 8px;
  border-style: solid;
  border-width: 4px 4px 0 4px;
  border-color: #333 transparent transparent transparent;
`;

export const OptionList = styled.ul<{ isOpen: boolean; labelfull: boolean }>`
  position: absolute;
  top: ${({ labelfull }) => (labelfull ? "100%" : "65%")};
  left: 0;
  width: 100%;
  margin: 0;
  padding: 0;
  list-style: none;
  border-radius: 4px;
  border: 1px solid #ccc;
  background-color: #fff;
  opacity: ${(props) => (props.isOpen ? 1 : 0)};
  visibility: ${(props) => (props.isOpen ? "visible" : "hidden")};
  transition: opacity 0.2s ease-in-out, visibility 0.2s ease-in-out;
`;

export const OptionItem = styled.li`
  padding: 8px;
  cursor: pointer;
  &:hover {
    background-color: #f0f0f0;
  }
`;
