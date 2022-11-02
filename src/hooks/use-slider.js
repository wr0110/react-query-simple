import { useCallback, useEffect, useState } from 'react';

const useSlider = (imageLength = 0) => {
  const [slideIndex, setSlideIndex] = useState(1);
  const [length, setLength] = useState(imageLength);
  console.log('slider', slideIndex, length);

  const nextSlide = useCallback(() => {
    if (slideIndex !== length) {
      setSlideIndex(slideIndex + 1);
    } else if (slideIndex === length) {
      setSlideIndex(1);
    }
  }, [slideIndex, length]);

  useEffect(() => {
    if (length !== 0) nextSlide();
  }, []);

  const prevSlide = () => {
    if (slideIndex !== 1) {
      setSlideIndex(slideIndex - 1);
    } else if (slideIndex === 1) {
      setSlideIndex(length);
    }
  };

  const moveDot = (i) => setSlideIndex(i);

  return { slideIndex, nextSlide, prevSlide, moveDot, setSlideIndex, setLength };
};

export default useSlider;
