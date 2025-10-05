
// src/components/HomeBanner.jsx

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';



export const Sliders = () => {



return (
    <Swiper
      // Install Swiper modules
      modules={[Autoplay, Pagination, Navigation]}
      spaceBetween={30} // Space between slides
      centeredSlides={true}
      // Autoplay settings
      autoplay={{
        delay: 2500, // Time in ms
        disableOnInteraction: false,
      }}
      // Pagination dots
      pagination={{
        clickable: true,
      }}
      // Navigation arrows
    
      navigation={true}
      loop={true} // Enable continuous loop
      className="mySwiper h-64 md:h-96 lg:h-[400px] w-full"
    >
      <SwiperSlide >
        {/* You can put any content here: images, text, components */}
        <img className='object-contain w-full h-full' src="https://i.pinimg.com/736x/22/55/1c/22551c3e96c16fa63b7aa1c8e89f0f51.jpg" alt="Banner 1" />
      </SwiperSlide>
      <SwiperSlide>
        <img className='object-contain w-full h-full' src="https://i.pinimg.com/1200x/2f/c5/8d/2fc58dbad4543a1383ad34d35eb2bf91.jpg" alt="Banner 2" />
      </SwiperSlide>
      <SwiperSlide>
        <img className='object-contain w-full h-full' src="https://i.pinimg.com/736x/9f/19/6d/9f196d1d78b367810a3554bc54d38d54.jpg" alt="Banner 3" />
      </SwiperSlide>
      <SwiperSlide>
        <img className='object-contain w-full h-full' src="https://i.pinimg.com/1200x/9d/d2/86/9dd28648454a2c26f43472351d521c33.jpg" alt="Banner 3" />
      </SwiperSlide>
    </Swiper>
  );
}
