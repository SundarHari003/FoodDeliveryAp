import React, { useState } from 'react';
import { FaPencilAlt, FaLock, FaEnvelope, FaPhone, FaClock, FaMapMarkerAlt, FaInfoCircle } from 'react-icons/fa';

const RestaurantProfile = () => {
    const [isEditing, setIsEditing] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [restaurantData, setRestaurantData] = useState({
        name: 'The Spice House',
        description: 'A cozy place offering a delightful array of spices and flavors from around the world.',
        address: '123 Flavor Street, Food City',
        detailedAddress: 'Near the Grand Central Mall, Next to Star Cinema',
        contact: '123-456-7890',
        email: 'info@spicehouse.com',
        hours: 'Mon-Sun: 10:00 AM - 11:00 PM',
        password: '********',
        menuCategories: [
            { name: 'Appetizers' },
            { name: 'Main Course' },
            { name: 'Desserts' },
        ],
    });

    const handleChange = (e) => {
        setRestaurantData({ ...restaurantData, [e.target.name]: e.target.value });
    };

    const toggleEdit = () => {
        setIsEditing(!isEditing);
    };

    const handleCancel = () => {
        setIsEditing(false);
    };

    return (
        <div
            className="flex flex-col items-center min-h-screen bg-cover bg-center py-8"
            style={{ backgroundImage: 'url(https://yourimageurl.com/food-delivery-bg.jpg)' }} // Replace with your actual image URL
        >
            <div className="bg-white p-6 shadow-md rounded-lg w-full max-w-3xl">
                {/* Restaurant Image and Name */}
                <div className="relative mb-4">
                    <div className="bg-gray-200 h-40 rounded-md flex justify-center items-center">
                        <span className="text-lg text-gray-500">Restaurant Image</span>
                    </div>
                    <FaPencilAlt
                        onClick={toggleEdit}
                        className="absolute top-2 right-2 text-gray-500 cursor-pointer"
                    />
                    <h1 className="text-2xl font-bold mt-3">{restaurantData.name}</h1>
                    <div className="text-sm text-gray-500 mt-1">
                        <span className="text-orange-400">★★★★☆</span> (123 ratings)
                    </div>
                </div>

                {/* Description Section */}
                <div className="mb-4">
                    <div className="flex items-center">
                        <FaInfoCircle className="text-orange-400 mr-2" />
                        <div className="w-full">
                            <label className="block text-sm font-medium">Description</label>
                            <textarea
                                name="description"
                                value={restaurantData.description}
                                onChange={handleChange}
                                disabled={!isEditing}
                                className={`w-full p-2 mt-1 border rounded-md ${isEditing
                                        ? 'focus:outline-none focus:ring-2 focus:ring-orange-400'
                                        : 'bg-gray-100'
                                    }`}
                            />
                        </div>
                    </div>
                </div>
                <div className=' mb-4'>
                    <div className="flex items-center">
                        <FaMapMarkerAlt className="text-orange-400 mr-2" />
                        <div className="w-full">
                            <label className="block text-sm font-medium">Address</label>
                            <textarea
                                type="text"
                                name="address"
                                value={restaurantData.address}
                                onChange={handleChange}
                                disabled={!isEditing}
                                className={`w-full p-2 mt-1 border rounded-md ${isEditing
                                        ? 'focus:outline-none focus:ring-2 focus:ring-orange-400'
                                        : 'bg-gray-100'
                                    }`}
                            />
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

                    <div className="flex items-center">
                        <FaPhone className="text-orange-400 mr-2" />
                        <div className="w-full">
                            <label className="block text-sm font-medium">Contact Number</label>
                            <input
                                type="text"
                                name="contact"
                                value={restaurantData.contact}
                                onChange={handleChange}
                                disabled={!isEditing}
                                className={`w-full p-2 mt-1 border rounded-md ${isEditing
                                        ? 'focus:outline-none focus:ring-2 focus:ring-orange-400'
                                        : 'bg-gray-100'
                                    }`}
                            />
                        </div>
                    </div>

                    <div className="flex items-center">
                        <FaEnvelope className="text-orange-400 mr-2" />
                        <div className="w-full">
                            <label className="block text-sm font-medium">Email</label>
                            <input
                                type="email"
                                name="email"
                                value={restaurantData.email}
                                onChange={handleChange}
                                disabled={!isEditing}
                                className={`w-full p-2 mt-1 border rounded-md ${isEditing
                                        ? 'focus:outline-none focus:ring-2 focus:ring-orange-400'
                                        : 'bg-gray-100'
                                    }`}
                            />
                        </div>
                    </div>

                    <div className="flex items-center">
                        <FaClock className="text-orange-400 mr-2" />
                        <div className="w-full">
                            <label className="block text-sm font-medium">Operating Hours</label>
                            <input
                                type="text"
                                name="hours"
                                value={restaurantData.hours}
                                onChange={handleChange}
                                disabled={!isEditing}
                                className={`w-full p-2 mt-1 border rounded-md ${isEditing
                                        ? 'focus:outline-none focus:ring-2 focus:ring-orange-400'
                                        : 'bg-gray-100'
                                    }`}
                            />
                        </div>
                    </div>

                    <div className="flex items-center">
                        <FaLock className="text-orange-400 mr-2" />
                        <div className="w-full">
                            <label className="block text-sm font-medium">Password</label>
                            <input
                                type={showPassword ? "text" : "password"}
                                name="password"
                                value={restaurantData.password}
                                onChange={handleChange}
                                disabled={!isEditing}
                                className={`w-full p-2 mt-1 border rounded-md ${isEditing
                                        ? 'focus:outline-none focus:ring-2 focus:ring-orange-400'
                                        : 'bg-gray-100'
                                    }`}
                            />
                        </div>
                    </div>
                </div>

                {/* Action Buttons (Show only when editing) */}
                {isEditing && (
                    <div className="flex justify-between w-full mt-5">
                        <button
                            onClick={handleCancel}
                            className="text-gray-600 border border-gray-400 px-3 py-2 rounded-md hover:bg-gray-100"
                        >
                            Cancel
                        </button>
                        <button className="bg-orange-400 text-white px-3 py-2 rounded-md hover:bg-orange-500">
                            Save
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default RestaurantProfile;
