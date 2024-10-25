import React, { useState } from 'react';
import { BiSolidMessageSquareEdit } from 'react-icons/bi';
import { FaFolderOpen, FaToggleOff, FaToggleOn } from 'react-icons/fa';
import { HiTrash } from 'react-icons/hi2';
import { IoSearch } from 'react-icons/io5';
import { MdOutlineGroupAdd } from 'react-icons/md';
import { TfiBrushAlt } from 'react-icons/tfi';
import { useNavigate } from 'react-router-dom';
import Pagination from '../../Layout/Pagination';
import Modal from 'react-responsive-modal';
import 'react-responsive-modal/styles.css'; // Import the modal styles
import { FiUser, FiMail, FiPhone, FiLock, FiMapPin, FiCalendar, FiCheckCircle, FiClock, FiFileText, FiCreditCard } from 'react-icons/fi';
const TABLE_HEAD = ["S.No", "Name", "Number", "Sub-Date", "exp-Date", "Status", "Action"];

const dummyData = [
    {
        name: "Pasta Palace",
        location: "123 Main St, Cityville",
        openTime: "10:00 AM",
        closeTime: "10:00 PM",
        description: "Authentic Italian pasta dishes with a modern twist.",
        number: "+1-234-567-8901",
        email: "contact@pastapalace.com",
        subscriptionDate: "2024-01-01",
        expDate: "2025-01-01",
        payment: "Credit Card",
        paymentStatus: "Paid",
        status: "Active"
    },
    {
        name: "Burger Barn",
        location: "456 Elm St, Townsville",
        openTime: "11:00 AM",
        closeTime: "11:00 PM",
        description: "Gourmet burgers made with the finest ingredients.",
        number: "+1-987-654-3210",
        email: "info@burgerbarn.com",
        subscriptionDate: "2023-12-15",
        expDate: "2024-12-15",
        payment: "PayPal",
        paymentStatus: "Non-Paid",
        status: "Disable"
    },
    {
        name: "Sushi Spot",
        location: "789 Oak St, Villagetown",
        openTime: "12:00 PM",
        closeTime: "09:00 PM",
        description: "Fresh sushi and sashimi prepared by expert chefs.",
        number: "+1-456-789-0123",
        email: "hello@sushispot.com",
        subscriptionDate: "2024-02-10",
        expDate: "2025-02-10",
        payment: "Debit Card",
        paymentStatus: "Paid",
        status: "Active"
    }
];



const CreateSeller = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [statusFilter, setStatusFilter] = useState("All");
    const [filter, setFilter] = useState("");
    const [showIcons, setShowIcons] = useState(false);
    const [isAddModalOpen, setIsAddModalOpen] = useState(false);
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);
    const [selectedCustomer, setSelectedCustomer] = useState(null); // For editing

    const itemsPerPage = 5;
    const navigate = useNavigate();
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const currentData = dummyData.slice(startIndex, endIndex);

    const handleFilterSearch = (e) => setFilter(e.target.value);
    const handleStatusFilter = (status) => setStatusFilter(status);

    const handleAddClick = () => setIsAddModalOpen(true);
    const handleEditClick = (customer) => {
        setSelectedCustomer(customer);
        setIsEditModalOpen(true);
    };

    const handleModalClose = () => {
        setIsAddModalOpen(false);
        setIsEditModalOpen(false);
        setSelectedCustomer(null);
    };

    return (
        <div className='m-2'>
            {/* Switchable Tabs for Customer and Seller */}
            <div className='border border-orange-500 rounded-md cursor-pointer w-fit flex items-center gap-2 mb-4'>
                <span className='text-orange-500 px-2 py-1 rounded-s-md w-24' onClick={()=>{navigate("/CreateUser")}}>CUSTOMER</span>
                <span className='bg-orange-500 text-white px-2 py-1 w-24 text-center' onClick={()=>{navigate("/CreateSeller")}}>SELLER</span>
            </div>

            {/* Filters and Search */}
            <div className='flex items-center justify-between'>
                <div className='flex items-center gap-3'>
                    <div className='bg-gray-100 rounded-lg flex items-center gap-5 p-1 my-3'>
                        <span onClick={() => handleStatusFilter("All")} className={`font-medium text-sm transition-all duration-150 rounded-lg cursor-pointer hover:text-black px-2 py-1 ${statusFilter === "All" ? "bg-white text-black" : "text-gray-500"}`}>All</span>
                        <span onClick={() => handleStatusFilter("Active")} className={`font-medium text-sm transition-all duration-150 rounded-lg cursor-pointer hover:text-black px-2 py-1 ${statusFilter === "Active" ? "bg-white text-black" : "text-gray-500"}`}>Active</span>
                        <span onClick={() => handleStatusFilter("Disable")} className={`font-medium text-sm transition-all duration-150 rounded-lg cursor-pointer hover:text-black px-2 py-1 ${statusFilter === "Disable" ? "bg-white text-black" : "text-gray-500"}`}>Disable</span>
                    </div>
                </div>

                <div className='flex items-center gap-2'>
                    <div className='flex items-center gap-2'>
                        <input
                            type='text'
                            value={filter}
                            onChange={(e) => handleFilterSearch(e)}
                            placeholder='search name'
                            className={`transition-all duration-200 focus:outline-orange-400 ${showIcons ? "w-40 rounded-md border border-gray-200 p-[0.282rem]" : "w-0"} `}
                        />
                        <label className='hover:bg-gray-100 rounded-md p-1 cursor-pointer border border-gray-200' onClick={() => setShowIcons(!showIcons)}>
                            <IoSearch className='text-gray-500' size={25} />
                        </label>
                    </div>
                    <MdOutlineGroupAdd onClick={handleAddClick} className='text-gray-500 rounded-md p-1 cursor-pointer hover:bg-gray-100 border border-gray-200' size={35} />
                    <TfiBrushAlt className='text-gray-500 rounded-md p-1 cursor-pointer hover:bg-gray-100 border border-gray-200' size={35} />
                </div>
            </div>

            {/* Table */}
            <div className="py-4 rounded-md w-full">
                <div className="overflow-x-auto rounded-md">
                    <table className="min-w-full bg-white border border-gray-200 shadow-md rounded-md">
                        <thead>
                            <tr className='bg-gray-100 rounded-md'>
                                {TABLE_HEAD.map((head, index) => (
                                    <th key={index} className="p-4 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        {head}
                                    </th>
                                ))}
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                            {currentData.map((data, index) => (
                                <tr key={index}>
                                    <td className="p-4 text-center whitespace-nowrap text-sm font-medium text-gray-900">
                                        {startIndex + index + 1}
                                    </td>
                                    <td className="p-4 text-center whitespace-nowrap text-sm text-gray-500">
                                        {data.name}
                                    </td>
                                    <td className="p-4 text-center whitespace-nowrap text-sm text-gray-500">
                                        {data.number}
                                    </td>
                                    <td className="p-4 text-center whitespace-nowrap text-sm text-gray-500">
                                        {data.subscriptionDate}
                                    </td>
                                    <td className="p-4 text-center whitespace-nowrap text-sm text-gray-500">
                                        {data.expDate}
                                    </td>
                                    <td className="p-4 whitespace-nowrap text-sm text-gray-500">
                                        <div className='flex items-center justify-center'>
                                            {data.status === "Active" ? <FaToggleOn className='text-green-500' size={35} /> : <FaToggleOff className='text-gray-300' size={35} />}
                                        </div>
                                    </td>
                                    <td className="p-4 flex items-center justify-center whitespace-nowrap text-sm text-gray-500">
                                        <div className='flex items-center gap-3'>
                                            <BiSolidMessageSquareEdit onClick={() => handleEditClick(data)} className='cursor-pointer text-gray-400 hover:text-orange-500' size={20} />
                                            <FaFolderOpen className='cursor-pointer text-gray-400 hover:text-blue-500' size={20} />
                                            <HiTrash className='cursor-pointer text-gray-400 hover:text-red-600' size={20} />
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {/* Pagination */}
                <div className='flex items-center w-full justify-between'>
                    <div className='flex items-end gap-2 mt-3 w-[20%]'>
                        <span>Show PerPage</span>
                        <select className='focus:outline-orange-400 rounded-md p-1 py-0 border border-gray-200'>
                            <option value={5}>5</option>
                            <option value={10}>10</option>
                            <option value={15}>15</option>
                        </select>
                    </div>
                    <Pagination
                        totalItems={dummyData.length}
                        itemsPerPage={itemsPerPage}
                        currentPage={currentPage}
                        onPageChange={(page) => setCurrentPage(page)}
                    />
                </div>
            </div>
            <Modal open={isAddModalOpen} onClose={handleModalClose} center>
                <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md">
                    <div className="flex items-center justify-between mb-4">
                        <h2 className="text-xl font-semibold text-orange-500">Add Restaurant</h2>
                        <FiMapPin className="text-orange-500 text-2xl" />
                    </div>
                    <div className="grid grid-cols-2 gap-5">
                        <div className="relative">
                            <FiFileText className="absolute left-3 top-2.5 text-gray-400" />
                            <input
                                type="text"
                                placeholder="Restaurant Name"
                                className="modal-input w-full border border-gray-300 rounded-md py-2 pl-10 pr-4 focus:outline-none focus:ring-2 focus:ring-orange-500"
                                value="Pasta Palace"
                            />
                        </div>
                        <div className="relative">
                            <FiClock className="absolute left-3 top-2.5 text-gray-400" />
                            <input
                                type="time"
                                placeholder="Open Time"
                                className="modal-input w-full border border-gray-300 rounded-md py-2 pl-10 pr-4 focus:outline-none focus:ring-2 focus:ring-orange-500"
                                value="10:00 AM"
                            />
                        </div>
                        <div className="relative">
                            <FiClock className="absolute left-3 top-2.5 text-gray-400" />
                            <input
                                type="time"
                                placeholder="Close Time"
                                className="modal-input w-full border border-gray-300 rounded-md py-2 pl-10 pr-4 focus:outline-none focus:ring-2 focus:ring-orange-500"
                                value="10:00 PM"
                            />
                        </div>
                        <div className="relative">
                            <FiPhone className="absolute left-3 top-2.5 text-gray-400" />
                            <input
                                type="text"
                                placeholder="Phone Number"
                                className="modal-input w-full border border-gray-300 rounded-md py-2 pl-10 pr-4 focus:outline-none focus:ring-2 focus:ring-orange-500"
                                value="+1-234-567-8901"
                            />
                        </div>
                        <div className="relative">
                            <FiMail className="absolute left-3 top-2.5 text-gray-400" />
                            <input
                                type="email"
                                placeholder="Email"
                                className="modal-input w-full border border-gray-300 rounded-md py-2 pl-10 pr-4 focus:outline-none focus:ring-2 focus:ring-orange-500"
                                value="contact@pastapalace.com"
                            />
                        </div>
                        <div className="relative">
                            <FiCalendar className="absolute left-3 top-2.5 text-gray-400" />
                            <input
                                type="date"
                                placeholder="Subscription Date"
                                className="modal-input w-full border border-gray-300 rounded-md py-2 pl-10 pr-4 focus:outline-none focus:ring-2 focus:ring-orange-500"
                                value="2024-01-01"
                            />
                        </div>
                        <div className="relative">
                            <FiCalendar className="absolute left-3 top-2.5 text-gray-400" />
                            <input
                                type="date"
                                placeholder="Expiration Date"
                                className="modal-input w-full border border-gray-300 rounded-md py-2 pl-10 pr-4 focus:outline-none focus:ring-2 focus:ring-orange-500"
                                value="2025-01-01"
                            />
                        </div>
                        <div className="relative">
                            <FiCreditCard className="absolute left-3 top-2.5 text-gray-400" />
                            <input
                                type="text"
                                placeholder="Payment Method"
                                className="modal-input w-full border border-gray-300 rounded-md py-2 pl-10 pr-4 focus:outline-none focus:ring-2 focus:ring-orange-500"
                                value="Credit Card"
                            />
                        </div>
                        <div className="relative">
                            <FiCheckCircle className="absolute left-3 top-2.5 text-gray-400" />
                            <input
                                type="text"
                                placeholder="Payment Status"
                                className="modal-input w-full border border-gray-300 rounded-md py-2 pl-10 pr-4 focus:outline-none focus:ring-2 focus:ring-orange-500"
                                value="Paid"
                            />
                        </div>
                        <div className="relative">
                            <FiCheckCircle className="absolute left-3 top-2.5 text-gray-400" />
                            <input
                                type="text"
                                placeholder="Status"
                                className="modal-input w-full border border-gray-300 rounded-md py-2 pl-10 pr-4 focus:outline-none focus:ring-2 focus:ring-orange-500"
                                value="Active"
                            />
                        </div>
                        <div className="relative col-span-2">
                            <FiFileText className="absolute left-3 top-2.5 text-gray-400" />
                            <input
                                type="text"
                                placeholder="Description"
                                className="modal-input w-full border border-gray-300 rounded-md py-2 pl-10 pr-4 focus:outline-none focus:ring-2 focus:ring-orange-500"
                                value="Authentic Italian pasta dishes with a modern twist."
                            />
                        </div>
                        <div className="relative col-span-2">
                            <FiMapPin className="absolute left-3 top-2.5 text-gray-400" />
                            <input
                                type="text"
                                placeholder="Location"
                                className="modal-input w-full border border-gray-300 rounded-md py-2 pl-10 pr-4 focus:outline-none focus:ring-2 focus:ring-orange-500"
                                value="123 Main St, Cityville"
                            />
                        </div>
                    </div>
                    <button className="w-full bg-orange-500 text-white py-2 rounded-md font-semibold hover:bg-orange-600 transition duration-200">
                        Add Restaurant
                    </button>
                </div>
            </Modal>
            <Modal open={isEditModalOpen} onClose={handleModalClose} center>
            <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md">
                    <div className="flex items-center justify-between mb-4">
                        <h2 className="text-xl font-semibold text-orange-500">Edit Restaurant</h2>
                        <FiMapPin className="text-orange-500 text-2xl" />
                    </div>
                    <div className="grid grid-cols-2 gap-5">
                        <div className="relative">
                            <FiFileText className="absolute left-3 top-2.5 text-gray-400" />
                            <input
                                type="text"
                                placeholder="Restaurant Name"
                                className="modal-input w-full border border-gray-300 rounded-md py-2 pl-10 pr-4 focus:outline-none focus:ring-2 focus:ring-orange-500"
                                value="Pasta Palace"
                            />
                        </div>
                        <div className="relative">
                            <FiClock className="absolute left-3 top-2.5 text-gray-400" />
                            <input
                                type="time"
                                placeholder="Open Time"
                                className="modal-input w-full border border-gray-300 rounded-md py-2 pl-10 pr-4 focus:outline-none focus:ring-2 focus:ring-orange-500"
                                value="10:00 AM"
                            />
                        </div>
                        <div className="relative">
                            <FiClock className="absolute left-3 top-2.5 text-gray-400" />
                            <input
                                type="time"
                                placeholder="Close Time"
                                className="modal-input w-full border border-gray-300 rounded-md py-2 pl-10 pr-4 focus:outline-none focus:ring-2 focus:ring-orange-500"
                                value="10:00 PM"
                            />
                        </div>
                        <div className="relative">
                            <FiPhone className="absolute left-3 top-2.5 text-gray-400" />
                            <input
                                type="text"
                                placeholder="Phone Number"
                                className="modal-input w-full border border-gray-300 rounded-md py-2 pl-10 pr-4 focus:outline-none focus:ring-2 focus:ring-orange-500"
                                value="+1-234-567-8901"
                            />
                        </div>
                        <div className="relative">
                            <FiMail className="absolute left-3 top-2.5 text-gray-400" />
                            <input
                                type="email"
                                placeholder="Email"
                                className="modal-input w-full border border-gray-300 rounded-md py-2 pl-10 pr-4 focus:outline-none focus:ring-2 focus:ring-orange-500"
                                value="contact@pastapalace.com"
                            />
                        </div>
                        <div className="relative">
                            <FiCalendar className="absolute left-3 top-2.5 text-gray-400" />
                            <input
                                type="date"
                                placeholder="Subscription Date"
                                className="modal-input w-full border border-gray-300 rounded-md py-2 pl-10 pr-4 focus:outline-none focus:ring-2 focus:ring-orange-500"
                                value="2024-01-01"
                            />
                        </div>
                        <div className="relative">
                            <FiCalendar className="absolute left-3 top-2.5 text-gray-400" />
                            <input
                                type="date"
                                placeholder="Expiration Date"
                                className="modal-input w-full border border-gray-300 rounded-md py-2 pl-10 pr-4 focus:outline-none focus:ring-2 focus:ring-orange-500"
                                value="2025-01-01"
                            />
                        </div>
                        <div className="relative">
                            <FiCreditCard className="absolute left-3 top-2.5 text-gray-400" />
                            <input
                                type="text"
                                placeholder="Payment Method"
                                className="modal-input w-full border border-gray-300 rounded-md py-2 pl-10 pr-4 focus:outline-none focus:ring-2 focus:ring-orange-500"
                                value="Credit Card"
                            />
                        </div>
                        <div className="relative">
                            <FiCheckCircle className="absolute left-3 top-2.5 text-gray-400" />
                            <input
                                type="text"
                                placeholder="Payment Status"
                                className="modal-input w-full border border-gray-300 rounded-md py-2 pl-10 pr-4 focus:outline-none focus:ring-2 focus:ring-orange-500"
                                value="Paid"
                            />
                        </div>
                        <div className="relative">
                            <FiCheckCircle className="absolute left-3 top-2.5 text-gray-400" />
                            <input
                                type="text"
                                placeholder="Status"
                                className="modal-input w-full border border-gray-300 rounded-md py-2 pl-10 pr-4 focus:outline-none focus:ring-2 focus:ring-orange-500"
                                value="Active"
                            />
                        </div>
                        <div className="relative col-span-2">
                            <FiFileText className="absolute left-3 top-2.5 text-gray-400" />
                            <input
                                type="text"
                                placeholder="Description"
                                className="modal-input w-full border border-gray-300 rounded-md py-2 pl-10 pr-4 focus:outline-none focus:ring-2 focus:ring-orange-500"
                                value="Authentic Italian pasta dishes with a modern twist."
                            />
                        </div>
                        <div className="relative col-span-2">
                            <FiMapPin className="absolute left-3 top-2.5 text-gray-400" />
                            <input
                                type="text"
                                placeholder="Location"
                                className="modal-input w-full border border-gray-300 rounded-md py-2 pl-10 pr-4 focus:outline-none focus:ring-2 focus:ring-orange-500"
                                value="123 Main St, Cityville"
                            />
                        </div>
                    </div>
                    <button className="w-full bg-orange-500 text-white py-2 rounded-md font-semibold hover:bg-orange-600 transition duration-200">
                        Update
                    </button>
                </div>
            </Modal>
        </div>
    );
};

export default CreateSeller;
