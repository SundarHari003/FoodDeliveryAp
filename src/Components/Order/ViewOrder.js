import React from 'react'
import { useNavigate } from 'react-router-dom';
const dummyData = [
    {
        id: 1,
        image: 'path/to/image1.jpg',
        name: 'Biriyani',
        restaurant: 'Seller Restaurant 1',
        quantity: 10,
        totalCost: 3000
    },
    {
        id: 2,
        image: 'path/to/image2.jpg',
        name: 'Paneer Tikka',
        restaurant: 'Seller Restaurant 2',
        quantity: 5,
        totalCost: 1500
    },
    {
        id: 3,
        image: 'path/to/image3.jpg',
        name: 'Butter Chicken',
        restaurant: 'Seller Restaurant 3',
        quantity: 7,
        totalCost: 2100
    },
    {
        id: 4,
        image: 'path/to/image4.jpg',
        name: 'Chole Bhature',
        restaurant: 'Seller Restaurant 4',
        quantity: 12,
        totalCost: 2400
    },
    {
        id: 5,
        image: 'path/to/image5.jpg',
        name: 'Pasta',
        restaurant: 'Seller Restaurant 5',
        quantity: 8,
        totalCost: 1600
    },
    {
        id: 6,
        image: 'path/to/image6.jpg',
        name: 'Pizza',
        restaurant: 'Seller Restaurant 6',
        quantity: 6,
        totalCost: 1800
    }
];

const ViewOrder = () => {
    const navigate=useNavigate()
    return (
        <div className=' p-3 bg-gray-50'>
            <div className=' flex items-center justify-between '>
                <button type='button' className=' text-white bg-orange-500 hover:bg-orange-300 px-2 py-1 rounded-md shadow-sm shadow-orange-100' onClick={()=>navigate("/OrderHistory")}> Go Back</button>
                <div className=' flex gap-2 items-center'>
                    <h1 className='text-lg md:text-2xl font-medium '>Order ID :12312321141413</h1>
                    <span className='font-medium rounded-full text-green-600 bg-green-100 px-1 md:px-2 md:py-1'>Delivered</span>
                </div>
            </div>
            <div className=' py-3 '>
                <span className=' text-lg font-medium'>Customer Details</span>
                <div className='grid grid-cols-1 md:grid-cols-2 p-3 my-3 gap-4 md:gap-0 border border-gray-200 rounded-md bg-white shadow-md'>
                    <div className=' grid grid-cols-1 gap-2  border-e-0 md:border-e border-b px-4 md:border-b-0 border-b-gray-200 border-e-gray-200'>
                        <div className=' grid grid-cols-2'>
                            <span className=' font-medium'>Name</span>
                            <span>hari sundar</span>
                        </div>
                        <div className=' grid grid-cols-2 text-wrap'>
                            <span className=' font-medium'>Email</span>
                            <span className=' text-ellipsis w-64'>sundarhari.it19@gmail.com</span>
                        </div>
                        <div className=' grid grid-cols-2'>
                            <span className=' font-medium'>Order Date</span>
                            <span>hari sundar</span>
                        </div>
                        <div className=' grid grid-cols-2'>
                            <span className=' font-medium'>No of Product</span>
                            <span>10</span>
                        </div>
                    </div>
                    <div className=' px-4 grid grid-cols-1 gap-2'>
                        <div className=' grid grid-cols-2'>
                            <span className=' font-medium '>Payment</span>
                            <span>card</span>
                        </div>
                        <div className=' grid grid-cols-2'>
                            <span className=' font-medium'>DeliveryFees</span>
                            <span>0</span>
                        </div>
                        <div className=' grid grid-cols-2'>
                            <span className=' font-medium'>Total Seller</span>
                            <span>1</span>
                        </div>
                        <div className=' grid grid-cols-2'>
                            <span className=' font-medium'>Total Cost</span>
                            <span>10000</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className=' pb-3'>
                <span className=' text-lg font-medium'>Ordered Items</span>
                <div className=' grid grid-cols-1 md:grid-cols-2 gap-3 py-3'>
                    {dummyData.map(item => (
                        <div key={item.id} className='flex items-center justify-between flex-wrap border border-gray-200 p-3 bg-white rounded-md'>
                            <div className='flex items-center gap-3'>
                                <span className='bg-slate-400 w-20 h-20 rounded-md'>
                                    <img src={item.image} alt={item.name} className='w-full h-full object-cover rounded-md' />
                                </span>
                                <div className='grid grid-cols-1 gap-2'>
                                    <span className='font-medium text-sm md:text-base'>{item.name}</span>
                                    <span className='text-sm'>{item.restaurant}</span>
                                    <span className='text-sm'>{item.quantity}</span>
                                </div>
                            </div>
                            <div className=' pt-3 sm:pt-0'>
                                <div className='grid grid-cols-2 gap-2'>
                                    <span className='font-medium text-sm md:text-base'>Quantity</span>
                                    <span>{item.quantity}</span>
                                </div>
                                <div className='grid grid-cols-2 gap-2'>
                                    <span className='font-medium text-sm md:text-base'>Total Cost</span>
                                    <span>{item.totalCost}</span>
                                </div>
                            </div>
                        </div>
                    ))}

                </div>
            </div>
            <div>
                <span className=' text-lg font-medium'>Order Summary</span>
                <div className=' border border-gray-200 bg-white rounded-md p-3 px-10 my-3 grid grid-cols-1 gap-3'>
                    <div className=' grid grid-cols-3'>
                        <span className=' font-medium text-gray-400'>Sub Total</span>
                        <span className=' text-center'>3 items</span>
                        <span className=' font-medium text-end'>8000</span>
                    </div>
                    <div className=' grid grid-cols-3 '>
                        <span className=' font-medium text-gray-400'>Discount</span>
                        <span className=' text-center'>10%</span>
                        <span className=' font-medium text-end'>7200</span>
                    </div>
                    <div className=' grid grid-cols-3'>
                        <span className=' font-medium text-gray-400'>Delivery Fees</span>
                        <span></span>
                        <span className=' font-medium text-end'>300</span>
                    </div>
                    <div className=' grid grid-cols-3 border-t border-t-gray-200 py-2'>
                        <span className=' font-medium text-lg'>Total</span>
                        <span></span>
                        <span className=' font-medium text-lg text-end'>7500</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ViewOrder
