import React, { useRef, useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';
import Idly from "../../assets/Foods/Idly.png";
import Dosa from "../../assets/Foods/Dosa.png";
import Poori from "../../assets/Foods/Poori.png";
import Chapthi from "../../assets/Foods/Chapthi.png";
import Juice from "../../assets/Foods/Juice.png";
import Cake from "../../assets/Foods/Cake.png";
import Biriyani from "../../assets/Foods/Biriyani.png";
import Parotta from "../../assets/Foods/Parotta.png";
import Meals from "../../assets/Foods/Meals.jpg";

export default function DishSlider() {
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);
  const swiperRef = useRef(null);

  const itemDatas = [
    { image: Idly, name: "Idly" },
    { image: Dosa, name: "Dosa" },
    { image: Poori, name: "Poori" },
    { image: Chapthi, name: "Chapthi" },
    { image: Juice, name: "Juice" },
    { image: Cake, name: "Cake" },
    { image: Biriyani, name: "Biriyani" },
    { image: Parotta, name: "Parotta" },
    { image: Meals, name: "Meals" }
  ];

  const goNext = () => {
    if (swiperRef.current) {
      swiperRef.current.slideNext();
    }
  };

  const goPrev = () => {
    if (swiperRef.current) {
      swiperRef.current.slidePrev();
    }
  };

  const handleSwiper = (swiper) => {
    swiperRef.current = swiper;
    setIsBeginning(swiper.isBeginning);
    setIsEnd(swiper.isEnd);

    swiper.on('slideChange', () => {
      setIsBeginning(swiper.isBeginning);
      setIsEnd(swiper.isEnd);
    });
  };

  return (
    <div className='relative py-5 w-[80vw] border-b-2 pb-10 border-gray-200'>
      <div className="z-10 w-full absolute flex justify-between top-[35%] px-5 lg:px-10">
        <button
          onClick={goPrev}
          disabled={isBeginning}
          className={`relative left-0 md:left-5 rounded-full shadow bg-white hover:bg-gray-200 transition-all duration-300 ${isBeginning ? 'opacity-50 cursor-not-allowed' : ''}`}
        >
          <MdKeyboardArrowLeft size={30} />
        </button>
        <button
          onClick={goNext}
          disabled={isEnd}
          className={`relative right-0 md:right-5 rounded-full shadow bg-white hover:bg-gray-200 transition-all duration-300 ${isEnd ? 'opacity-50 cursor-not-allowed' : ''}`}
        >
          <MdKeyboardArrowRight size={30} />
        </button>
      </div>
      <div className='lg:px-24 px-10'>
        <Swiper
          onSwiper={handleSwiper}
          breakpoints={{
            0: { slidesPerView: 2 },
            540: { slidesPerView: 3 },
            790: { slidesPerView: 4 },
            950: { slidesPerView: 5 },
            1100: { slidesPerView: 5 },
            1200: { slidesPerView: 5, spaceBetween: 10 }
          }}
          className="mySwiper"
        >
          {itemDatas.map((item, index) => (
            <SwiperSlide key={index}>
              <div className='grid grid-cols-1 gap-2 place-items-center'>
                <img src={item.image} alt={item.name} className='rounded-full shadow shadow-black w-32' />
                <span className='text-gray-700 font-medium'>{item.name}</span>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
