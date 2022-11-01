import styled from 'styled-components';

export const Select = styled.select`
  border: 1px solid rgb(234, 236, 240);
  -webkit-transition: all 0.3s ease 0s;
  transition: all 0.3s ease 0s;
  padding: 12px;
  background: transparent;
  box-sizing: border-box;
  cursor: unset;
  min-height: 34px;
  border-radius: 10px;
  width: 100%;

  option {
    color: black;
    background: white;
    display: flex;
    white-space: pre;
    min-height: 20px;
    padding: 0 2px 1px;
  }
`;
export const Wrapper = styled.select`
  gap: 4px;
`;
export const Name = styled.select`
  gap: 4px;
`;
