import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Container = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  justify-content: ${(props) => (props.justify ? 'center' : props.end ? 'flex-end' : 'space-between')};
  align-items: ${(props) => (props.items ? 'flex-start' : 'center')};
  flex-direction: ${(props) => (props.col ? 'column' : 'row')};
  margin: 30px 0 30px 0;
  padding: ${(props) => (props.padding ? '10px' : '0')};
  @media (max-width: 920px) {
    //margin: 0 0 3rem 0;
  }
`;

export const ContainerSelect = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  align-items: flex-start;
  margin: 10px 0 0 0;
`;

export const ContainerButtonPrevNext = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  background: red;
`;

export const ContainerButton = styled.div`
  margin: 20px 0 0 0;
  width: 100%;
`;

export const ContainerModal = styled(motion.div)`
  width: 100%;
  height: 100%;
  background: #fff;
  position: absolute;
  bottom: 0;
  right: 0;
  top: 0;
  left: 0;
  z-index: 99999;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const ContainerInnerModal = styled.div`
  margin: 90px 0 0 0;
  width: 100%;
  height: 100%;
  padding: 0 2rem;
`;
export const Slide = styled.div`
  width: 100%;
  position: absolute;
  overflow: hidden;
  opacity: ${(props) => (props.active ? '1' : '0')};
  transition: opacity ease-in-out 0.4s;
  display: flex;
  justify-content: space-between;
`;
export const ContainerCloseButton = styled.div`
  display: flex !important;
  justify-content: center !important;
  align-items: center !important;
  padding: 9px;
  border-radius: 8px !important;
  cursor: pointer !important;
  border: 1px solid rgba(0, 0, 0, 0.2) !important;
  position: absolute;
  top: ${(props) => (props.modal ? '5px' : '-20px')};
  right: ${(props) => (props.modal ? '10px' : '-15px')};
  z-index: 100;
`;

export const ContainerCloseModalButton = styled.div`
  display: flex !important;
  justify-content: center !important;
  align-items: center !important;
  padding: 9px;
  cursor: pointer !important;
  position: absolute;
  top: ${(props) => (props.modal ? '15px' : '-20px')};
  right: ${(props) => (props.modal ? '15px' : '-15px')};
  z-index: 10;
`;

export const SingleProductWrapper = styled.div`
  position: relative;
  width: 25vw;
  max-height: 100vh;
  overflow-x: hidden;
  overflow-y: auto;
  z-index: 99999;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  //margin: 10px 0 10px 10px;
  padding: 4px 32px;

  @media (max-width: 920px) {
    display: none;
  }
`;

export const Text = styled.h6`
  margin: ${(props) => (props.margin ? '20px 0 0 0' : '0')};
  padding: 0;
  font-weight: 700;
  font-size: ${(props) => (props.bigger ? '32px' : '18px')};
  color: ${(props) => (props.primary ? 'white' : 'black')};
  text-align: center;
`;

export const TextMobile = styled.h6`
  margin: ${(props) => (props.margin ? '20px 0 0 0' : '0')};
  padding: 0;
  color: ${(props) => (props.primary ? 'white' : 'black')};
  text-align: center;
  font-size: 16px;
  line-height: 24px;
  font-weight: ${(props) => (props.bold ? 800 : 400)};
  letter-spacing: unset;
  cursor: ${(props) => (props.cursor ? 'pointer' : '')};
`;
export const TextSelect = styled.h6`
  margin: ${(props) => (props.margin ? '20px 0 0 0' : '0')};
  padding: 0 0 5px 0;
  color: ${(props) => (props.primary ? 'white' : 'black')};
  text-align: center;
  font-size: 14px;
  line-height: 18px;
  font-weight: 600;
  letter-spacing: unset;
`;

export const SliderBtn = styled.button`
  position: absolute;
  top: ${(props) => (props.up ? '45%' : '51%')};
  left: 68%;
  width: 42px;
  height: 42px;
  border-radius: 50%;
  border: 1px solid rgba(255, 255, 255, 0.498);
  background: #0000002d;
  color: white;
  z-index: 99999;
  transform: rotate(${(props) => (props.up ? '270deg' : '90deg')});
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  @media (max-width: 920px) {
    left: 90%;
  }

  @media (max-width: 540px) {
    left: 85%;
  }
`;

export const MobileCard = styled.div`
  position: absolute;
  bottom: 5%;
  left: 2.5%;
  width: 95%;
  height: 80px;
  z-index: 99999;
  background: rgba(255, 255, 255, 0.25);
  backdrop-filter: blur(6px);
  border-radius: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0;

  @media (min-width: 920px) {
    display: none;
  }
`;
export const ContainerCloseButtonMobile = styled.div`
  display: flex !important;
  justify-content: center !important;
  align-items: center !important;
  padding: 9px;
  border-radius: 8px !important;
  cursor: pointer !important;
  border: 1px solid rgba(0, 0, 0, 0.2) !important;
  position: absolute;
  top: 20px;
  right: 10px;
  z-index: 10;
  backdrop-filter: blur(4px);
  background: rgba(255, 255, 255, 0.2);
`;
export const ImageCard = styled.img`
  width: 120px;
  height: 100px;
  object-fit: cover;
  border-radius: 10px;
`;
export const VideoAndSliderContainer = styled.div`
  display: flex;
`;
export const SlideItemsContainer = styled.div`
  position: relative;
  width: 25vw;
`;
export const WrapPlayer = styled.div`
  position: relative;
`;
export const WrapControl = styled.div`
  position: relative;
`;
export const ImgPlayButton = styled.div`
  position: absolute;
  width: 100px;
  height: 100px;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`;
export const ButtonVolumeMobile = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
  z-index: 2;
  position: absolute;
  bottom: 150px;
  right: 0;
`;

export const Sizes = styled.option``;
