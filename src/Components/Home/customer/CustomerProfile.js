import React, { useState } from 'react';
import { FaCheck, FaPencilAlt, FaTimes } from 'react-icons/fa';

const CustomerProfile = () => {
    const [isEditing, setIsEditing] = useState(false);
    const [formData, setFormData] = useState({
        firstName: 'HARI',
        lastName: 'SUNDAR',
        email: 'sundarhari.it19@gmail.com',
        dateOfBirth: '',
        mobileNumber: '',
        gender: 'Male',
        address: '432 West Hague Boulevard, Ipsam accusamus totam et possimus, Chennai, 600001',
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const toggleEdit = () => {
        setIsEditing(!isEditing);
    };

    return (
        <div className="flex justify-center items-start min-h-screen bg-gray-100 py-10">
            <div className="flex flex-col md:flex-row bg-white p-6 shadow-md rounded-lg w-full max-w-5xl">
                {/* Left Section */}
                <div className="flex flex-col md:w-1/3 p-4 border-r">
                    <div className="text-center mb-6">
                        <p className="font-semibold">{formData.email}</p>
                        <button className="text-red-500 text-sm mt-1">Get Membership Now</button>
                    </div>

                    <nav className="flex flex-col space-y-3">
                        <a href="#" className="text-gray-700">Orders (Track your order here)</a>
                        <a href="#" className="text-gray-700">Gift Vouchers</a>
                        <a href="#" className="text-gray-700"> Points (Active  Points: 0.00)</a>
                        <a href="#" className="text-gray-700"> Money ( Money Balance: ₹ 0.00)</a>
                        <button className="text-red-500 border border-red-500 p-2 rounded-md">DELETE MY ACCOUNT</button>
                    </nav>
                </div>

                {/* Right Section */}
                <div className="flex flex-col md:w-2/3 p-4">
                    <h2 className="font-semibold text-lg mb-4">General Information</h2>
                    <div className="flex justify-between items-center w-full mb-6">
                        <FaPencilAlt
                            onClick={toggleEdit}
                            className="text-orange-500 cursor-pointer"
                        />
                        <div className="w-20 h-20 bg-gray-300 rounded-full"></div>
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm text-gray-600">Email Id</label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            disabled={!isEditing}
                            className="w-full p-2 border rounded-md bg-gray-100"
                        />
                    </div>

                    <div className="grid grid-cols-2 gap-4 mb-4">
                        <div>
                            <label className="block text-sm text-gray-600">First Name *</label>
                            <input
                                type="text"
                                name="firstName"
                                value={formData.firstName}
                                onChange={handleChange}
                                disabled={!isEditing}
                                className="w-full p-2 border rounded-md bg-gray-100"
                            />
                        </div>
                        <div>
                            <label className="block text-sm text-gray-600">Last Name *</label>
                            <input
                                type="text"
                                name="lastName"
                                value={formData.lastName}
                                onChange={handleChange}
                                disabled={!isEditing}
                                className="w-full p-2 border rounded-md bg-gray-100"
                            />
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4 mb-4">
                        <div>
                            <label className="block text-sm text-gray-600">Date of Birth</label>
                            <input
                                type="date"
                                name="dateOfBirth"
                                value={formData.dateOfBirth}
                                onChange={handleChange}
                                disabled={!isEditing}
                                className="w-full p-2 border rounded-md bg-gray-100"
                            />
                        </div>
                        <div>
                            <label className="block text-sm text-gray-600">Mobile Number *</label>
                            <input
                                type="text"
                                name="mobileNumber"
                                value={formData.mobileNumber}
                                onChange={handleChange}
                                disabled={!isEditing}
                                className="w-full p-2 border rounded-md bg-gray-100"
                            />
                        </div>
                    </div>

                    <div className="mb-4">
                        <label className="block text-sm text-gray-600">Gender</label>
                        <div className="flex items-center space-x-4">
                            <label className="flex items-center">
                                <input
                                    type="radio"
                                    name="gender"
                                    value="Male"
                                    checked={formData.gender === 'Male'}
                                    onChange={handleChange}
                                    disabled={!isEditing}
                                    className="mr-2"
                                />
                                Male
                            </label>
                            <label className="flex items-center">
                                <input
                                    type="radio"
                                    name="gender"
                                    value="Female"
                                    checked={formData.gender === 'Female'}
                                    onChange={handleChange}
                                    disabled={!isEditing}
                                    className="mr-2"
                                />
                                Female
                            </label>
                            <label className="flex items-center">
                                <input
                                    type="radio"
                                    name="gender"
                                    value="Other"
                                    checked={formData.gender === 'Other'}
                                    onChange={handleChange}
                                    disabled={!isEditing}
                                    className="mr-2"
                                />
                                Other
                            </label>
                        </div>
                    </div>

                    <div className="mb-4">
                        <label className="block text-sm text-gray-600">Default Address</label>
                        <div className="flex items-center justify-between">
                            <textarea
                                name="address"
                                value={formData.address}
                                onChange={handleChange}
                                disabled={!isEditing}
                                className="w-full p-2 border rounded-md bg-gray-100"
                            />
                        </div>
                    </div>

                    {isEditing && (
                        <div
                            className="flex justify-between w-full mt-6"
                        >
                            <button
                                onClick={toggleEdit}
                                className="text-orange-500 border border-orange-500 px-4 py-2 rounded-lg hover:bg-orange-100 flex items-center"
                            >
                                <FaTimes className="mr-2" /> Cancel
                            </button>
                            <button className="bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600 flex items-center">
                                <FaCheck className="mr-2" /> Save
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default CustomerProfile;
