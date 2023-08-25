import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import "./Slider.scss"


const Slider = () => {
  return (
  
        <Swiper
    className='slider'
    spaceBetween={30}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
 >
   <SwiperSlide>
    <div className='slider-text'>
    <span>Ayakkabı'ya Dair Herşey</span>
        <h2>Ayakkabı'ya Dair Herşey</h2>
    </div>
    <img alt='Null' src='slider1.jpg'/>
    </SwiperSlide>
   <SwiperSlide>
   <div className='slider-text'>
    <span>Ayakkabı'ya Dair Herşey</span>
   <h2>Ayakkabı'ya Dair Herşey</h2>
   </div>
    <img alt='Null' src='slider2.jpg'/>
    </SwiperSlide>
  
   
   
 </Swiper>
    
  )
}

export default Slider