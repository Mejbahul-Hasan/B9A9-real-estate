import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


const Slider = () => {
  return (
    <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
      <SwiperSlide>
        <img className='h-[650px] w-full' src="../sliderPicture/property3.jpg" alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img className='h-[650px] w-full' src="../sliderPicture/property2.jpg" alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img className='h-[650px] w-full' src="../sliderPicture/property1.jpg" alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img className='h-[650px] w-full' src="../sliderPicture/property4.jpg" alt="" />
      </SwiperSlide>
    </Swiper>
  );
};

export default Slider;