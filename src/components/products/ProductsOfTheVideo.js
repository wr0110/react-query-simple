import {
  MainContainer,
  ProductImage,
  ProductPrice,
  ProductRow,
  ProductTitle,
  ProductTitleAndPriceContainer,
  RightArrowContainer,
} from './style';
import ArrowLeft from '../../assets/icons/ArrowLeft';

const ProductsOfTheVideo = ({ products = [], handleClick }) => {
  return (
    <MainContainer>
      {products.map((product, index) => {
        return (
          <ProductRow key={product.name} onClick={() => handleClick(index)}>
            <ProductImage src={product.images[0]} alt={product.name} />
            <ProductTitleAndPriceContainer>
              <ProductPrice>{product.price}</ProductPrice>
              <ProductTitle>{product.name}</ProductTitle>
            </ProductTitleAndPriceContainer>
            <RightArrowContainer>
              <ArrowLeft />
            </RightArrowContainer>
          </ProductRow>
        );
      })}
    </MainContainer>
  );
};

export default ProductsOfTheVideo;
