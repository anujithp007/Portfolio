import React from 'react' 
import { Navigation, Pagination, Scrollbar, A11y , Autoplay } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import './slider1.css'


import i1 from './2560px-Node.js_logo.svg-removebg-preview.png'
import i2 from './download-removebg-preview.png'
import i3 from './png-transparent-javascript-logo-html-javascript-logo-angle-text-rectangle-thumbnail-removebg-preview.png'
import i4 from './express-js.png'
import i5 from './1_doAg1_fMQKWFoub-6gwUiQ-removebg-preview (1).png'
import i6 from './react-removebg-preview (1).png'


const Slide1 = () => {
  
  const breakpoints = {
    // when window width is >= 320px
    320: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
      // when window width is >= 480px
      480: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      // when window width is >= 640px
      640: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
      // when window width is >= 768px
      768: {
        slidesPerView: 3,
        spaceBetween: 40,
      },
      // when window width is >= 1024px
      1024: {
        slidesPerView: 4,
        spaceBetween: 50,
      },
    };
    return (
    <div className='mt-5'>
      <Swiper
      className='main-swipe w-100 '
      modules={[Navigation, Pagination, Scrollbar, A11y , Autoplay]}
      spaceBetween={50}
      slidesPerView={3}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      autoplay={{ delay: 2000 }}
      breakpoints={breakpoints}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
      <SwiperSlide><img src={i1} width={100} height={100} alt="" /></SwiperSlide>
      <SwiperSlide><img src={i2} width={100} height={100} alt="" /></SwiperSlide>
      <SwiperSlide><img src={i3} width={100} height={100} alt="" /></SwiperSlide>
      <SwiperSlide><img src={i4} width={100} height={100} alt="" /></SwiperSlide>
      <SwiperSlide><img src={i5} width={100} height={100} alt="" /></SwiperSlide>
      <SwiperSlide><img src={i6} width={100} height={100} alt="" /></SwiperSlide>
      ...
    </Swiper>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3913.0086228101336!2d75.80621757402388!3d11.260775550075177!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba659b401c5ac4b%3A0xa44be8349fd6f5ec!2sSoftroniics%20-%20Flutter%2C%20Data%20Science%2C%20MERN%20Stack%2C%20PHP%20Laravel%20training%20Institute%20in%20Kerala!5e0!3m2!1sen!2sin!4v1706633704213!5m2!1sen!2sin" width="100%" height="450" className=' '  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

    </div>

  )
}

export default Slide1
