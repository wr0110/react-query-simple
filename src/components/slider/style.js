import styled from 'styled-components';

export const RelativeContainer = styled.div`
  width: 100%;
  position: relative;
`;

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
`;

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const Slide = styled.div`
  width: 100%;
  position: absolute;
  overflow: hidden;
  opacity: ${(props) => (props.active ? '1' : '0')};
  transition: opacity ease-in-out 0.4s;
  display: flex;
  justify-content: center;
`;

export const Image = styled.img`
  height: 200px;
  object-fit: cover;
  border-radius: 10px;
`;

export const Dots = styled.div`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  margin: 0 5px;
  background: ${(props) => (props.active ? 'rgb(125, 128, 135)' : '#f1f1f1')};
  z-index: 9999;
`;

export const DotsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 220px;
`;

export const SliderBtn = styled.button`
  position: absolute;
  top: 40%;
  left: ${(props) => (props.left ? '2%' : '85%')};
  border: none;
  background: none;
  width: 40px;
  height: 40px;
  color: white;
  z-index: 999;
  transform: rotate(${(props) => (props.left ? '0' : '180deg')});
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  &:hover {
    background: rgba(125, 128, 135, 0.1);
    border-radius: 5px;
  }
`;
