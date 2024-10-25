import React, { useState } from 'react';
import { CiShare2 } from 'react-icons/ci';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { LiaDirectionsSolid } from 'react-icons/lia';
import { MdRestaurantMenu } from 'react-icons/md';
import { SiOverleaf } from 'react-icons/si';

const restaurantData = {
  restaurantImage: "https://images.unsplash.com/photo-1543353071-087092ec3931",
  restaurantName: "Delicious Bites",
  description: "A cozy place offering a wide range of delicious foods.",
  location: "123 Food Street, Culinary City",
  rating: 4.5,
  categories: [
    {
      categoryName: "Burger",
      menu: [
        {
          name: "Mutton Biryani Burger",
          description: "A delicious fusion of mutton biryani and a burger.",
          discount: "10% off",
          price: "$12.99",
          image: "https://images.unsplash.com/photo-1604908553719-1cbe83192f1a"
        },
        {
          name: "Cheese Burger",
          description: "Classic burger with melted cheese and fresh veggies.",
          discount: "15% off",
          price: "$8.99",
          image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd"
        },
        {
          name: "Veggie Delight Burger",
          description: "Healthy and tasty burger with a variety of veggies.",
          discount: "20% off",
          price: "$7.99",
          image: "https://images.unsplash.com/photo-1612874742608-25357fc11b03"
        }
      ]
    },
    {
      categoryName: "Juice",
      menu: [
        {
          name: "Orange Juice",
          description: "Freshly squeezed orange juice.",
          discount: "5% off",
          price: "$3.99",
          image: "https://images.unsplash.com/photo-1551861568-1e9b93d0ff0e"
        },
        {
          name: "Mango Smoothie",
          description: "Creamy and refreshing mango smoothie.",
          discount: "10% off",
          price: "$4.99",
          image: "https://images.unsplash.com/photo-1585033782889-4be49904f779"
        },
        {
          name: "Green Detox Juice",
          description: "Healthy green juice with a mix of spinach, kale, and apples.",
          discount: "15% off",
          price: "$5.99",
          image: "https://images.unsplash.com/photo-1598514982406-fbc7f72d0643"
        }
      ]
    },
    {
      categoryName: "Pizza",
      menu: [
        {
          name: "Pepperoni Pizza",
          description: "Classic pepperoni pizza with extra cheese.",
          discount: "20% off",
          price: "$14.99",
          image: "https://images.unsplash.com/photo-1601926048389-0f3f0c27f1f3"
        },
        {
          name: "Margherita Pizza",
          description: "Simple yet delicious margherita pizza.",
          discount: "15% off",
          price: "$12.99",
          image: "https://images.unsplash.com/photo-1564939558297-137fba3487a4"
        },
        {
          name: "BBQ Chicken Pizza",
          description: "Tangy BBQ chicken on a crispy crust.",
          discount: "10% off",
          price: "$15.99",
          image: "https://images.unsplash.com/photo-1542281286-9e0a16bb7366"
        }
      ]
    },
    {
      categoryName: "Pasta",
      menu: [
        {
          name: "Spaghetti Carbonara",
          description: "Classic Italian pasta with creamy sauce.",
          discount: "10% off",
          price: "$10.99",
          image: "https://images.unsplash.com/photo-1589308078054-832d3d36c625"
        },
        {
          name: "Penne Arrabbiata",
          description: "Spicy penne pasta with a rich tomato sauce.",
          discount: "15% off",
          price: "$9.99",
          image: "https://images.unsplash.com/photo-1586190848861-99aa4a171e90"
        },
        {
          name: "Fettuccine Alfredo",
          description: "Creamy fettuccine pasta with a garlic butter sauce.",
          discount: "20% off",
          price: "$11.99",
          image: "https://images.unsplash.com/photo-1589308078054-832d3d36c625"
        }
      ]
    },
    {
      categoryName: "Desserts",
      menu: [
        {
          name: "Chocolate Lava Cake",
          description: "Rich chocolate cake with a molten center.",
          discount: "10% off",
          price: "$6.99",
          image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587"
        },
        {
          name: "Tiramisu",
          description: "Classic Italian dessert with layers of coffee-soaked ladyfingers and mascarpone.",
          discount: "15% off",
          price: "$7.99",
          image: "https://images.unsplash.com/photo-1574106672688-5fa0f2e63baf"
        },
        {
          name: "Cheesecake",
          description: "Creamy cheesecake with a graham cracker crust.",
          discount: "20% off",
          price: "$8.99",
          image: "https://images.unsplash.com/photo-1604184764225-6a4ca272b7f6"
        }
      ]
    }
  ]
};




const FoodMenu = () => {
  const [ShowMenus, setShowMenus] = useState(false)
  return (
    <div className='  px-10 md:px-24 py-5 flex justify-center relative'>
      <div className=' w-[75%]'>
        <div>
          <img src={restaurantData.restaurantImage} alt='image' className=' w-full rounded-lg h-[21rem]' />
          <div>
            <h1 className=' font-bold text-xl md:text-3xl py-3'>{restaurantData.restaurantName}</h1>
            <div className="flex items-center mb-4">
              <span className="text-yellow-500">
                {"★".repeat(Math.floor(restaurantData.rating))}
                {"☆".repeat(5 - Math.floor(restaurantData.rating))}
              </span>
              <span className="ml-2 text-gray-500">({restaurantData.rating})</span>
            </div>
          </div>
          <p className=' text-lg'>{restaurantData.description}</p>
          <span className=' text-gray-400 flex items-center gap-2 py-3 text-sm'><FaMapMarkerAlt />{restaurantData.location}</span>
          <div className=' flex items-center gap-3 py-3'>
            <div className=' border border-gray-300 rounded-lg px-2 py-1 flex items-center gap-2'>
              <LiaDirectionsSolid className=' text-orange-500' />
              Direction
            </div>
            <div className=' border border-gray-300 rounded-lg px-2 py-1 flex items-center gap-2'>
              <CiShare2 className=' text-orange-500' />
              Share
            </div>
          </div>
        </div>
        <div className=' flex items-center justify-center  text-gray-400 relative py-8 bg-white gap-2'>
          <div className=' w-full h-px bg-gray-300 rounded-full absolute top-12'></div>
          <SiOverleaf className='  bg-white' />
          <span className=' text-xl font-medium tracking-widest bg-white z-50'>FOODS</span>
          <SiOverleaf className='  bg-white' />
        </div>
        <div className='grid grid-cols-1 gap-3'>
          {
            restaurantData.categories.map((cate) =>
              cate.menu.map((food, index) => (
                <div key={index} className=' shadow-sm rounded-lg border border-gray-200 flex justify-between'>
                  <div className=' p-3'>
                    <h3 className='text-xl font-bold'>{food.name}</h3>
                    <div className='flex items-center gap-2'>
                      <span className='font-semibold'>{food.price}</span>
                      <span className='text-green-500 text-sm'>{food.discount}</span>
                    </div>
                    <p className='text-sm text-gray-300'>{food.description}</p>
                  </div>
                  <div className='relative p-3'>
                    <img src={food.image} alt='food' className='bg-gray-100 rounded-lg w-[7.5rem] h-[7.5rem]' />
                    <button className='font-bold rounded-md border border-gray-100 bg-white text-orange-500 hover:text-white hover:bg-orange-500 transition-all duration-300 right-[30%] shadow px-2 py-1 absolute bottom-2'>ADD</button>
                  </div>
                </div>
              ))
            )
          }
        </div>
      </div>
      <div className=' bg-black fixed bottom-5 right-[10%] shadow-md cursor-pointer rounded-full p-2 px-4 grid grid-cols-1 place-items-center' onClick={() => { setShowMenus(!ShowMenus) }}>
        <MdRestaurantMenu size={40} className=' text-white' />
        <span className=' text-white font-medium'>MENU</span>
      </div>
      <div
        className={`${ShowMenus ? ' right-[22%] p-3 scale-1 bg-black rounded-lg opacity-100' : ' right-[10%] scale-0  p-0  opacity-0'
          } transition-all duration-500 ease-linear fixed bottom-10 w-2/5 overflow-hidden gap-2 origin-bottom-right `}
      >
        {ShowMenus&&<div className='grid grid-cols-1 gap-3'>
          {
            restaurantData.categories.map((cate, index) => (
              <div key={index} className='flex items-center w-full text-gray-100 justify-between hover:text-white hover:text-lg'>
                <span className='font-bold'  >{cate.categoryName}</span>
                <span className='font-bold'  >{cate.menu.length}</span>
              </div>
            ))
          }
        </div>}
      </div>

    </div>
  )
}
export default FoodMenu;
