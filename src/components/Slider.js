import React from 'react';

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
    spaceBetween: 20,
  },
  800: {
    slidesPerView: 2.25,
    spaceBetween: 20,
  },
  1200: {
    slidesPerView: 3.65,
    spaceBetween: 20,
  },
};

export default function Slider() {
  return (
    <div className='slider'>
      <div className='slider__latest-stories-sidebar'>
        <h3>Latest Stories</h3>
      </div>
      <div className='slider__wrapper'>
        <Cursor />
        <Swiper
          modules={[FreeMode]}
          slidesPerView={1}
          breakpoints={swiperBreakpoints}
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
