import React from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'

// import required modules
import { Autoplay, Pagination } from 'swiper/modules'

// 作った CSS を読み込む
import './Slido.css'

const Slido = () => {
  return (
    <Swiper
      spaceBetween={30}
      centeredSlides={true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      modules={[Autoplay, Pagination]}
      style={{ height: "100vh", backgroundColor: "#ffffffff" }}
    >
      <SwiperSlide className="slide-container">
        <img
          src="/images/スローガン1.jpg" 
          alt="スローガン" 
          className="slide-image"
        />
      </SwiperSlide>
      <SwiperSlide className="slide-container">
        <img
          src="/images/スローガン2.jpg" 
          alt="スローガン" 
          className="slide-image"
        />
      </SwiperSlide>
      <SwiperSlide className="slide-container">
        <img
          src="/images/スローガン3.jpg" 
          alt="スローガン" 
          className="slide-image"
        />
      </SwiperSlide>
    </Swiper>
  )
}

export default Slido