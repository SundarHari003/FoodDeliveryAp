import React, { useEffect, useState } from 'react';
import Modal from 'react-modal';
import { Modal as Mode } from 'react-responsive-modal'
import { RiHome4Line } from "react-icons/ri";
import { LuHistory } from "react-icons/lu";
import { TbLayoutGridAdd } from "react-icons/tb";
import { CgProfile } from "react-icons/cg";
import { GrUserSettings } from "react-icons/gr";
import { NavLink, useNavigate } from 'react-router-dom';
import { FaCheckCircle, FaSearch } from 'react-icons/fa';
import { CiShoppingCart } from "react-icons/ci";
import { IoCloseCircle, IoLogInOutline, IoMenuOutline, IoSearchOutline } from 'react-icons/io5';
import { IoMdClose } from 'react-icons/io';
import logo from '../../assets/icons/logo-food-transformed.png';
import styles from './css/sidebar.module.css';
import { GoHistory } from 'react-icons/go';

Modal.setAppElement('#root'); // Required for accessibility

const Header = () => {
    const [searchfood, setSearch] = useState(null);
    const [OpenMenu, setOpenMenu] = useState(false);
    const [OpenSearch, setOpenSearch] = useState(false);
    const [SignPage, setSignPage] = useState(false);
    const [delivery, setDelivery] = useState(false)
    const navigation = useNavigate();
    const links = [
        { to: '/AdminDashboard', icons: <RiHome4Line size={25} />, text: "Home", roles: ["admin"] },
        { to: '/CustomerDashBoard', icons: <RiHome4Line size={25} />, text: "Home", roles: ["customer"] },
        { to: '/SellerDashboard', icons: <RiHome4Line size={25} />, text: "Home", roles: ["seller"] },
        { to: '/OrderHistory', icons: <LuHistory size={25} />, text: "Orders", roles: ["seller", "customer", "admin"] },
        { to: '/FoodList', icons: <TbLayoutGridAdd size={25} />, text: "Foods", roles: ["seller"] },
        { to: '/CustomerProfile', icons: <CgProfile size={25} />, text: "Profile", roles: ["seller", "admin", "customer"] },
        { to: '/', icons: <GrUserSettings size={25} />, text: "users", roles: ["admin"] }
    ];

    const handlefiltersearch = (e) => {
        setSearch(e.target.value);
    };

    const sign = () => {
        setSignPage(true);

    };

    const closesign = () => {
        setSignPage(false);
    };
    const Handledelivery = () => {
        console.log("dsadsad");

        setDelivery(true);
    };

    const CloseDelivery = () => {
        setDelivery(false);
    };
    return (
        <div>
            {/* Header UI Code */}
            <div className='shadow border-b border-gray-100 p-3 md:grid grid-cols-[1fr,auto,auto] gap-6 items-center hidden'>
                <div className='relative w-[60%] flex justify-end'>
                    <input
                        type='text'
                        name='search'
                        id='search'
                        value={searchfood}
                        onChange={handlefiltersearch}
                        className={`rounded-xl shadow text-gray-800 ${searchfood ? "bg-white border" : "bg-gray-100 border"} focus:outline-none py-2 p-5 w-full`}
                        placeholder='Search Dishes...'
                    />
                    <label htmlFor='search' className='absolute top-2 right-3 text-gray-700'><FaSearch size={20} /></label>
                </div>
                <div className='flex items-center justify-center gap-5'>
                <span className='text-gray-500  hover:text-primary flex items-center font-medium gap-2 px-3 py-1 rounded-full  cursor-pointer' onClick={() => navigation("/OrderHistory")}>My Orders <GoHistory /></span>
                    <span className='text-primary hover:text-white hover:bg-primary flex items-center font-medium gap-2 px-3 py-1 rounded-full bg-opacity-85 cursor-pointer' onClick={() => navigation("/FoodCart")}>Cart <CiShoppingCart /></span>
                    <button className='text-black hover:bg-black rounded-full hover:text-white px-3 py-1 font-medium bg-opacity-85 cursor-pointer' onClick={Handledelivery}>Delivery</button>
                </div>
                <div className='flex items-center justify-end gap-6 w-full'>
                    <div className='flex items-center gap-2'>
                        <button className='font-medium bg-gray-300 rounded-full px-3 py-1 cursor-pointer' onClick={sign}>SignIn</button>
                    </div>
                </div>
            </div>
            <div className='border-b border-b-gray-200 p-1 px-3 grid grid-cols-[1fr,auto] gap-3 items-center md:hidden'>
                <div className='flex items-center justify-start gap-2 w-full'>
                    <IoMenuOutline size={26} className='cursor-pointer' onClick={() => setOpenMenu(true)} />
                    <div className='relative flex justify-start items-center'>
                        <label htmlFor='search' className={`${OpenSearch ? "absolute top-[0.35rem] right-2" : "relative"} transition-all duration-200 text-gray-700`}>
                            {OpenSearch ? <IoCloseCircle size={15} onClick={() => setOpenSearch(false)} /> :
                                <IoSearchOutline size={20} onClick={() => setOpenSearch(true)} />}
                        </label>
                        <input
                            type='text'
                            name='search'
                            id='search'
                            value={searchfood}
                            onChange={handlefiltersearch}
                            className={`rounded-full transition-all duration-200 text-gray-800 ${OpenSearch ? "bg-white border w-full py-[0.10rem] px-5 text-sm" : "w-0"} focus:outline-none`}
                            placeholder='Search Dishes...'
                        />
                    </div>
                </div>
                <div className='flex items-center justify-end gap-5'>
                    <span className='text-primary hover:text-white hover:bg-primary flex items-center font-medium gap-2 px-3 py-1 rounded-full bg-opacity-85 cursor-pointer' onClick={() => navigation("/Footcart")}><CiShoppingCart size={17} /></span>
                    <div className='flex items-center gap-2'>
                        <button className='font-medium rounded-full cursor-pointer' onClick={sign}><IoLogInOutline size={20} /></button>
                    </div>
                </div>
            </div>

            {/* Sidebar */}
            <div className={`fixed z-[100] top-0 bg-white ${OpenMenu ? "w-[13rem]" : "w-0"} transition-all duration-300 h-screen md:hidden shadow-md`}>
                <nav className={`${styles.nav} ${styles.scrollbarhide} ${OpenMenu && "border-e border-e-gray-200"}`}>
                    <div className='flex items-center justify-center py-4 relative'>
                        <img src={logo} alt='logo' className='object-contain w-7 h-7' />
                        <div className='text-2xl flex items-center font-medium'>
                            <span className='text-[#D91400] font-medium'>Go</span>
                            <span className='font-medium'>Meal</span>
                        </div>
                        <span className='absolute top-2 right-2' onClick={() => setOpenMenu(false)}><IoMdClose /></span>
                    </div>
                    <div className='my-7'>
                        {links.map((menu, index) => (
                            <NavLink key={index}
                                to={menu.to}
                                className={`rounded p-2 m-3 my-4 transition-all text-[#191919] grid grid-cols-[40%,60%] gap-5 text-lg justify-center`}
                                activeClassName="active-link">
                                <span className='flex justify-end'>{menu.icons}</span>
                                <span style={{ fontFamily: "Poppins-Medium" }} className='flex justify-start'>{menu.text}</span>
                            </NavLink>
                        ))}
                    </div>
                </nav>
            </div>

            {/* Sign In/Sign Up Modal */}
            <SigningPage show={SignPage} onhide={closesign} />
            <DeliverStatus show={delivery} onhide={CloseDelivery} />
        </div>
    );
};
const DeliverStatus = ({ show, onhide }) => {

    const order = {
        placedDate: 'Nov 14',
        processingDate: 'Nov 15',
        shippedDate: 'Nov 15',
        deliveredDate: 'Nov 16',
        orderNumber: '9087654356789',
        customerName: 'Daniel Rasmussen',
        items: [
            { name: 'Pizza Margherita', price: '12.00' },
            { name: 'Caesar Salad', price: '8.00' },
            { name: 'Tiramisu', price: '6.00' },
        ],
    };
    const [currentStep, setCurrentStep] = useState(1);

    const handleStepClick = (stepId) => {
        setCurrentStep(stepId);
    };
    const steps = [
        { id: 1, title: 'Order Placed' },
        { id: 2, title: 'Processing' },
        { id: 3, title: 'Shipped' },
        { id: 4, title: 'Delivered' },
    ];
    return (
        <Modal
            isOpen={show}
            onRequestClose={onhide}
            contentLabel="Delivery Status"
            className="modal !w-[50vw] p-6"
            overlayClassName="overlay"
            closeTimeoutMS={200}
        >
            <div className="bg-white w-full p-3 rounded-lg ">
                <div className="flex w-full">
                    {/* Stepper */}
                    <div className="w-1/4 items-start justify-center  flex flex-col border-e border-gray-200">
                        {steps.map((step, index) => (
                            <div key={step.id} className="relative flex items-center mb-8">
                                <div
                                    className={`flex items-center justify-center w-8 h-8 rounded-full cursor-pointer transition-colors duration-300
              ${currentStep >= step.id ? "bg-orange-500 text-white" : "bg-gray-200 text-gray-500"}`}
                                    onClick={() => handleStepClick(step.id)}
                                >
                                    {currentStep > step.id ? (
                                        <FaCheckCircle className="text-white" />
                                    ) : (
                                        <span className="text-sm">{index + 1}</span>
                                    )}
                                </div>
                                <div className="ml-4">
                                    <p
                                        className={`text-sm ${currentStep >= step.id ? "text-orange-500 font-semibold" : "text-gray-500"}`}
                                    >
                                        {step.title}
                                    </p>
                                </div>
                                {index < steps.length - 1 && (
                                    <div
                                        className={`absolute top-8 left-3 w-2 h-full bg-gray-200 transition-colors duration-300
                ${currentStep > step.id ? "bg-orange-500" : ""}`}
                                    />
                                )}
                            </div>
                        ))}
                    </div>

                    {/* Order Details */}
                    <div className=" w-3/4 pl-6">
                        <div className=' flex items-end py-3 justify-end flex-col w-full'>
                            <p className="text-sm">Order # {order.orderNumber}</p>
                            <p className="text-sm">Ships to {order.customerName}</p>
                            <a href="#" className="text-orange-500 text-sm">Details</a>
                        </div>
                        <div className=' grid grid-cols-2 gap-2'>
                            {order.items.map((item, index) => (
                                <div key={index} className="mb-4">
                                    <div className="flex justify-between">
                                        <div>
                                            <h4 className="font-semibold text-lg">{item.name}</h4>
                                            <p className="text-orange-500 font-semibold">${item.price}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="mt-4">
                            <button className="px-4 py-2 bg-orange-500 text-white rounded-md hover:bg-orange-600 transition duration-200">
                                Cancel Order
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </Modal>
    )
}

const SigningPage = ({ show, onhide }) => {
    const [signing, setsigning] = useState(false);

    const handleClose = () => {
        // setsigning(true);
        setTimeout(onhide, 100); // Match the duration of the closing animation
    };
    return (
        <Modal
            isOpen={show}
            onRequestClose={handleClose}
            contentLabel="Sign In/Sign Up"
            className={`modal ${show ? '' : 'modal-closing'} p-5`}
            overlayClassName="overlay"
            closeTimeoutMS={200}
        >
            <div className='flex items-center h-fit rounded-md ' >
                {
                    signing ?
                        <div className=' w-full p-5'>
                            <div className=' flex items-center'>
                                <h2 className='tracking-widest text-primary text-xl font-bold cursor-pointer hidden lg:block'>Go Meal</h2>
                            </div>
                            <div className=' grid grid-cols-1  p-2 ps-0 gap-2'>
                                <span className=' text-xl font-medium '>Welcome Back</span>
                                <span className=' text-gray-400'>Signin with email address and password</span>
                            </div>
                            <form className=' grid grid-cols-1 gap-2'>
                                <div className=' grid grid-cols-1 gap-2'>
                                    <label className=' font-medium text-sm'>Email </label>
                                    <input
                                        type='text'
                                        className='rounded-md text-sm focus:outline p-2 border border-gray-200 bg-white focus:outline-none'
                                        placeholder='Enter your Email address'
                                    />
                                </div>
                                <div className=' grid grid-cols-1 gap-2'>
                                    <label htmlFor="pass" className=" font-medium text-sm">Password</label>
                                    <input
                                        type="password"
                                        className='rounded-md text-sm focus:outline p-2 border border-gray-200 bg-white focus:outline-none'
                                        name="pass"
                                        id="pass"
                                        placeholder="Enter your Password"
                                    />
                                </div>
                                <div className=' flex items-center justify-between py-3'>
                                    <div className="flex items-center gap-1">
                                        <input className="form-check-input" type="checkbox" value="" id="" />
                                        <label className="form-check-label text-sm" htmlFor=""> Remember me </label>
                                    </div>
                                    <span className='text-orange-500 text-sm'>Forget Password?</span>
                                </div>
                                <div className=' w-1/4'>
                                    <button type='submit' className=' bg-orange-600 text-gray-50 w-32 p-2 rounded-md'>Login</button>
                                </div>
                                <span className=' pt-3 text-center w-full text-sm'>Don't have Account? <span className=' text-blue-400 cursor-pointer' onClick={() => setsigning(false)}>SignUp</span></span>
                            </form>
                        </div> :
                        <div className='w-full p-5'>
                            <div className='flex items-center'>
                                <h2 className='tracking-widest text-primary text-xl font-bold cursor-pointer hidden lg:block'>Go Meal</h2>
                            </div>
                            <div className='grid grid-cols-1 p-4 ps-0 gap-2'>
                                <span className='text-xl font-medium'>Create Account</span>
                                <span className='text-gray-400'>Signup with your details</span>
                            </div>
                            <form className='grid grid-cols-1 gap-2'>
                                <div className=' grid grid-cols-2 gap-2'>
                                    <div className='grid grid-cols-1 gap-2'>
                                        <label className='font-medium text-sm'>First Name</label>
                                        <input
                                            type='text'
                                            className='rounded-md focus:outline p-2 border border-gray-200 bg-white text-sm focus:outline-none'
                                            placeholder='Enter your First Name'
                                        />
                                    </div>
                                    <div className='grid grid-cols-1 gap-2'>
                                        <label className='font-medium text-sm'>Last Name</label>
                                        <input
                                            type='text'
                                            className='rounded-md focus:outline p-2 border border-gray-200 bg-white text-sm focus:outline-none'
                                            placeholder='Enter your Last Name'
                                        />
                                    </div>
                                </div>
                                <div className=' grid grid-cols-2 gap-2'>
                                    <div className='grid grid-cols-1 gap-2'>
                                        <label className='font-medium text-sm'>Email</label>
                                        <input
                                            type='email'
                                            className='rounded-md focus:outline p-2 border border-gray-200 bg-white text-sm focus:outline-none'
                                            placeholder='Enter your Email address'
                                        />
                                    </div>
                                    <div className='grid grid-cols-1 gap-2'>
                                        <label className='font-medium text-sm'>Phone Number</label>
                                        <input
                                            type='text'
                                            className='rounded-md focus:outline p-2 border border-gray-200 bg-white text-sm focus:outline-none'
                                            placeholder='Enter your Phone Number'
                                        />
                                    </div>
                                </div>
                                <div className='grid grid-cols-1 gap-2'>
                                    <label htmlFor="pass" className="font-medium text-sm">Password</label>
                                    <input
                                        type="password"
                                        className='rounded-md focus:outline p-2 border border-gray-200 bg-white text-sm focus:outline-none'
                                        name="pass"
                                        id="pass"
                                        placeholder="Enter your Password"
                                    />
                                </div>
                                <div className='grid grid-cols-1 gap-2'>
                                    <label htmlFor="confirmPass" className="font-medium text-sm">Confirm Password</label>
                                    <input
                                        type="password"
                                        className='rounded-md focus:outline p-2 border border-gray-200 bg-white text-sm focus:outline-none'
                                        name="confirmPass"
                                        id="confirmPass"
                                        placeholder="Confirm your Password"
                                    />
                                </div>

                                <div className='w-1/4'>
                                    <button type='submit' className='bg-orange-600 text-gray-50 w-32 p-2 rounded-md'>SignUp</button>
                                </div>
                                <span className='pt-2 text-sm text-center w-full'>Already have an Account? <span className='text-blue-400 cursor-pointer' onClick={() => setsigning(true)}>Login</span></span>
                            </form>
                        </div>
                }
            </div>
        </Modal>
    );
};

export default Header;
