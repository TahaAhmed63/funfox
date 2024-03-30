import React, { useEffect, useRef } from 'react'
import WeekOne from '../components/WeekOne'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
const FunFox = () => {
  const swiperRef = useRef(null);
  const [slidesLength, setSlidesLength] = React.useState(1);
  const [currentIndex, setCurrentindex] = React.useState(1);

  useEffect(() => {
    if (swiperRef.current && swiperRef.current.swiper) {
      setSlidesLength(swiperRef.current.swiper.slides.length);
    }
  }, []);

  const handlePrevSlide = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      const newIndex = currentIndex > 1 ? currentIndex - 1 : 1;
      console.log("New index on prev:", newIndex);
      setCurrentindex(newIndex);
      swiperRef.current.swiper.slidePrev();
    }
  };

  const handleNextSlide = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      const newIndex = currentIndex < slidesLength ? currentIndex + 1 : slidesLength;
      console.log("New index on next:", newIndex);
      setCurrentindex(newIndex);
      swiperRef.current.swiper.slideNext();
    }
  };

 
  return (
    <>
    <Swiper
ref={swiperRef}
    spaceBetween={50}
    slidesPerView={1}
          pagination={{ clickable: true }}

    onSlideChange={() => console.log('slide change')}
    // onSwiper={swiperRef}
  >
       <SwiperSlide>
    <div className='bg-weekOne bg-no-repeat	w-[100%] h-[100%]  flex items-center justify-center' style={{backgroundSize:"100% 100%"}}>
      <WeekOne />
   
    </div>
    </SwiperSlide>
       <SwiperSlide>
    <div className='bg-weekOne bg-no-repeat	w-[100%] h-[100%]  flex items-center justify-center' style={{backgroundSize:"100% 100%"}}>
      <WeekOne />
   
    </div>
    </SwiperSlide>

    </Swiper>
    <div className='flex justify-center content-center  gap-4 -mt-12	z-50 relative'>
    <button
        className=" left-0 top-1/2  bg-fuchsia-600 px-3 py-2 rounded-full shadow-md hover:.bg-fuchsia-600  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
        onClick={handlePrevSlide}
      >
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 18l-6-6 6-6">
          </path>
         
        </svg>
      </button>
      <div className="text-center">
          <span className="font-bold">{currentIndex}</span> / {/* Get current slide index */}
          <span>{slidesLength}</span> {/* Get total slides */}
        </div>

      <button
        className=" right-0 top-1/2  bg-fuchsia-600 px-3 py-2 rounded-full shadow-md hover:bg-fuchsia-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
        onClick={handleNextSlide}
      >
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7">
          </path>
     
        </svg>
      </button>
      </div>
    </>
  )
}

export default FunFox