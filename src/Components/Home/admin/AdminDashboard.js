import React, { useState } from 'react'
import { FaUsers } from 'react-icons/fa'
import { IoRestaurant, IoWarning } from 'react-icons/io5'
import { MdDeliveryDining, MdOutlineCancel, MdOutlineCurrencyRupee } from "react-icons/md";
import { PiChartLineUpLight } from "react-icons/pi";
import { PiChartLineDownLight } from "react-icons/pi";
import Dashboard from './Chart';
import { RiMapPinTimeFill } from "react-icons/ri";
import { FcCancel } from "react-icons/fc";
import { ImUndo2 } from "react-icons/im";
import { PiCookingPotFill } from "react-icons/pi";
import { GiCardboardBox, GiCardboardBoxClosed } from "react-icons/gi";
const AdminDashboard = () => {
  const [Users, setUsers] = useState(0);
  const [Seller, setSellers] = useState(0);
  const [TodayOrders, setTodayOrders] = useState(false);
  const [Complaints, setcomplaints] = useState(0)
  const [Revenue, setRevenue] = useState(0);
  const [date, setDate] = useState(new Date())

  return (
    <div className=' p-0 relative'>
      <div className=' border border-gray-200 rounded-md m-3 p-2 grid  md:grid-cols-5 grid-cols-1'>
        <div className=' flex flex-col gap-2  md:border-e border-e-gray-200 p-4 md:p-0  md:px-4'>
          <div className=' flex items-center gap-2'>
            <FaUsers className=' p-1 bg-green-500 shadow shadow-green-500 text-white rounded-md' size={20} />
            <span className=' font-medium text-lg'>Users</span>
          </div>
          <div className=' flex items-end justify-between'>
            <span className=' text-4xl'>100</span>
            <div>
              {
                Users ?
                  <div className=' flex items-center gap-1 text-green-500'>
                    <PiChartLineUpLight />
                    <span>{`${Users}%`}</span>
                  </div> :
                  <div className=' flex items-center gap-1 text-red-500'>
                    <PiChartLineDownLight />
                    <span>{`${Users}%`}</span>
                  </div>
              }
            </div>
          </div>
        </div>
        <div className=' flex flex-col gap-2  md:border-e md:border-e-gray-200 md:border-t-0  border-t border-t-gray-200 p-4 md:p-0  md:px-4'>
          <div className=' flex items-center gap-2'>
            <IoRestaurant className=' p-1 bg-yellow-500 shadow shadow-yellow-500 text-white rounded-md' size={20} />
            <span className=' font-medium text-lg'>Sellers</span>
          </div>
          <div className=' flex items-end justify-between'>
            <span className=' text-4xl'>100</span>
            <div>
              {
                Users >= 0 ?
                  <div className=' flex items-center gap-1 text-green-500'>
                    <PiChartLineUpLight />
                    <span>{`${Users}%`}</span>
                  </div> :
                  <div className=' flex items-center gap-1 text-red-500'>
                    <PiChartLineDownLight />
                    <span>{`${Users}%`}</span>
                  </div>
              }
            </div>
          </div>
        </div>
        <div className=' flex flex-col gap-2 md:border-t-0 border-t border-t-gray-200 md:border-e border-e-gray-200  p-4 md:p-0  md:px-4'>
          <div className=' flex items-center gap-2'>
            <MdDeliveryDining className=' p-1 bg-blue-500 shadow shadow-blue-500 text-white rounded-md' size={20} />
            <span className=' font-medium'>Orders</span>
          </div>
          <div className=' flex items-end justify-between'>
            <span className=' text-4xl'>100</span>
            <div>
              {
                Users >= 0 ?
                  <div className=' flex items-center gap-1 text-green-500'>
                    <PiChartLineUpLight />
                    <span>{`${Users}%`}</span>
                  </div> :
                  <div className=' flex items-center gap-1 text-red-500'>
                    <PiChartLineDownLight />
                    <span>{`${Users}%`}</span>
                  </div>
              }
            </div>
          </div>
        </div>
        <div className=' flex flex-col gap-2 border-t border-t-gray-200 md:border-t-0  md:border-e border-e-gray-200  p-4 md:p-0  md:px-4'>
          <div className=' flex items-center gap-2'>
            <IoWarning className=' p-1 bg-red-500 shadow shadow-red-500 text-white rounded-md' size={20} />
            <span className=' font-medium'>Complaints</span>
          </div>
          <div className=' flex items-end justify-between'>
            <span className=' text-4xl'>100</span>
            <div>
              {
                Users >= 0 ?
                  <div className=' flex items-center gap-1 text-green-500'>
                    <PiChartLineUpLight />
                    <span>{`${Users}%`}</span>
                  </div> :
                  <div className=' flex items-center gap-1 text-red-500'>
                    <PiChartLineDownLight />
                    <span>{`${Users}%`}</span>
                  </div>
              }
            </div>
          </div>
        </div>
        <div className=' flex flex-col gap-2 md:border-t-0 border-t border-t-gray-200  items-stretch  p-4 md:p-0  md:px-4'>
          <div className=' flex items-center gap-2'>
            <MdOutlineCurrencyRupee className=' p-1 bg-orange-500 shadow shadow-orange-500 text-white rounded-md' size={20} />
            <span className=' font-medium'>Revenue</span>
          </div>
          <div className=' flex items-end justify-between'>
            <span className=' text-4xl'>100</span>
            <div>
              {
                Users >= 0 ?
                  <div className=' flex items-center gap-1 text-green-500'>
                    <PiChartLineUpLight />
                    <span>{`${Users}%`}</span>
                  </div> :
                  <div className=' flex items-center gap-1 text-red-500'>
                    <PiChartLineDownLight />
                    <span>{`${Users}%`}</span>
                  </div>
              }
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className=' flex items-center justify-between px-4 py-1'>
          <h1 className=' text-xl font-medium'>Order Statistics</h1>
          <input
            type='date'
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className=' border border-gray-300 rounded-md focus:outline-orange-400 p-1 text-gray-500'
          />
        </div>
        <div className=' grid grid-cols-2 sm:grid-cols-3 gap-3 p-3'>
          <div className=' rounded-md border border-gray-200 flex items-center gap-4 p-3'>
              <PiCookingPotFill size={40} className=' bg-indigo-200 text-indigo-500 p-2 rounded-full '/>
              <div className=' flex flex-col'>
                <span className=' text-sm'>Process</span>
                <span className=' text-lg font-medium'>0</span>
              </div>
          </div>
          <div className=' rounded-md border border-gray-200 flex items-center gap-4 p-3'>
              <GiCardboardBox size={40} className=' bg-green-200 text-green-500 p-2 rounded-full '/>
              <div className=' flex flex-col'>
                <span className=' text-sm'>Delivered</span>
                <span className=' text-lg font-medium'>0</span>
              </div>
          </div>
          <div className=' rounded-md border border-gray-200 flex items-center gap-4 p-3'>
              <FcCancel size={40} className=' bg-red-200 text-red-500 p-2 rounded-full '/>
              <div className=' flex flex-col'>
                <span className=' text-sm'>Cancelled</span>
                <span className=' text-lg font-medium'>0</span>
              </div>
          </div>
          <div className=' rounded-md border border-gray-200 flex items-center gap-4 p-3'>
              <MdOutlineCancel  size={40} className=' bg-pink-200 text-pink-500 p-2 rounded-full '/>
              <div className=' flex flex-col'>
                <span className=' text-sm'>Rejected</span>
                <span className=' text-lg font-medium'>0</span>
              </div>
          </div>
          <div className=' rounded-md border border-gray-200 flex items-center gap-4 p-3'>
              <ImUndo2 size={40} className=' bg-blue-200 text-blue-500 p-2 rounded-full '/>
              <div className=' flex flex-col'>
                <span className=' text-sm'>Returned</span>
                <span className=' text-lg font-medium'>0</span>
              </div>
          </div>
          <div className=' rounded-md border border-gray-200 flex items-center gap-4 p-3'>
              <RiMapPinTimeFill size={40} className=' bg-yellow-200 text-yellow-500 p-2 rounded-full '/>
              <div className=' flex flex-col'>
                <span className=' text-sm'>Pending</span>
                <span className=' text-lg font-medium'>0</span>
              </div>
          </div>
        </div>
      </div>
      <div className=' w-full px-4'>
        <Dashboard />
      </div>
    </div>
  )
}

export default AdminDashboard
