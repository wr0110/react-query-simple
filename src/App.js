import { useEffect, useRef, useState } from 'react';
import ReactPlayer from 'react-player';
import axios from 'axios';
import { useQuery } from 'react-query';
import useSlider from './hooks/use-slider';
import {
  Container,
  SingleProductWrapper,
  Text,
  Slide,
  SliderBtn,
  ImgPlayButton,
  WrapPlayer,
  WrapControl,
  TextSelect,
  ContainerSelect,
  ContainerCloseButton,
  ContainerButton,
  ContainerModal,
  ContainerInnerModal,
  ContainerCloseModalButton,
  SlideItemsContainer,
  VideoAndSliderContainer,
} from './style/custom-styles';
import { CustomButton, CustomSelectbox, Slider, PlayerControl, ProductsOfTheVideo, Checkout } from './components';
import { AnimatePresence } from 'framer-motion';
import { AiOutlineDown } from 'react-icons/ai';

import ArrowUp from './assets/icons/ArrowUp';
import ArrowDown from './assets/icons/ArrowDown';
import MenuClose from './assets/icons/MenuClose';
import PlayIcon from './assets/icons/PlayIcon';

import { getVideos, getViewer, addCart } from './apis';

axios.interceptors.request.use(
  (config) => {
    config.headers['X-PQ-App'] = 'eyJhbGciOiJub25lIn0.eyJkYXRhIjoiNWU5ODg5MGY0MDYxNDkxNzMwOGQ0MDllIn0.';
    return config;
  },
  (err) => {
    return Promise.reject(err);
  }
);

function App() {
  const [isVideoLoaded, setIsVideoLoaded] = useState(true);
  const [indexVideo, setIndexVideo] = useState(1);
  const [play, setPlay] = useState(true);
  const [volume, setVolume] = useState(false);
  const [progress, setProgress] = useState(false);
  const [items, setItems] = useState(0);
  const [modalVisible, setModalVisible] = useState(false);
  const [checkout, setCheckout] = useState(false);
  const { slideIndex, nextSlide, prevSlide, setLength } = useSlider(0);
  const [productsByVideo, setProductsByVideo] = useState([]);
  const onLoadedData = () => setIsVideoLoaded(true);

  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);
  const [showDetails, setShowDetails] = useState(false);
  const [product, setProduct] = useState(null);

  const minSwipeDistance = 50;
  console.log('render', indexVideo);
  const { data: videos, isLoading: isVideoLoading } = useQuery('videos', () =>
    getVideos(1, '5fc01d3d4061493cd8e52fea')
  );

  const {
    data: checkoutData,
    refetch,
    isFetching: isCheckoutFetching,
  } = useQuery('checkout', () => addCart(1, '5fc25ebbe0d3ed14fb2277cc', '6358fc935fd75d4c5572af7b'), {
    manual: true,
  });
  // const {} = useQuery('viewer', () => getViewer())

  useEffect(() => {
    if (videos) {
      const videoData = videos.data.data.map(({ id, attributes: { livestream_url: video, products } }) => {
        return { id, video, products };
      });
      console.log('getvide');
      setProductsByVideo(videoData);
      setLength(videos.data.data.length);
    }
  }, [isVideoLoading]);

  useEffect(() => {
    console.log('checkout');
    if (checkoutData) {
      setItems(checkoutData.data.data.attributes.line_items);
    }
  }, [isCheckoutFetching, checkoutData]);

  const onTouchStart = (e) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientY);
  };

  const onTouchMove = (e) => setTouchEnd(e.targetTouches[0].clientY);

  const playerRef = useRef();

  const seekToStart = (seekNum) => {
    playerRef.current.seekTo(seekNum, 'seconds');
  };

  const addToCard = () => {
    if (items === 5) {
      return;
    }
    refetch();
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;
    if (isLeftSwipe || isRightSwipe) {
      isLeftSwipe ? nextSlide() : prevSlide();
    }
  };

  useEffect(() => {
    setIndexVideo(slideIndex);
  }, [slideIndex]);

  const handleCloseButtonClick = () => {
    setModalVisible(false);
    setShowDetails(false);
  };

  return (
    <>
      <>
        <>
          <SliderBtn up onClick={prevSlide}>
            <ArrowUp />
          </SliderBtn>

          <SliderBtn onClick={nextSlide}>
            <ArrowDown />
          </SliderBtn>
        </>
        <VideoAndSliderContainer>
          {isVideoLoaded && (
            <WrapControl data-name={'wrap-control'}>
              <WrapPlayer onClick={() => setPlay((prevState) => !prevState)}>
                {play === false && (
                  <ImgPlayButton src={'https://cdn-icons-png.flaticon.com/512/0/375.png'} alt="">
                    <PlayIcon />
                  </ImgPlayButton>
                )}
                <ReactPlayer
                  className="react-player"
                  url={productsByVideo[indexVideo - 1]?.video}
                  playing={play}
                  loop={true}
                  muted={volume}
                  onReady={onLoadedData}
                  pip={true}
                  ref={playerRef}
                  onProgress={(progress) => {
                    setProgress(progress);
                  }}
                  playsinline={true}
                />
              </WrapPlayer>
              <PlayerControl
                setProgress={setProgress}
                seekToStart={seekToStart}
                setVolume={setVolume}
                volume={volume}
                progress={progress}
              />
            </WrapControl>
          )}
          <SlideItemsContainer>
            <Slide
              style={{ height: '100%' }}
              data-name={'app-slide'}
              active={true}
              onTouchStart={onTouchStart}
              onTouchMove={onTouchMove}
              onTouchEnd={onTouchEnd}
            >
              {!showDetails && (
                <ProductsOfTheVideo
                  products={productsByVideo[indexVideo - 1]?.products}
                  handleClick={(index) => {
                    setShowDetails(true);
                    setProduct(productsByVideo[indexVideo - 1].products[index]);
                  }}
                />
              )}
              {showDetails && product && (
                <SingleProductWrapper show data-name={'wrapper'}>
                  <Container col justify>
                    <Slider images={product.images} />
                    <Container col items margin>
                      <Text>{product.name}</Text>
                      <Text bigger margin>
                        {product.price}
                      </Text>
                    </Container>
                    {/* <ContainerSelect>
                          <TextSelect>colour</TextSelect>
                          <CustomSelectbox disabled name={'colour'}>
                            <option value="" hidden>
                              {product.color}
                            </option>
                          </CustomSelectbox>
                        </ContainerSelect>
                        <ContainerSelect>
                          <TextSelect>size</TextSelect>
                          <CustomSelectbox>
                            <option value="" hidden style={{}}>
                              Select one size
                            </option>
                            {product.sizes.map((size) => (
                              <option value={size} key={size}>
                                {size}
                              </option>
                            ))}
                          </CustomSelectbox>
                        </ContainerSelect> */}
                    <ContainerButton>
                      <CustomButton
                        onClick={() => {
                          setCheckout(true);
                          addToCard();
                        }}
                        title={items === 5 ? 'Error adding to card' : 'Add to card'}
                        primary
                      />
                      <CustomButton title="Product details" />
                    </ContainerButton>
                  </Container>
                  <AnimatePresence>
                    {checkout ? <Checkout items={items} setItems={setItems} setCheckout={setCheckout} /> : null}
                  </AnimatePresence>
                  <ContainerCloseButton modal onClick={handleCloseButtonClick}>
                    <MenuClose />
                  </ContainerCloseButton>
                </SingleProductWrapper>
              )}

              <AnimatePresence>
                {modalVisible ? (
                  <ContainerModal
                    transition={{ duration: 0.3 }}
                    exit={{ y: '100%' }}
                    animate={{ y: 0 }}
                    initial={{ y: '100%' }}
                  >
                    <AnimatePresence>
                      {checkout ? <Checkout items={items} setItems={setItems} setCheckout={setCheckout} /> : null}
                    </AnimatePresence>
                    <ContainerInnerModal col justify>
                      <ContainerCloseModalButton modal onClick={() => setModalVisible(false)}>
                        <AiOutlineDown />
                      </ContainerCloseModalButton>
                      <Slider images={product.images} />
                      <Container col items margin>
                        <Text margin>{product.name}</Text>
                        <Text bigger margin>
                          {product.price}
                        </Text>
                      </Container>
                      <ContainerSelect>
                        <TextSelect>Colour</TextSelect>
                        <CustomSelectbox disabled name={'colour'}>
                          <option value="" hidden>
                            {product.color}
                          </option>
                        </CustomSelectbox>
                      </ContainerSelect>
                      <ContainerSelect>
                        <TextSelect>Size</TextSelect>
                        <CustomSelectbox>
                          <option value="" hidden style={{}}>
                            Select one size
                          </option>
                          {product.sizes.map((size) => (
                            <option value={size} key={size}>
                              {size}
                            </option>
                          ))}
                        </CustomSelectbox>
                      </ContainerSelect>
                      <ContainerButton>
                        <CustomButton
                          onClick={() => {
                            setCheckout(true);
                            addToCard();
                          }}
                          title={items === 5 ? 'Error adding to card' : 'Add to card'}
                          primary
                        />
                        <CustomButton title="Product details" />
                      </ContainerButton>
                    </ContainerInnerModal>
                  </ContainerModal>
                ) : (
                  ''
                )}
              </AnimatePresence>
            </Slide>
          </SlideItemsContainer>
        </VideoAndSliderContainer>
      </>
    </>
  );
}

export default App;
