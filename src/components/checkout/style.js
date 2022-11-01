import styled from 'styled-components';
import { motion } from 'framer-motion';

export const CheckoutWrapper = styled(motion.div)`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: auto;
  background: transparent;
  z-index: 10;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  //padding: 0 10rem;
`;

export const CheckoutContainer = styled(motion.div)`
  width: 75%;
  display: flex;
  flex-direction: column;
  box-shadow: rgba(9, 10, 11, 0.15) 0 3px 34px;
  border-radius: 24px;
  background: rgb(255, 255, 255);
  padding: 1.6rem;
  margin: 1rem;
`;

export const CheckoutText = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 0.5rem;
`;
