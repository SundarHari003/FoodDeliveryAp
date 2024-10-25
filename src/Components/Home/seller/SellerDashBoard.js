import React, { useState } from 'react'
import { FcCancel } from 'react-icons/fc'
import { GiCardboardBox } from 'react-icons/gi'
import { ImUndo2 } from 'react-icons/im'
import { MdOutlineCancel } from 'react-icons/md'
import { PiCookingPotFill } from 'react-icons/pi'
import { RiMapPinTimeFill } from 'react-icons/ri'
import { FaDollarSign, FaUser } from 'react-icons/fa';
import { MdDateRange } from 'react-icons/md';
import { AiOutlineUser } from 'react-icons/ai';
import { RiSecurePaymentFill } from 'react-icons/ri';
import { MdToday } from 'react-icons/md';
import { AiOutlineCalendar } from 'react-icons/ai';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer
} from 'recharts';
import { BsCalendar2MonthFill } from 'react-icons/bs'
const SellerDashBoard = () => {
  const data = [
    { year: 2023, month: 'Jan', totalOrders: 400, deliveredOrders: 240 },
    { year: 2023, month: 'Feb', totalOrders: 300, deliveredOrders: 220 },
    { year: 2023, month: 'Mar', totalOrders: 500, deliveredOrders: 340 },
    { year: 2023, month: 'Apr', totalOrders: 450, deliveredOrders: 320 },
    { year: 2023, month: 'May', totalOrders: 470, deliveredOrders: 350 },
    { year: 2023, month: 'Jun', totalOrders: 520, deliveredOrders: 380 },
    { year: 2023, month: 'Jul', totalOrders: 600, deliveredOrders: 420 },
    { year: 2023, month: 'Aug', totalOrders: 700, deliveredOrders: 480 },
    { year: 2023, month: 'Sep', totalOrders: 800, deliveredOrders: 550 },
    { year: 2023, month: 'Oct', totalOrders: 850, deliveredOrders: 580 },
    { year: 2023, month: 'Nov', totalOrders: 900, deliveredOrders: 620 },
    { year: 2023, month: 'Dec', totalOrders: 950, deliveredOrders: 680 },

    { year: 2024, month: 'Jan', totalOrders: 420, deliveredOrders: 260 },
    { year: 2024, month: 'Feb', totalOrders: 320, deliveredOrders: 240 },
    { year: 2024, month: 'Mar', totalOrders: 540, deliveredOrders: 380 },
    { year: 2024, month: 'Apr', totalOrders: 470, deliveredOrders: 350 },
    { year: 2024, month: 'May', totalOrders: 490, deliveredOrders: 370 },
    { year: 2024, month: 'Jun', totalOrders: 550, deliveredOrders: 410 },
    { year: 2024, month: 'Jul', totalOrders: 620, deliveredOrders: 450 },
    { year: 2024, month: 'Aug', totalOrders: 720, deliveredOrders: 510 },
    { year: 2024, month: 'Sep', totalOrders: 820, deliveredOrders: 570 },
    { year: 2024, month: 'Oct', totalOrders: 870, deliveredOrders: 600 },
    { year: 2024, month: 'Nov', totalOrders: 920, deliveredOrders: 640 },
    { year: 2024, month: 'Dec', totalOrders: 970, deliveredOrders: 700 },
  ];

  const [selectedYear, setSelectedYear] = useState(2023);

  const filteredData = data.filter(item => item.year === selectedYear);
  const [date, setDate] = useState(new Date())
  // Example state for selected date, month, and year
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedMonth, setSelectedMonth] = useState("");
  const [selectedYears, setSelectedYears] = useState("");

  // Example revenue data (you can replace these with real data)
  const todayRevenue = 120.50;
  const monthlyRevenue = 1500.75;
  const yearlyRevenue = 18000.00;
  const totalRevenue = 55000.00;

  const paymentAmount = 100.00;
  const subscriptionDate = "2024-08-15";
  const membershipType = "Premium";
  const expirationDate = "2025-08-15";

  return (
    <div>
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
            <PiCookingPotFill size={40} className=' bg-indigo-200 text-indigo-500 p-2 rounded-full ' />
            <div className=' flex flex-col'>
              <span className=' text-sm'>Process</span>
              <span className=' text-lg font-medium'>0</span>
            </div>
          </div>
          <div className=' rounded-md border border-gray-200 flex items-center gap-4 p-3'>
            <GiCardboardBox size={40} className=' bg-green-200 text-green-500 p-2 rounded-full ' />
            <div className=' flex flex-col'>
              <span className=' text-sm'>Delivered</span>
              <span className=' text-lg font-medium'>0</span>
            </div>
          </div>
          <div className=' rounded-md border border-gray-200 flex items-center gap-4 p-3'>
            <FcCancel size={40} className=' bg-red-200 text-red-500 p-2 rounded-full ' />
            <div className=' flex flex-col'>
              <span className=' text-sm'>Cancelled</span>
              <span className=' text-lg font-medium'>0</span>
            </div>
          </div>
          <div className=' rounded-md border border-gray-200 flex items-center gap-4 p-3'>
            <MdOutlineCancel size={40} className=' bg-pink-200 text-pink-500 p-2 rounded-full ' />
            <div className=' flex flex-col'>
              <span className=' text-sm'>Rejected</span>
              <span className=' text-lg font-medium'>0</span>
            </div>
          </div>
          <div className=' rounded-md border border-gray-200 flex items-center gap-4 p-3'>
            <ImUndo2 size={40} className=' bg-blue-200 text-blue-500 p-2 rounded-full ' />
            <div className=' flex flex-col'>
              <span className=' text-sm'>Returned</span>
              <span className=' text-lg font-medium'>0</span>
            </div>
          </div>
          <div className=' rounded-md border border-gray-200 flex items-center gap-4 p-3'>
            <RiMapPinTimeFill size={40} className=' bg-yellow-200 text-yellow-500 p-2 rounded-full ' />
            <div className=' flex flex-col'>
              <span className=' text-sm'>Pending</span>
              <span className=' text-lg font-medium'>0</span>
            </div>
          </div>
        </div>
      </div>
      <div>
        <h1 className=' font-medium text-xl p-3'>Revenue</h1>
        <div className="grid grid-cols-1 sm:grid-cols-4 gap-3 p-3">

          {/* Today's Revenue */}
          <div className='rounded-md border border-gray-200 flex flex-col p-3'>
            <div className='flex items-center gap-4'>
              {/* <MdToday size={40} className='bg-blue-200 text-blue-500 p-2 rounded-full' /> */}
              <div className='flex flex-col'>
                <span className='text-sm'>Today's Revenue</span>
                <span className='text-lg font-medium'>${todayRevenue.toFixed(2)}</span>
              </div>
            </div>
            <input
              type="date"
              className="mt-2 border rounded-md p-2 text-sm focus:outline-orange-400"
              value={selectedDate}
              onChange={(e) => setSelectedDate(e.target.value)}
            />
          </div>

          {/* Monthly Revenue */}
          <div className='rounded-md border border-gray-200 flex flex-col p-3'>
            <div className='flex items-center gap-4'>
              {/* <BsCalendar2MonthFill size={40} className='bg-green-200 text-green-500 p-2 rounded-2xl' /> */}
              <div className='flex flex-col'>
                <span className='text-sm'>Monthly Revenue</span>
                <span className='text-lg font-medium'>${monthlyRevenue.toFixed(2)}</span>
              </div>
            </div>
            <input
              type="month"
              className="mt-2 border rounded-md p-2 text-sm focus:outline-orange-400"
              value={selectedMonth}
              onChange={(e) => setSelectedMonth(e.target.value)}
            />
          </div>

          {/* Yearly Revenue */}
          <div className='rounded-md border border-gray-200 flex flex-col p-3'>
            <div className='flex items-center gap-4'>
              {/* <AiOutlineCalendar size={40} className='bg-yellow-200 text-yellow-500 p-2 rounded-full' /> */}
              <div className='flex flex-col'>
                <span className='text-sm'>Yearly Revenue</span>
                <span className='text-lg font-medium'>${yearlyRevenue.toFixed(2)}</span>
              </div>
            </div>
            <input
              type="number"
              min="2000"
              max="2099"
              step="1"
              className="mt-2 border rounded-md p-2 text-sm focus:outline-orange-400"
              value={selectedYear}
              onChange={(e) => setSelectedYear(e.target.value)}
            />
          </div>

          {/* Total Revenue */}
          <div className='rounded-md border border-gray-200 flex flex-col  items-center justify-center p-3'>
            <div className='flex items-center gap-4'>
              {/* <FaDollarSign size={40} className='bg-red-200 text-red-500 p-2 rounded-full' /> */}
              <div className='flex flex-col'>
                <span className='text-base'>Total Revenue</span>
                <span className='text-3xl font-medium'>${totalRevenue.toFixed(2)}</span>
              </div>
            </div>
          </div>

        </div>
      </div>
      <div>
        <h1 className=' text-lg font-medium p-3'>Payment</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 px-3">

          {/* Payment Amount */}
          <div className='rounded-md border border-gray-200 flex items-center gap-4 p-3'>
            <FaDollarSign size={40} className='bg-green-200 text-green-500 p-2 rounded-full' />
            <div className='flex flex-col'>
              <span className='text-sm font-medium text-gray-700'>Payment Amount</span>
              <span className='text-lg font-bold text-gray-900'>${paymentAmount.toFixed(2)}</span>
            </div>
          </div>

          {/* Subscription Date */}
          <div className='rounded-md border border-gray-200 flex items-center gap-4 p-3'>
            <MdDateRange size={40} className='bg-blue-200 text-blue-500 p-2 rounded-full' />
            <div className='flex flex-col'>
              <span className='text-sm font-medium text-gray-700'>Subscription Date</span>
              <span className='text-lg font-bold text-gray-900'>{subscriptionDate}</span>
            </div>
          </div>

          {/* Membership Type */}
          <div className='rounded-md border border-gray-200 flex items-center gap-4 p-3'>
            <FaUser size={40} className='bg-yellow-200 text-yellow-500 p-2 rounded-full' />
            <div className='flex flex-col'>
              <span className='text-sm font-medium text-gray-700'>Membership Type</span>
              <span className='text-lg font-bold text-gray-900'>{membershipType}</span>
            </div>
          </div>

          {/* Expiration Date */}
          <div className='rounded-md border border-gray-200 flex items-center gap-4 p-3'>
            <MdDateRange size={40} className='bg-red-200 text-red-500 p-2 rounded-full' />
            <div className='flex flex-col'>
              <span className='text-sm font-medium text-gray-700'>Expiration Date</span>
              <span className='text-lg font-bold text-gray-900'>{expirationDate}</span>
            </div>
          </div>

          {/* Payment Button */}
          <div className='col-span-full flex justify-center'>
            <button
              onClick={() => alert('Redirecting to payment...')}
              className="w-full sm:w-auto bg-blue-500 text-white font-bold py-3 px-6 rounded hover:bg-blue-700"
            >
              Proceed to Pay
            </button>
          </div>
        </div>
      </div>
      <div>
        <div className=' flex justify-between items-center p-3'>
          <h2 className=' font-medium text-lg'>Monthly Orders for {selectedYear}</h2>
          <select onChange={(e) => setSelectedYear(parseInt(e.target.value))} value={selectedYear}>
            <option value={2023}>2023</option>
            <option value={2024}>2024</option>
            {/* Add more years as needed */}
          </select>
        </div>

        <ResponsiveContainer width="100%" height={400}>
          <LineChart
            data={filteredData}
            margin={{
              top: 5, right: 30, left: 20, bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="totalOrders" stroke="#8884d8" activeDot={{ r: 8 }} />
            <Line type="monotone" dataKey="deliveredOrders" stroke="#82ca9d" />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}

export default SellerDashBoard
