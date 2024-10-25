import React, { useState } from 'react'
import { IoSearch } from 'react-icons/io5'
import { PiSortAscending } from "react-icons/pi";
import { TfiBrushAlt } from "react-icons/tfi";
import { PiSortDescending } from "react-icons/pi";
import { FaFolderOpen } from 'react-icons/fa';
import { HiTrash } from "react-icons/hi2";
import Pagination from '../Layout/Pagination';
import { useNavigate } from 'react-router-dom';

const dummyData = [
    {
        orderId: "#430011564329",
        customerName: "George Anderson",
        total: "$40,000",
        status: "Delivered",
        time: "12 Jun, 2024",
        deliveryFees: "Free",
        Payment: "Card",
        action: "Unfulfilled",
    },
    {
        orderId: "#238765436758",
        customerName: "Lawrence Hughes",
        total: "$20,000",
        status: "Returned",
        time: "13 Jun, 2024",
        deliveryFees: "Free",
        Payment: "Card",
        action: "Fulfilled",
    },
    {
        orderId: "#148765436735",
        customerName: "Thomas Mitchell",
        total: "$20,000",
        status: "Cancelled",
        time: "14 Jun, 2024",
        deliveryFees: "Free",
        Payment: "Cash",
        action: "Fulfilled",
    },
    {
        orderId: "#347892345623",
        customerName: "Frederick Lawson",
        total: "$20,000",
        status: "Delivered",
        time: "15 Jun, 2024",
        deliveryFees: "Free",
        Payment: "Card",
        action: "Unfulfilled",
    },
    {
        orderId: "#987623456126",
        customerName: "William Davenport",
        total: "$20,000",
        status: "Delivered",
        time: "13 Jul, 2024",
        deliveryFees: "Free",
        Payment: "N/A",
        action: "Fulfilled",
    },
    {
        orderId: "#654327895432",
        customerName: "Michael Harrington",
        total: "$20,000",
        status: "Delivered",
        time: "14 Jul, 2024",
        deliveryFees: "$50",
        Payment: "Cash",
        action: "Unfulfilled",
    },
    {
        orderId: "#543219876543",
        customerName: "Jonathan Turner",
        total: "$20,000",
        status: "Returned",
        time: "15 Jul, 2024",
        deliveryFees: "$100",
        Payment: "Card",
        action: "Fulfilled",
    },
    {
        orderId: "#138765346755",
        customerName: "Christopher Morgan",
        total: "$20,000",
        status: "Cancelled",
        time: "20 Jul, 2024",
        deliveryFees: "Free",
        Payment: "Card",
        action: "Unfulfilled",
    },
    {
        orderId: "#381232358976",
        customerName: "Nicholas Reynolds",
        total: "$30,000",
        status: "Cancelled",
        time: "20 Oct, 2024",
        deliveryFees: "$150",
        Payment: "Cash",
        action: "Fulfilled",
    },
    {
        orderId: "#655477125694",
        customerName: "Alexander Bennett",
        total: "$10,000",
        status: "Returned",
        time: "16 Nov, 2024",
        deliveryFees: "Free",
        Payment: "Cash",
        action: "Fulfilled",
    },
    {
        orderId: "#923876123543",
        customerName: "Jane Doe",
        total: "$50,000",
        status: "Delivered",
        time: "02 Aug, 2024",
        deliveryFees: "$200",
        Payment: "Cash",
        action: "Unfulfilled",
    },
    {
        orderId: "#234567890123",
        customerName: "John Smith",
        total: "$15,000",
        status: "Returned",
        time: "22 Aug, 2024",
        deliveryFees: "Free",
        Payment: "Cash",
        action: "Fulfilled",
    },
    {
        orderId: "#678901234567",
        customerName: "Emily Watson",
        total: "$25,000",
        status: "Delivered",
        time: "12 Sep, 2024",
        deliveryFees: "$75",
        Payment: "Cash",
        action: "Unfulfilled",
    },
    {
        orderId: "#890123456789",
        customerName: "Michael Jordan",
        total: "$35,000",
        status: "Returned",
        time: "30 Sep, 2024",
        deliveryFees: "$120",
        Payment: "Cash",
        action: "Fulfilled",
    },
    {
        orderId: "#123456789012",
        customerName: "Sarah Connor",
        total: "$22,000",
        status: "Delivered",
        time: "10 Oct, 2024",
        deliveryFees: "Free",
        Payment: "Cash",
        action: "Unfulfilled",
    },
    {
        orderId: "#890123456789",
        customerName: "Michael Jordan",
        total: "$35,000",
        status: "Returned",
        time: "30 Sep, 2024",
        deliveryFees: "$120",
        Payment: "Cash",
        action: "Fulfilled",
    },
    {
        orderId: "#123456789012",
        customerName: "Sarah Connor",
        total: "$22,000",
        status: "Delivered",
        time: "10 Oct, 2024",
        deliveryFees: "Free",
        Payment: "Cash",
        action: "Unfulfilled",
    },
    {
        orderId: "#890123456789",
        customerName: "Michael Jordan",
        total: "$35,000",
        status: "Returned",
        time: "30 Sep, 2024",
        deliveryFees: "$120",
        Payment: "Cash",
        action: "Fulfilled",
    },
    {
        orderId: "#123456789012",
        customerName: "Sarah Connor",
        total: "$22,000",
        status: "Delivered",
        time: "10 Oct, 2024",
        deliveryFees: "Free",
        Payment: "Cash",
        action: "Unfulfilled",
    },
    {
        orderId: "#890123456789",
        customerName: "Michael Jordan",
        total: "$35,000",
        status: "Returned",
        time: "30 Sep, 2024",
        deliveryFees: "$120",
        Payment: "Cash",
        action: "Fulfilled",
    },
    {
        orderId: "#123456789012",
        customerName: "Sarah Connor",
        total: "$22,000",
        status: "Delivered",
        time: "10 Oct, 2024",
        deliveryFees: "Free",
        Payment: "Cash",
        action: "Unfulfilled",
    },
    {
        orderId: "#890123456789",
        customerName: "Michael Jordan",
        total: "$35,000",
        status: "Returned",
        time: "30 Sep, 2024",
        deliveryFees: "$120",
        Payment: "Cash",
        action: "Fulfilled",
    },
    {
        orderId: "#123456789012",
        customerName: "Sarah Connor",
        total: "$22,000",
        status: "Delivered",
        time: "10 Oct, 2024",
        deliveryFees: "Free",
        Payment: "Cash",
        action: "Unfulfilled",
    },
    {
        orderId: "#890123456789",
        customerName: "Michael Jordan",
        total: "$35,000",
        status: "Returned",
        time: "30 Sep, 2024",
        deliveryFees: "$120",
        Payment: "Cash",
        action: "Fulfilled",
    },
    {
        orderId: "#123456789012",
        customerName: "Sarah Connor",
        total: "$22,000",
        status: "Delivered",
        time: "10 Oct, 2024",
        deliveryFees: "Free",
        Payment: "Cash",
        action: "Unfulfilled",
    },
    {
        orderId: "#890123456789",
        customerName: "Michael Jordan",
        total: "$35,000",
        status: "Returned",
        time: "30 Sep, 2024",
        deliveryFees: "$120",
        Payment: "Cash",
        action: "Fulfilled",
    },
    {
        orderId: "#123456789012",
        customerName: "Sarah Connor",
        total: "$22,000",
        status: "Delivered",
        time: "10 Oct, 2024",
        deliveryFees: "Free",
        Payment: "Cash",
        action: "Unfulfilled",
    },
    {
        orderId: "#890123456789",
        customerName: "Michael Jordan",
        total: "$35,000",
        status: "Returned",
        time: "30 Sep, 2024",
        deliveryFees: "$120",
        Payment: "Cash",
        action: "Fulfilled",
    },
    {
        orderId: "#123456789012",
        customerName: "Sarah Connor",
        total: "$22,000",
        status: "Delivered",
        time: "10 Oct, 2024",
        deliveryFees: "Free",
        Payment: "Cash",
        action: "Unfulfilled",
    },
    {
        orderId: "#890123456789",
        customerName: "Michael Jordan",
        total: "$35,000",
        status: "Returned",
        time: "30 Sep, 2024",
        deliveryFees: "$120",
        Payment: "Cash",
        action: "Fulfilled",
    },
    {
        orderId: "#123456789012",
        customerName: "Sarah Connor",
        total: "$22,000",
        status: "Delivered",
        time: "10 Oct, 2024",
        deliveryFees: "Free",
        Payment: "Cash",
        action: "Unfulfilled",
    },
    {
        orderId: "#890123456789",
        customerName: "Michael Jordan",
        total: "$35,000",
        status: "Returned",
        time: "30 Sep, 2024",
        deliveryFees: "$120",
        Payment: "Cash",
        action: "Fulfilled",
    },
    {
        orderId: "#123456789012",
        customerName: "Sarah Connor",
        total: "$22,000",
        status: "Delivered",
        time: "10 Oct, 2024",
        deliveryFees: "Free",
        Payment: "Cash",
        action: "Unfulfilled",
    }
];
const TABLE_HEAD = ["Order ID", "Customer Name", "Payment", "Status", "Date", "Delivery Fees", "Total", "Action"]

const OrderHistoryTable = () => {
    const [statusFilter, setStatusFilter] = useState("All")
    const [filter, setFilter] = useState("")
    const [showIcons, setShowIcons] = useState(false)
    const [OrderArrange, setOrderArrange] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    // const [itemsPerPage, setItemperPage] = useState(5); // Number of items per page
    const itemsPerPage=5;
    const navigate=useNavigate();

    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const currentData = dummyData.slice(startIndex, endIndex);
    const handleFilterSearch = (e) => {
        setFilter(e.target.value)
    }
    const handleStatusFilter = (status) => {
        setStatusFilter(status)
    }

    return (
        <div>
            <div className=' flex items-center justify-between'>
                <div className=' bg-gray-100 rounded-lg flex items-center gap-5 p-1 my-3'>
                    <span onClick={() => handleStatusFilter("All")} className={` font-medium text-sm transition-all duration-150 rounded-lg cursor-pointer hover:text-black px-2 py-1 ${statusFilter == "All" ? " bg-white text-black" : " text-gray-500"}`}>All</span>
                    <span onClick={() => handleStatusFilter("Delivered")} className={` font-medium text-sm transition-all duration-150 rounded-lg cursor-pointer hover:text-black px-2 py-1 ${statusFilter == "Delivered" ? " bg-white text-black" : " text-gray-500"}`}>Delivered</span>
                    <span onClick={() => handleStatusFilter("Cancelled")} className={` font-medium text-sm transition-all duration-150 rounded-lg cursor-pointer hover:text-black px-2 py-1 ${statusFilter == "Cancelled" ? " bg-white text-black" : " text-gray-500"}`}>Cancelled</span>
                    <span onClick={() => handleStatusFilter("Returned")} className={` font-medium text-sm transition-all duration-150 rounded-lg cursor-pointer hover:text-black px-2 py-1 ${statusFilter == "Returned" ? " bg-white text-black" : " text-gray-500"}`}>Returned</span>
                </div>
                <div className='flex items-center gap-2'>
                    <div className=' flex items-center gap-2'>
                        <input
                            type='text'
                            value={filter}
                            onChange={(e) => handleFilterSearch(e)}
                            placeholder='search name'
                            className={`  transition-all duration-200 focus:outline-orange-400 ${showIcons ? "w-40  rounded-md border border-gray-200 p-[0.282rem]" : "w-0"} `} />
                        <label className=' hover:bg-gray-100 rounded-md p-1 cursor-pointer border border-gray-200' onClick={() => setShowIcons(!showIcons)}><IoSearch className=' text-gray-500' size={25} /></label>
                    </div>
                    <div>
                        {
                            OrderArrange ?
                                <PiSortAscending className='text-gray-500 hover:bg-gray-100 rounded-md p-1 cursor-pointer border border-gray-200' onClick={() => setOrderArrange(false)} size={35} /> :
                                <PiSortDescending className='text-gray-500 rounded-md p-1 hover:bg-gray-100 cursor-pointer border border-gray-200 ' onClick={() => setOrderArrange(true)} size={35} />
                        }
                    </div>
                    <TfiBrushAlt className='text-gray-500 rounded-md p-1 cursor-pointer hover:bg-gray-100 border border-gray-200 ' size={35} />
                </div>
            </div>
            <div className=" py-4 rounded-md w-full">
                <div className="overflow-x-auto rounded-md">
                    <table className="min-w-full bg-white border border-gray-200 shadow-md  rounded-md">
                        <thead className="">
                            <tr className=' bg-gray-100 rounded-md'>
                                {
                                    TABLE_HEAD.map((head, index) => (
                                        <th key={index} className="p-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            {head}
                                        </th>
                                    ))
                                }

                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                            {currentData.map((data, index) => (
                                <tr key={index}>
                                    <td className="p-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                        {data.orderId}
                                    </td>
                                    <td className="p-4 whitespace-nowrap text-sm text-gray-500">
                                        {data.customerName}
                                    </td>
                                    <td className="p-4 whitespace-nowrap text-sm text-gray-500">
                                        {data.Payment}
                                    </td>
                                    <td
                                        className={`p-1 px-5 w-fit rounded-full mt-2 flex items-center gap-2 whitespace-nowrap text-sm  ${data.status === "Delivered"
                                            ? "text-green-500 "
                                            : data.status === "Cancelled"
                                                ? "text-red-500 "
                                                : "text-sky-500 "
                                            }`}
                                    >
                                        <span className={` rounded-full h-2 w-2 ${data.status === "Delivered"
                                            ? "bg-green-500"
                                            : data.status === "Cancelled"
                                                ? "bg-red-500"
                                                : "bg-sky-500"
                                            }`}>.</span>
                                        <span className=' font-medium'>{`${data.status}`}</span>
                                    </td>
                                    <td className="p-4 whitespace-nowrap text-sm text-gray-500">
                                        {data.time}
                                    </td>
                                    <td className="p-4 whitespace-nowrap text-sm text-gray-500">
                                        {data.deliveryFees}
                                    </td>
                                    <td className="p-4 whitespace-nowrap text-sm text-gray-500">
                                        {data.total}
                                    </td>
                                    <td className="p-4 flex items-center justify-center whitespace-nowrap text-sm text-gray-500">
                                        <div className=' flex items-center gap-3'>
                                            <FaFolderOpen className=' cursor-pointer text-gray-400 hover:text-blue-500' size={20} onClick={()=>navigate("/ViewOrder")}/>
                                            <HiTrash className='cursor-pointer text-gray-400 hover:text-red-600' size={20} />
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <div className=' flex items-center w-full justify-between'>
                    <div className=' flex items-end gap-2 mt-3 w-[20%]'>
                        <span>Show PerPage</span>
                        <select className=' focus:outline-orange-400 rounded-md p-1 py-0 border border-gray-200'>
                        {/* // onChange={(e)=>setItemperPage(e.target.value)}> */}
                            <option value={5}>5</option>
                            <option value={10}>10</option>
                            <option value={15}>15</option>
                        </select>
                    </div>
                    <Pagination
                        className="w-[80%]"
                        totalItems={dummyData.length}
                        itemsPerPage={itemsPerPage}
                        currentPage={currentPage}
                        onPageChange={(page) => setCurrentPage(page)}
                    />
                </div>
            </div>
        </div>
    )
}

export default OrderHistoryTable
