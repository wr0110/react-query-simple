import { useEffect, useState, useCallback } from 'react';

const useSlider = () => {
  const [slideIndex, setSlideIndex] = useState(1);
  const [length, setLength] = useState(0);

  const nextSlide = useCallback(() => {
    if (slideIndex !== length) {
      setSlideIndex(slideIndex + 1);
    } else if (slideIndex === length) {
      setSlideIndex(1);
    }
  }, [length, slideIndex]);

  useEffect(() => {
    nextSlide();
  }, [nextSlide]);

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
