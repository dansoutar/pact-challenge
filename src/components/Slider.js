import React, { useRef } from 'react';

import { img1, img2, img3, img4 } from '../assets/images/index';
import CategoryCard from './CategoryCard';
import Cursor from '../components/Cursor';

// Swiper
import { FreeMode } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

const images = [img1, img2, img3, img4];
const swiperBreakpoints = {
  500: {
    slidesPerView: 1.75,
  },
  800: {
    slidesPerView: 2.25,
  },
  1200: {
    slidesPerView: 3.65,
  },
};

export default function Slider() {
  const latestStories = useRef(null);

  const keyframes = [
    { transform: 'translateY(0)', opacity: 1 },
    { transform: 'translateY(-150%)', opacity: 0 },
    { transform: 'translateY(150%)', opacity: 0 },
    { transform: 'translateY(0)', opacity: 1 },
  ];

  const settings = {
    duration: 500,
    fill: 'both',
    easing: 'ease-in-out',
  };

  const latestStoriesAnimation = () => {
    latestStories.current.children &&
      [...latestStories.current.children].forEach((child) => {
        const idx = child.style.getPropertyValue('--index');

        child.animate(keyframes, { ...settings, delay: idx * 20 });
      });
  };

  return (
    <div className='slider'>
      <div className='slider__latest-stories-sidebar'>
        <h3>
          <span
            split-by='letter'
            letter-animation='fade-up'
            ref={latestStories}
          >
            Latest Stories
          </span>
        </h3>
      </div>
      <div className='slider__wrapper'>
        <Cursor />
        <Swiper
          modules={[FreeMode]}
          slidesPerView={1}
          breakpoints={swiperBreakpoints}
          onSliderFirstMove={() => {
            latestStoriesAnimation();
          }}
        >
          {images &&
            images.map((imgSrc, index) => (
              <div className='slider__slide' key={index}>
                <SwiperSlide key={index}>
                  <CategoryCard imgSrc={imgSrc} />
                </SwiperSlide>
              </div>
            ))}
        </Swiper>
      </div>
    </div>
  );
}
