import React, { useRef } from 'react'
import DishSlider from '../../Layout/DishSlider'
import ResturantCard from '../../Layout/ResturantCard'
import Footer from './Footer'
import { IoIosArrowDropup } from 'react-icons/io'

const CustomerDashBoard = () => {
  const elementRef = useRef(null);

  const scrollToElement = () => {
    if (elementRef.current) {
      elementRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <div ref={elementRef}>
      <div className=' w-full py-10'>
        <h3 className=' text-xl font-bold pb-10 px-10 md:px-20'>What On Your Mind ?</h3>
        <div className=' flex items-center justify-center px-2 md:px-20'>
          <DishSlider />
        </div>
        <h3 className=' text-xl font-bold pt-10 px-10 md:px-20'>Resturant with Online Food Delivery in near me</h3>
        <div className=' flex items-center gap-2 sticky top-[0.3px] z-50 px-10 md:px-20 py-5 bg-white'>
          <button className=' border-gray-300 text-gray-400 rounded-lg shadow border px-2 py-1'>VEG</button>
          <button className=' border-gray-300 text-gray-400 rounded-lg shadow border px-2 py-1'>NON VEG</button>
          <button className=' border-gray-300 text-gray-400 rounded-lg shadow border px-2 py-1'>RS.300 - 600</button>
        </div>
        <ResturantCard />
      </div>
      <Footer />
      <div>
        <IoIosArrowDropup
          size={60}
          className='cursor-pointer fixed bottom-4 right-4 text-orange-500'
          onClick={scrollToElement}
        />
      </div>
    </div>
  )
}

export default CustomerDashBoard
