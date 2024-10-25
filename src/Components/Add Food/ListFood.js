import React, { useState } from 'react';
import { IoSearch } from 'react-icons/io5';
import { PiSortAscending } from "react-icons/pi";
import { PiSortDescending } from "react-icons/pi";
import { FaFolderOpen } from 'react-icons/fa';
import { HiTrash } from "react-icons/hi2";
import { useNavigate } from 'react-router-dom';
import { TfiBrushAlt } from 'react-icons/tfi';
import Pagination from '../Layout/Pagination';
import { BiSolidMessageSquareEdit } from "react-icons/bi";
const dummyFoodData = [
    {
        food: "Margherita Pizza",
        categories: "Italian",
        quantity: 20,
        offer: "10% off",
        price: "$12.99"
    },
    {
        food: "Caesar Salad",
        categories: "Salad",
        quantity: 15,
        offer: "5% off",
        price: "$8.50"
    },
    {
        food: "Tandoori Chicken",
        categories: "Indian",
        quantity: 30,
        offer: "15% off",
        price: "$10.00"
    },
    {
        food: "Sushi Platter",
        categories: "Japanese",
        quantity: 25,
        offer: "20% off",
        price: "$18.99"
    },
    {
        food: "Cheeseburger",
        categories: "American",
        quantity: 40,
        offer: "10% off",
        price: "$9.99"
    },
    {
        food: "Pad Thai",
        categories: "Thai",
        quantity: 10,
        offer: "No Offer",
        price: "$14.50"
    },
    {
        food: "Vegetable Stir-fry",
        categories: "Chinese",
        quantity: 50,
        offer: "10% off",
        price: "$7.99"
    },
    {
        food: "Greek Yogurt",
        categories: "Dairy",
        quantity: 35,
        offer: "5% off",
        price: "$4.99"
    },
    {
        food: "Chocolate Cake",
        categories: "Dessert",
        quantity: 12,
        offer: "20% off",
        price: "$6.50"
    },
    {
        food: "Falafel Wrap",
        categories: "Middle Eastern",
        quantity: 22,
        offer: "No Offer",
        price: "$8.00"
    }
];

const TABLE_HEAD = ["Food", "Categories", "Quantity", "Offer", "Price", "Action"];

const FoodListTable = () => {
    const [filter, setFilter] = useState("");
    const [showIcons, setShowIcons] = useState(false);
    const [OrderArrange, setOrderArrange] = useState(false);
    const navigate = useNavigate();
    const [currentPage, setCurrentPage] = useState(1);
    // const [itemsPerPage, setItemperPage] = useState(5); // Number of items per page
    const itemsPerPage=5;

    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const currentData = dummyFoodData.slice(startIndex, endIndex);
    const handleFilterSearch = (e) => {
        setFilter(e.target.value);
    };

    return (
        <div className=' p-3'>
            <div className=''>
                <div className=' flex items-center justify-end py-3'>
                    <button type="button" className=' px-2 py-1 bg-orange-400 rounded-md shadow-sm shadow-orange-100 hover:bg-orange-300 text-white'onClick={()=>navigate("/AddFood")}>+ Add Food</button>
                </div>
                <div className='flex items-center justify-between gap-2 pt-3'>
                    <span className=' text-2xl font-medium text-gray-500'>Food List</span>
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
            </div>
            <div className="py-4 rounded-md w-full">
                <div className="overflow-x-auto rounded-md">
                    <table className="min-w-full bg-white border border-gray-200 shadow-md rounded-md">
                        <thead className="">
                            <tr className='bg-gray-100 rounded-md'>
                                {TABLE_HEAD.map((head, index) => (
                                    <th key={index} className={`p-4  ${index != 0 ? "text-center" : "text-left"} text-xs font-medium text-gray-500 uppercase tracking-wider`}>
                                        {head}
                                    </th>
                                ))}
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                            {currentData.map((data, index) => (
                                <tr key={index}>
                                    <td className="p-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                        {data.food}
                                    </td>
                                    <td className="p-4 text-center whitespace-nowrap text-sm text-gray-500">
                                        {data.categories}
                                    </td>
                                    <td className="p-4 text-center whitespace-nowrap text-sm text-gray-500">
                                        {data.quantity}
                                    </td>
                                    <td className="p-4 text-center whitespace-nowrap text-sm text-gray-500">
                                        {data.offer}
                                    </td>
                                    <td className="p-4 text-center whitespace-nowrap text-sm text-gray-500">
                                        {data.price}
                                    </td>
                                    <td className="p-4 text-center flex items-center justify-center whitespace-nowrap text-sm text-gray-500">
                                        <div className='flex items-center gap-3'>
                                            <BiSolidMessageSquareEdit className='cursor-pointer text-gray-400 hover:text-blue-500' size={20} onClick={() => navigate("/UpdateFood")} />
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
                        totalItems={dummyFoodData.length}
                        itemsPerPage={itemsPerPage}
                        currentPage={currentPage}
                        onPageChange={(page) => setCurrentPage(page)}
                    />
                </div>
            </div>
        </div>
    );
}

export default FoodListTable;
