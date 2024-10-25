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
import { FiUser, FiMail, FiPhone, FiLock, FiMapPin, FiCalendar, FiCheckCircle } from 'react-icons/fi';
const TABLE_HEAD = ["S.No", "Name", "Number", "Gender", "Status", "Action"];

const dummyData = [
    {
        firstName: "John",
        lastName: "Doe",
        address: "123 Elm Street, Springfield, IL",
        dob: "1990-01-15",
        status: "active",
        phoneNumber: "555-1234",
        password: "password123",
        gender: "male",
        email: "john.doe@example.com"
    },
    {
        firstName: "Jane",
        lastName: "Smith",
        address: "456 Oak Avenue, Shelbyville, IL",
        dob: "1985-03-22",
        status: "disabled",
        phoneNumber: "555-5678",
        password: "securePass456",
        gender: "female",
        email: "jane.smith@example.com"
    },
    {
        firstName: "Alice",
        lastName: "Johnson",
        address: "789 Maple Drive, Capital City, IL",
        dob: "1992-07-10",
        status: "active",
        phoneNumber: "555-9012",
        password: "myPassword789",
        gender: "female",
        email: "alice.johnson@example.com"
    },
    {
        firstName: "Bob",
        lastName: "Brown",
        address: "101 Cedar Lane, Ogdenville, IL",
        dob: "1988-11-30",
        status: "disabled",
        phoneNumber: "555-3456",
        password: "passWord012",
        gender: "male",
        email: "bob.brown@example.com"
    },
    {
        firstName: "Emily",
        lastName: "Davis",
        address: "202 Pine Street, North Haverbrook, IL",
        dob: "1995-06-18",
        status: "active",
        phoneNumber: "555-7890",
        password: "easyPass345",
        gender: "female",
        email: "emily.davis@example.com"
    },
    {
        firstName: "Michael",
        lastName: "Miller",
        address: "303 Birch Avenue, Springfield, IL",
        dob: "1993-02-25",
        status: "active",
        phoneNumber: "555-6789",
        password: "password456",
        gender: "male",
        email: "michael.miller@example.com"
    },
    {
        firstName: "Sarah",
        lastName: "Wilson",
        address: "404 Cherry Lane, Shelbyville, IL",
        dob: "1987-04-12",
        status: "disabled",
        phoneNumber: "555-2345",
        password: "securePass789",
        gender: "female",
        email: "sarah.wilson@example.com"
    },
    {
        firstName: "David",
        lastName: "Clark",
        address: "505 Walnut Street, Capital City, IL",
        dob: "1991-09-08",
        status: "active",
        phoneNumber: "555-8901",
        password: "password789",
        gender: "male",
        email: "david.clark@example.com"
    },
    {
        firstName: "Jessica",
        lastName: "Lopez",
        address: "606 Ash Drive, Ogdenville, IL",
        dob: "1994-11-22",
        status: "active",
        phoneNumber: "555-3450",
        password: "easyPass123",
        gender: "female",
        email: "jessica.lopez@example.com"
    },
    {
        firstName: "Daniel",
        lastName: "Martinez",
        address: "707 Cedar Court, North Haverbrook, IL",
        dob: "1996-05-17",
        status: "disabled",
        phoneNumber: "555-6780",
        password: "securePass012",
        gender: "male",
        email: "daniel.martinez@example.com"
    },
    {
        firstName: "Sophia",
        lastName: "Garcia",
        address: "808 Pine Circle, Springfield, IL",
        dob: "1990-12-10",
        status: "active",
        phoneNumber: "555-2340",
        password: "password890",
        gender: "female",
        email: "sophia.garcia@example.com"
    },
    {
        firstName: "James",
        lastName: "Hernandez",
        address: "909 Oak Place, Shelbyville, IL",
        dob: "1989-06-05",
        status: "disabled",
        phoneNumber: "555-5670",
        password: "securePass234",
        gender: "male",
        email: "james.hernandez@example.com"
    },
    {
        firstName: "Megan",
        lastName: "Martinez",
        address: "1010 Maple Street, Capital City, IL",
        dob: "1993-03-19",
        status: "active",
        phoneNumber: "555-7891",
        password: "myPassword234",
        gender: "female",
        email: "megan.martinez@example.com"
    },
    {
        firstName: "Chris",
        lastName: "Robinson",
        address: "1111 Birch Lane, Ogdenville, IL",
        dob: "1986-07-27",
        status: "disabled",
        phoneNumber: "555-3451",
        password: "passWord345",
        gender: "male",
        email: "chris.robinson@example.com"
    },
    {
        firstName: "Linda",
        lastName: "Lee",
        address: "1212 Cherry Avenue, North Haverbrook, IL",
        dob: "1991-08-14",
        status: "active",
        phoneNumber: "555-6782",
        password: "easyPass456",
        gender: "female",
        email: "linda.lee@example.com"
    },
    {
        firstName: "Paul",
        lastName: "Harris",
        address: "1313 Walnut Circle, Springfield, IL",
        dob: "1987-10-20",
        status: "active",
        phoneNumber: "555-2342",
        password: "password567",
        gender: "male",
        email: "paul.harris@example.com"
    },
    {
        firstName: "Rachel",
        lastName: "Perez",
        address: "1414 Ash Place, Shelbyville, IL",
        dob: "1992-02-28",
        status: "disabled",
        phoneNumber: "555-5673",
        password: "securePass567",
        gender: "female",
        email: "rachel.perez@example.com"
    },
    {
        firstName: "Steven",
        lastName: "Moore",
        address: "1515 Cedar Court, Capital City, IL",
        dob: "1989-09-13",
        status: "active",
        phoneNumber: "555-7894",
        password: "myPassword567",
        gender: "male",
        email: "steven.moore@example.com"
    },
    {
        firstName: "Laura",
        lastName: "Walker",
        address: "1616 Pine Circle, Ogdenville, IL",
        dob: "1994-06-09",
        status: "disabled",
        phoneNumber: "555-3456",
        password: "passWord678",
        gender: "female",
        email: "laura.walker@example.com"
    },
    {
        firstName: "Tom",
        lastName: "Lewis",
        address: "1717 Birch Lane, North Haverbrook, IL",
        dob: "1990-04-01",
        status: "active",
        phoneNumber: "555-6789",
        password: "easyPass789",
        gender: "male",
        email: "tom.lewis@example.com"
    }
];


const CreateUser = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [statusFilter, setStatusFilter] = useState("All");
    const [genderFilter, setGenderFilter] = useState("All");
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
    const handleGenderFilter = (gender) => setGenderFilter(gender);

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
            <div className='border border-orange-500 rounded-md w-fit cursor-pointer flex items-center gap-2 mb-4'>
                <span className='bg-orange-500 text-white px-2 py-1 rounded-s-md w-24' onClick={()=>{navigate("/CreateUser")}}>CUSTOMER</span>
                <span className='text-orange-500 px-2 py-1 w-24' onClick={()=>{navigate("/CreateSeller")}}>SELLER</span>
            </div>

            {/* Filters and Search */}
            <div className='flex items-center justify-between'>
                <div className='flex items-center gap-3'>
                    <div className='bg-gray-100 rounded-lg flex items-center gap-5 p-1 my-3'>
                        <span onClick={() => handleStatusFilter("All")} className={`font-medium text-sm transition-all duration-150 rounded-lg cursor-pointer hover:text-black px-2 py-1 ${statusFilter === "All" ? "bg-white text-black" : "text-gray-500"}`}>All</span>
                        <span onClick={() => handleStatusFilter("Active")} className={`font-medium text-sm transition-all duration-150 rounded-lg cursor-pointer hover:text-black px-2 py-1 ${statusFilter === "Active" ? "bg-white text-black" : "text-gray-500"}`}>Active</span>
                        <span onClick={() => handleStatusFilter("Disable")} className={`font-medium text-sm transition-all duration-150 rounded-lg cursor-pointer hover:text-black px-2 py-1 ${statusFilter === "Disable" ? "bg-white text-black" : "text-gray-500"}`}>Disable</span>
                    </div>
                    <div className='bg-gray-100 rounded-lg flex items-center gap-5 p-1 my-3'>
                        <span onClick={() => handleGenderFilter("All")} className={`font-medium text-sm transition-all duration-150 rounded-lg cursor-pointer hover:text-black px-2 py-1 ${genderFilter === "All" ? "bg-white text-black" : "text-gray-500"}`}>All</span>
                        <span onClick={() => handleGenderFilter("Male")} className={`font-medium text-sm transition-all duration-150 rounded-lg cursor-pointer hover:text-black px-2 py-1 ${genderFilter === "Male" ? "bg-white text-black" : "text-gray-500"}`}>Male</span>
                        <span onClick={() => handleGenderFilter("Female")} className={`font-medium text-sm transition-all duration-150 rounded-lg cursor-pointer hover:text-black px-2 py-1 ${genderFilter === "Female" ? "bg-white text-black" : "text-gray-500"}`}>Female</span>
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
                                        {data.firstName}
                                    </td>
                                    <td className="p-4 text-center whitespace-nowrap text-sm text-gray-500">
                                        {data.phoneNumber}
                                    </td>
                                    <td className="p-4 text-center whitespace-nowrap text-sm text-gray-500">
                                        {data.gender}
                                    </td>
                                    <td className="p-4 whitespace-nowrap text-sm text-gray-500">
                                        <div className='flex items-center justify-center'>
                                            {data.status === "active" ? <FaToggleOn className='text-green-500' size={35} /> : <FaToggleOff className='text-gray-300' size={35} />}
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
                        <h2 className="text-xl font-semibold text-orange-500">Add Customer</h2>
                        <FiUser className="text-orange-500 text-2xl" />
                    </div>
                    <div className=" grid grid-cols-2 gap-5 ">
                        <div className="relative">
                            <FiUser className="absolute left-3 top-2.5 text-gray-400" />
                            <input
                                type="text"
                                placeholder="First Name"
                                className="modal-input w-full border border-gray-300 rounded-md py-2 pl-10 pr-4 focus:outline-none focus:ring-2 focus:ring-orange-500"
                                value="Tom"
                            />
                        </div>
                        <div className="relative">
                            <FiUser className="absolute left-3 top-2.5 text-gray-400" />
                            <input
                                type="text"
                                placeholder="Last Name"
                                className="modal-input w-full border border-gray-300 rounded-md py-2 pl-10 pr-4 focus:outline-none focus:ring-2 focus:ring-orange-500"
                                value="Lewis"
                            />
                        </div>
                        <div className="relative">
                            <FiMail className="absolute left-3 top-2.5 text-gray-400" />
                            <input
                                type="email"
                                placeholder="Email"
                                className="modal-input w-full border border-gray-300 rounded-md py-2 pl-10 pr-4 focus:outline-none focus:ring-2 focus:ring-orange-500"
                                value="tom.lewis@example.com"
                            />
                        </div>
                        <div className="relative">
                            <input
                                type="date"
                                placeholder="Date of Birth"
                                className="modal-input w-full border border-gray-300 rounded-md py-2 pl-10 pr-4 focus:outline-none focus:ring-2 focus:ring-orange-500"
                                value="1990-04-01"
                            />
                        </div>
                        <div className="relative">
                            <FiCheckCircle className="absolute left-3 top-2.5 text-gray-400" />
                            <input
                                type="text"
                                placeholder="Status"
                                className="modal-input w-full border border-gray-300 rounded-md py-2 pl-10 pr-4 focus:outline-none focus:ring-2 focus:ring-orange-500"
                                value="active"
                            />
                        </div>
                        <div className="relative">
                            <FiPhone className="absolute left-3 top-2.5 text-gray-400" />
                            <input
                                type="text"
                                placeholder="Phone Number"
                                className="modal-input w-full border border-gray-300 rounded-md py-2 pl-10 pr-4 focus:outline-none focus:ring-2 focus:ring-orange-500"
                                value="555-6789"
                            />
                        </div>
                        <div className="relative">
                            <FiLock className="absolute left-3 top-2.5 text-gray-400" />
                            <input
                                type="password"
                                placeholder="Password"
                                className="modal-input w-full border border-gray-300 rounded-md py-2 pl-10 pr-4 focus:outline-none focus:ring-2 focus:ring-orange-500"
                                value="easyPass789"
                            />
                        </div>
                        <div className="relative">
                            <FiUser className="absolute left-3 top-2.5 text-gray-400" />
                            <input
                                type="text"
                                placeholder="Gender"
                                className="modal-input w-full border border-gray-300 rounded-md py-2 pl-10 pr-4 focus:outline-none focus:ring-2 focus:ring-orange-500"
                                value="male"
                            />
                        </div>

                        <div className="relative col-span-2">
                            <FiMapPin className="absolute left-3 top-2.5 text-gray-400" />
                            <textarea
                                type="text"
                                placeholder="Address"
                                className="modal-input w-full border border-gray-300 rounded-md py-2 pl-10 pr-4 focus:outline-none focus:ring-2 focus:ring-orange-500"
                                value="1717 Birch Lane, North Haverbrook, IL"
                            />
                        </div>
                    </div>
                    <button className="w-full m-2 bg-orange-500 text-white py-2 rounded-md font-semibold hover:bg-orange-600 transition duration-200">
                        Add Customer
                    </button>
                </div>
            </Modal>

            {/* Edit Customer Modal */}
            <Modal open={isEditModalOpen} onClose={handleModalClose} center>
            <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md">
                    <div className="flex items-center justify-between mb-4">
                        <h2 className="text-xl font-semibold text-orange-500">Edit Customer</h2>
                        <FiUser className="text-orange-500 text-2xl" />
                    </div>
                    <div className=" grid grid-cols-2 gap-5 ">
                        <div className="relative">
                            <FiUser className="absolute left-3 top-2.5 text-gray-400" />
                            <input
                                type="text"
                                placeholder="First Name"
                                className="modal-input w-full border border-gray-300 rounded-md py-2 pl-10 pr-4 focus:outline-none focus:ring-2 focus:ring-orange-500"
                                value="Tom"
                            />
                        </div>
                        <div className="relative">
                            <FiUser className="absolute left-3 top-2.5 text-gray-400" />
                            <input
                                type="text"
                                placeholder="Last Name"
                                className="modal-input w-full border border-gray-300 rounded-md py-2 pl-10 pr-4 focus:outline-none focus:ring-2 focus:ring-orange-500"
                                value="Lewis"
                            />
                        </div>
                        <div className="relative">
                            <FiMail className="absolute left-3 top-2.5 text-gray-400" />
                            <input
                                type="email"
                                placeholder="Email"
                                className="modal-input w-full border border-gray-300 rounded-md py-2 pl-10 pr-4 focus:outline-none focus:ring-2 focus:ring-orange-500"
                                value="tom.lewis@example.com"
                            />
                        </div>
                        <div className="relative">
                            <input
                                type="date"
                                placeholder="Date of Birth"
                                className="modal-input w-full border border-gray-300 rounded-md py-2 pl-10 pr-4 focus:outline-none focus:ring-2 focus:ring-orange-500"
                                value="1990-04-01"
                            />
                        </div>
                        <div className="relative">
                            <FiCheckCircle className="absolute left-3 top-2.5 text-gray-400" />
                            <input
                                type="text"
                                placeholder="Status"
                                className="modal-input w-full border border-gray-300 rounded-md py-2 pl-10 pr-4 focus:outline-none focus:ring-2 focus:ring-orange-500"
                                value="active"
                            />
                        </div>
                        <div className="relative">
                            <FiPhone className="absolute left-3 top-2.5 text-gray-400" />
                            <input
                                type="text"
                                placeholder="Phone Number"
                                className="modal-input w-full border border-gray-300 rounded-md py-2 pl-10 pr-4 focus:outline-none focus:ring-2 focus:ring-orange-500"
                                value="555-6789"
                            />
                        </div>
                        <div className="relative">
                            <FiLock className="absolute left-3 top-2.5 text-gray-400" />
                            <input
                                type="password"
                                placeholder="Password"
                                className="modal-input w-full border border-gray-300 rounded-md py-2 pl-10 pr-4 focus:outline-none focus:ring-2 focus:ring-orange-500"
                                value="easyPass789"
                            />
                        </div>
                        <div className="relative">
                            <FiUser className="absolute left-3 top-2.5 text-gray-400" />
                            <input
                                type="text"
                                placeholder="Gender"
                                className="modal-input w-full border border-gray-300 rounded-md py-2 pl-10 pr-4 focus:outline-none focus:ring-2 focus:ring-orange-500"
                                value="male"
                            />
                        </div>

                        <div className="relative col-span-2">
                            <FiMapPin className="absolute left-3 top-2.5 text-gray-400" />
                            <textarea
                                type="text"
                                placeholder="Address"
                                className="modal-input w-full border border-gray-300 rounded-md py-2 pl-10 pr-4 focus:outline-none focus:ring-2 focus:ring-orange-500"
                                value="1717 Birch Lane, North Haverbrook, IL"
                            />
                        </div>
                    </div>
                    <button className="w-full m-2 bg-orange-500 text-white py-2 rounded-md font-semibold hover:bg-orange-600 transition duration-200">
                        Update
                    </button>
                </div>
            </Modal>
        </div>
    );
};

export default CreateUser;
