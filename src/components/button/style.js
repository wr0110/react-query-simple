import styled from 'styled-components';

export const Button = styled.button`
  width: ${(props) => (props.width ? props.width : '100%')};
  //height: 40px;
  border-radius: 10px;
  margin: 5px;
  background: ${(props) => (props.primary ? 'black' : 'white')};
  color: ${(props) => (props.primary ? 'white' : 'black')};
  border: ${(props) => (props.primary ? '1px solid  transparent' : '1px solid  #000')};
  padding: ${(props) => (props.width ? '4px' : '16px')};
  position: ${(props) => (props.width ? 'absolute' : 'innitial')};
  right: 30px;
  bottom: -15px;
  line-height: 16px;
  font-weight: 700;
  cursor: pointer;

  &:hover {
    background: ${(props) => (props.primary ? 'white' : 'black')};
    color: ${(props) => (props.primary ? 'black' : 'white')};
    border: ${(props) => (props.primary ? '1px solid  #000' : '1px solid  transparent')};
  }

  &:active {
    scale: 0.97;
  }

  @media screen and (max-width: 768px) {
    &:hover {
      background: ${(props) => (props.primary ? 'black' : 'white')};
      color: ${(props) => (props.primary ? 'white' : 'black')};
      border: ${(props) => (props.primary ? '1px solid  transparent' : '1px solid  #000')};
    }
  }
`;
