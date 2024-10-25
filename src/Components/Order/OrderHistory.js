import React, { useState } from 'react'
import { BsBox2Fill } from "react-icons/bs";
import { ImUndo2 } from "react-icons/im";
import { FaTruckFast } from "react-icons/fa6";
import { TbBasketCancel } from "react-icons/tb";
import OrderHistoryTable from './OrderHistoryTable';
const OrderHistory = () => {
    const[monthyear,setMonthYear]=useState()
    return (
        <div className=' p-3 py-5'>
            <div className=' flex items-center justify-between pb-3'>
                <span className=' text-xl font-medium'>Order History</span>
                <input
                    type='month'
                    className=' p-1 border border-gray-200 rounded-md focus:outline-orange-400'
                    value={monthyear}
                    onChange={(e) => setMonthYear(e.target.value)}
                />
            </div>
            <div className=' py-3 grid grid-cols-4 gap-3'>
                <div className=' flex items-center gap-3 rounded-md border border-gray-200 p-3'>
                    <BsBox2Fill size={30} className=' text-indigo-700'/>
                    <div className=' grid grid-cols-1'>
                        <span className=' text-indigo-700 font-medium'>Total Orders</span>
                        <span className='  text-xl'>100</span>
                    </div>
                </div>
                <div className=' flex items-center gap-3 rounded-md border border-gray-200 p-3'>
                    <FaTruckFast size={30} className=' text-green-700'/>
                    <div className=' grid grid-cols-1'>
                        <span className=' text-green-700 font-medium'>Delivered Orders</span>
                        <span className='  text-xl'>100</span>
                    </div>
                </div>
                <div className=' flex items-center gap-3 rounded-md border border-gray-200 p-3'>
                    <TbBasketCancel size={30} className=' text-red-700'/>
                    <div className=' grid grid-cols-1'>
                        <span className=' text-red-700 font-medium'>Cancelled Orders</span>
                        <span className='  text-xl'>100</span>
                    </div>
                </div>
                <div className=' flex items-center gap-3 rounded-md border border-gray-200  p-3'>
                    <ImUndo2 size={30} className=' text-sky-700'/>
                    <div className=' grid grid-cols-1'>
                        <span className=' text-sky-700 font-medium'>Returned Orders</span>
                        <span className='  text-xl'>100</span>
                    </div>
                </div>
            </div>
            <div>
                <OrderHistoryTable/>
            </div>
        </div>
    )
}

export default OrderHistory
