import styled from 'styled-components';

export const MainContainer = styled.div`
  width: 100%;
  cursor: pointer;

`;
export const ProductRow = styled.div`
  position: relative;
  display: flex;
  background-color: white;
  padding: 1rem;
  border-bottom: 1px solid #f6f6f6;
  border-top: 1px solid #f6f6f6;
`;
export const ProductImage = styled.img`
  width: 64px;
  border-radius: 8px;
`;
export const ProductTitleAndPriceContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 4px;
  margin-left: 14px;
`;
export const ProductPrice = styled.div`
  font-size: 16px;
`;
export const ProductTitle = styled.div`
  font-size: 14px;
`;
export const RightArrowContainer = styled.div`
  position: absolute;
  right: 16px;
  transform: translateY(-50%);
  cursor: pointer;
  rotate: 180deg;
`;
