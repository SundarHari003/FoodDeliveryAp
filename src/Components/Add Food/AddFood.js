import React, { useState } from "react";
import { MdOutlineDone } from "react-icons/md";
import { PiBowlFoodFill } from "react-icons/pi";
import { RiImageAddFill } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
const FoodAdd = () => {
  const [foodName, setFoodName] = useState("")
  const [FoodPrice, setFoodPrice] = useState("")
  const navigate = useNavigate()
  return (
    <div className=" p-3 bg-gray-50 bg-opacity-30">
      <div className=" flex items-center justify-between">
      <button type='button' className=' text-white bg-orange-500 hover:bg-orange-300 px-2 py-1 rounded-md shadow-sm shadow-orange-100' onClick={()=>navigate("/FoodList")}> Go Back</button>
        <div className=" flex gap-2 items-center text-gray-500 text-base sm:text-xl font-medium">
          <PiBowlFoodFill />
          <h1>Add Food Items</h1>
        </div>
        <button type=" button" className=" text-sm sm:text-base flex text-white items-center gap-2 bg-orange-500 rounded-md px-2 py-1 shadow-sm shadow-orange-200">
          <MdOutlineDone />
          <span>Add Food</span>
        </button>
      </div>
      <div className=" grid grid-cols-1 md:grid-cols-[60%,40%] gap-2 pt-3 pe-2 ">
        <div className=" grid grid-cols-1 gap-2">
          <div className=" border border-gray-200 rounded-md p-3 bg-white shadow-sm">
            <h1 className=" pt-1 pb-5 font-medium text-lg text-gray-700 ">Food Item Detail</h1>
            <div className=" grid grid-cols-1 gap-5">
              <div className=" grid grid-cols-1 gap-2">
                <label className=" text-gray-400 text-sm font-medium">Food Name</label>
                <input
                  type="text"
                  value={foodName}
                  onChange={(e) => setFoodName(e.target.value)}
                  placeholder=" Add Food Name"
                  className={` rounded-md border border-gray-200 ${foodName ? " bg-white" : "bg-gray-50"} p-1 focus:outline-orange-400`} />
              </div>
              <div className=" grid grid-cols-1 gap-2">
                <label className=" text-gray-400 text-sm font-medium">Food Description</label>
                <textarea
                  rows={4}
                  type="text"
                  value={foodName}
                  onChange={(e) => setFoodName(e.target.value)}
                  placeholder=" Add Food Description"
                  className={` rounded-md border border-gray-200 ${foodName ? " bg-white" : "bg-gray-50"} p-1 focus:outline-orange-400`} />
              </div>
            </div>
          </div>
          <div className=" border border-gray-200 rounded-md bg-white shadow-sm">
            <h1 className=" pt-2 px-3 font-medium text-lg text-gray-700 ">Price and Stock</h1>
            <div className=" grid grid-cols-2 p-3 gap-3">
              <div className=" grid grid-cols-1 gap-2">
                <label className=" text-gray-400 text-sm font-medium">Base Price</label>
                <input
                  type="number"
                  value={FoodPrice}
                  onChange={(e) => setFoodPrice(e.target.value)}
                  className={` rounded-md border border-gray-200 ${foodName ? " bg-white" : "bg-gray-50"} p-1 focus:outline-orange-400`}
                  placeholder="Add Base Price"
                />
              </div>
              <div className=" grid grid-cols-1 gap-2">
                <label className=" text-gray-400 text-sm font-medium">Quantity</label>
                <input
                  type="number"
                  value={FoodPrice}
                  onChange={(e) => setFoodPrice(e.target.value)}
                  className={` rounded-md border border-gray-200 ${foodName ? " bg-white" : "bg-gray-50"} p-1 focus:outline-orange-400`}
                  placeholder=" Add Food Quantity"
                />
              </div>
              <div className=" grid grid-cols-1 gap-2">
                <label className=" text-gray-400 text-sm font-medium">Discount</label>
                <input
                  type="number"
                  value={FoodPrice}
                  onChange={(e) => setFoodPrice(e.target.value)}
                  className={` rounded-md border border-gray-200 ${foodName ? " bg-white" : "bg-gray-50"} p-1 focus:outline-orange-400`}
                  placeholder=" Add Discount"
                />
              </div>
              <div className=" grid grid-cols-1 gap-2">
                <label className=" text-gray-400 text-sm font-medium">Discount Tpye</label>
                <input
                  type="number"
                  value={FoodPrice}
                  onChange={(e) => setFoodPrice(e.target.value)}
                  className={` rounded-md border border-gray-200 ${foodName ? " bg-white" : "bg-gray-50"} p-1 focus:outline-orange-400`}
                  placeholder=" Add Discount Type"
                />
              </div>
            </div>
          </div>
        </div>
        <div className=" grid grid-cols-1 gap-2 ">
          <div className=" border border-gray-200 rounded-md bg-gray-100 shadow-sm bg-opacity-60  p-3">
            <h1 className=" text-lg font-medium text-gray-700 pt-1">Add Food Image</h1>
            <div className="flex items-center justify-center gap-2 flex-col">
              <RiImageAddFill className=" h-[15rem] text-gray-400 w-auto" />
              <button type=" button" className=" text-white bg-orange-400 px-2 py-1 rounded-md">+ Add Image</button>
            </div>
          </div>
          <div className=" border border-gray-200 bg-white p-3 rounded-md shadow-sm">
            <h1 className=" py-2  font-medium text-lg text-gray-700 ">Food Categories</h1>
            <div className=" grid grid-cols-1 gap-2">
              <label className=" text-gray-400 text-sm font-medium">Categories</label>
              <input
                type="number"
                value={FoodPrice}
                onChange={(e) => setFoodPrice(e.target.value)}
                className={` rounded-md border border-gray-200 ${foodName ? " bg-white" : "bg-gray-50"} p-1 focus:outline-orange-400`}
                placeholder="add Categories"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodAdd;
