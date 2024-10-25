import React, { useState } from 'react'
import { RiHome4Line } from "react-icons/ri";
import { LuHistory } from "react-icons/lu";
import { TbLayoutGridAdd } from "react-icons/tb";
import { CgProfile } from "react-icons/cg";
import { GrUserSettings } from "react-icons/gr";
import { NavLink } from 'react-router-dom';
import styles from './css/sidebar.module.css'
import logo from '../../assets/icons/logo-food-transformed.png'
const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false);
  const links = [
    { to: '/AdminDashboard', icons: <RiHome4Line size={25} />, text: "Home", roles: ["admin"] },
    { to: '/CustomerDashBoard', icons: <RiHome4Line size={25} />, text: "Home", roles: ["customer"] },
    { to: '/SellerDashboard', icons: <RiHome4Line size={25} />, text: "Home", roles: ["seller"] },
    { to: '/OrderHistory', icons: <LuHistory size={25} />, text: "Orders", roles: ["seller", "customer", "admin"] },
    { to: '/FoodList', icons: <TbLayoutGridAdd size={25} />, text: "Foods", roles: ["seller"] },
    { to: '/CreateUser', icons: <GrUserSettings size={25} />, text: "Profile", roles: ["seller", "admin", "customer"] },
    { to: '/CustomerProfile', icons: <CgProfile size={25} />, text: "users", roles: ["admin"] },
    { to: '/RestaurantProfile', icons: <CgProfile size={25} />, text: "users", roles: ["admin"] }

  ]
  return (
    <div>
      <nav className={`${styles.nav} ${styles.scrollbarhide} ${collapsed ? " w-20" : " w-[13rem]"} transition-all duration-200 border-e border-e-gray-200 h-screen`}>
        <div className=' flex items-center justify-center py-4 ' onClick={()=>setCollapsed(!collapsed)}>
          <img src={logo} alt='log' className=' object-contain w-7 h-7 cursor-pointer' />
          {
            !collapsed&&
            <div className=' text-2xl flex items-center font-medium cursor-pointer' >
              <span className=' text-[#D91400] font-medium'>Go</span>
              <span className=' font-medium'>Meal</span>
            </div>
          }
        </div>
        <div className=' my-7'>
          {
            links?.map((menu, index) => (
              <NavLink key={index}
                to={menu.to}
                className={`   rounded p-2 m-3 my-4 transition-all  text-[#191919] ${collapsed ? " grid-cols-1" : " grid-cols-[40%,60%]"}  transition-all duration-200 grid   gap-5 text-lg justify-center `}
                activeClassName="active-link"
                
              >
                <span className={` relative flex ${collapsed ? "justify-center customtooltip" : "justify-end"}`} data-title={menu.text}>{menu.icons}</span><span style={{ fontFamily: "Poppins-Medium" }} className={` flex justify-start ${collapsed ? "hidden" : "block"}`}>{menu.text}</span>
              </NavLink>
            ))
          }
        </div>
      </nav>
    </div>
  )
}

export default Sidebar
