import styled from 'styled-components';

export const ButtonVolume = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
  z-index: 2;
  position: absolute;
  bottom: 30px;
  right: 50px;
`;
export const ButtonVolumeMobile = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
  z-index: 2;
  position: absolute;
  bottom: 200px;
  right: 50px;
`;

export const ButtonRefresh = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
  z-index: 2;
  position: absolute;
  bottom: 30px;
  left: 50px;
`;
export const Progressbar = styled.div`
  position: absolute;
  cursor: pointer;
  bottom: 35px;
  width: 70%;
  height: 5px;
  left: 50%;
  background: rgba(255, 255, 255, 0.45);
  transform: translate(-50%, -50%);
  transition: left 0.3s ease-out 0s, width 0.3s ease-out 0s;
  border-radius: 10px;
`;
export const ProgressbarMobile = styled.div`
  position: absolute;
  top: 2px;
  width: 100%;
  height: 5px;
  left: 50%;
  background: rgba(255, 255, 255, 0.45);
  transform: translate(-50%, -50%);
  transition: left 0.3s ease-out 0s, width 0.3s ease-out 0s;
`;
export const ProgressbarDone = styled.div`
  width: 0;
  height: 5px;
  background: #fff;
  transition: left 0.3s ease-out 0s, width 0.3s ease-out 0s;
  border-radius: 10px;
`;
export const ProgressbarDoneMobile = styled.div`
  width: 0;
  height: 5px;
  background: #fff;
  transition: left 0.3s ease-out 0s, width 0.3s ease-out 0s;
`;
export const WrapperControl = styled.div``;
