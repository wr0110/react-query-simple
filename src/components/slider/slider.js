import useSlider from '../../hooks/use-slider';
import { useSwipeable } from 'react-swipeable';
import { Slide, Image, Container, Wrapper, Dots, DotsContainer, SliderBtn, RelativeContainer } from './style';
import ArrowLeft from '../../assets/icons/ArrowLeft';
import ArrowRight from '../../assets/icons/ArrowRight';

const Slider = ({ images }) => {
  const { slideIndex, nextSlide, prevSlide, moveDot } = useSlider(images.length);

  const handlers = useSwipeable({
    onSwipedLeft: () => {
      nextSlide();
    },
    onSwipedRight: () => {
      prevSlide();
    },
  });

  return (
    <RelativeContainer>
      <SliderBtn left onClick={prevSlide}>
        <ArrowLeft />
      </SliderBtn>

      <SliderBtn onClick={nextSlide}>
        <ArrowRight />
      </SliderBtn>

      {images.map((img, i) => (
        <Container key={i}>
          <Wrapper {...handlers}>
            <Slide active={slideIndex === i + 1}>
              <Image src={img} />
            </Slide>
          </Wrapper>
        </Container>
      ))}
      <DotsContainer>
        {Array.from({ length: images.length }).map((_item, index) => (
          <Dots key={index} active={slideIndex === index + 1} onClick={() => moveDot(index + 1)} />
        ))}
      </DotsContainer>
    </RelativeContainer>
  );
};

export default Slider;
