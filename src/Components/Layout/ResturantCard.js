import React from 'react'
import { FaMapMarkerAlt } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
const dummyData = [
    {
        image: "https://images.unsplash.com/photo-1543770435-ea17a28b1c70?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMTkzNjN8MHwxfGFsbHwyfHx8fHx8fHwxNjE5MTc5NTg1&ixlib=rb-1.2.1&q=80&w=1080",
        categories: ["briyani", "juice"],
        location: "New York",
        restaurantName: "Spice Heaven"
    },
    {
        image: "https://images.unsplash.com/photo-1585942824291-e05f5026f7d1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMTkzNjN8MHwxfGFsbHwzfHx8fHx8fHwxNjE5MTc5NTg1&ixlib=rb-1.2.1&q=80&w=1080",
        categories: ["juice"],
        location: "Los Angeles",
        restaurantName: "Juice Corner"
    },
    {
        image: "https://images.unsplash.com/photo-1552566626-bd5c9a49e757?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMTkzNjN8MHwxfGFsbHw0fHx8fHx8fHwxNjE5MTc5NTg1&ixlib=rb-1.2.1&q=80&w=1080",
        categories: ["briyani", "juice", "dessert", "salad", "soup"],
        location: "Chicago",
        restaurantName: "Biryani House"
    },
    {
        image: "https://images.unsplash.com/photo-1496417263034-38ec4f0b665a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMTkzNjN8MHwxfGFsbHw1fHx8fHx8fHwxNjE5MTc5NTg1&ixlib=rb-1.2.1&q=80&w=1080",
        categories: ["briyani", "juice"],
        location: "Houston",
        restaurantName: "Flavor Town"
    },
    {
        image: "https://images.unsplash.com/photo-1600718377796-b24519b8e2c6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMTkzNjN8MHwxfGFsbHw2fHx8fHx8fHwxNjE5MTc5NTg1&ixlib=rb-1.2.1&q=80&w=1080",
        categories: ["juice"],
        location: "Phoenix",
        restaurantName: "Tropical Twist"
    },
    {
        image: "https://images.unsplash.com/photo-1582515073498-024f9d4d27dd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMTkzNjN8MHwxfGFsbHw3fHx8fHx8fHwxNjE5MTc5NTg1&ixlib=rb-1.2.1&q=80&w=1080",
        categories: ["briyani", "juice", "dessert", "salad", "soup"],
        location: "Philadelphia",
        restaurantName: "Royal Biryani"
    },
    {
        image: "https://images.unsplash.com/photo-1581009146145-8af2b52713a2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMTkzNjN8MHwxfGFsbHw4fHx8fHx8fHwxNjE5MTc5NTg1&ixlib=rb-1.2.1&q=80&w=1080",
        categories: ["briyani", "juice"],
        location: "San Antonio",
        restaurantName: "Spicy Bites"
    },
    {
        image: "https://images.unsplash.com/photo-1513105741256-8a7199f36e54?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMTkzNjN8MHwxfGFsbHw5fHx8fHx8fHwxNjE5MTc5NTg1&ixlib=rb-1.2.1&q=80&w=1080",
        categories: ["juice"],
        location: "San Diego",
        restaurantName: "Pure Juice"
    },
    {
        image: "https://images.unsplash.com/photo-1526403226979-9e9c12c843b1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMTkzNjN8MHwxfGFsbHwxMHx8fHx8fHwxNjE5MTc5NTg1&ixlib=rb-1.2.1&q=80&w=1080",
        categories: ["briyani", "juice", "dessert", "salad", "soup"],
        location: "Dallas",
        restaurantName: "Biryani Delight"
    },
    {
        image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMTkzNjN8MHwxfGFsbHwxMXx8fHx8fHwxNjE5MTc5NTg1&ixlib=rb-1.2.1&q=80&w=1080",
        categories: ["briyani", "juice"],
        location: "San Jose",
        restaurantName: "Taste of India"
    },
    {
        image: "https://images.unsplash.com/photo-1521302080544-3c41bd1276f3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMTkzNjN8MHwxfGFsbHwxMnx8fHx8fHwxNjE5MTc5NTg1&ixlib=rb-1.2.1&q=80&w=1080",
        categories: ["juice"],
        location: "Austin",
        restaurantName: "Juicy Treats"
    },
    {
        image: "https://images.unsplash.com/photo-1543352634-a7ab4e1e3ec5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMTkzNjN8MHwxfGFsbHwxM3x8fHx8fHwxNjE5MTc5NTg1&ixlib=rb-1.2.1&q=80&w=1080",
        categories: ["briyani", "juice", "dessert", "salad", "soup"],
        location: "Jacksonville",
        restaurantName: "Biryani Junction"
    },
    {
        image: "https://images.unsplash.com/photo-1587133314288-9d7f20f2d964?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMTkzNjN8MHwxfGFsbHwxNHx8fHx8fHwxNjE5MTc5NTg1&ixlib=rb-1.2.1&q=80&w=1080",
        categories: ["briyani", "juice"],
        location: "San Francisco",
        restaurantName: "Urban Spice"
    },
    {
        image: "https://images.unsplash.com/photo-1555992336-03a23c67f05d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMTkzNjN8MHwxfGFsbHwxNXx8fHx8fHwxNjE5MTc5NTg1&ixlib=rb-1.2.1&q=80&w=1080",
        categories: ["juice"],
        location: "Columbus",
        restaurantName: "Fresh Squeeze"
    },
    {
        image: "https://images.unsplash.com/photo-1508898578281-774ac4893c0b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMTkzNjN8MHwxfGFsbHwxNnx8fHx8fHwxNjE5MTc5NTg1&ixlib=rb-1.2.1&q=80&w=1080",
        categories: ["briyani", "juice", "dessert", "salad", "soup"],
        location: "Fort Worth",
        restaurantName: "Biryani Corner"
    },
    {
        image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMTkzNjN8MHwxfGFsbHwxN3x8fHx8fHwxNjE5MTc5NTg1&ixlib=rb-1.2.1&q=80&w=1080",
        categories: ["briyani", "juice"],
        location: "Indianapolis",
        restaurantName: "Masala Magic"
    },
    {
        image: "https://images.unsplash.com/photo-1519985176271-adb1088fa94c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMTkzNjN8MHwxfGFsbHwxOHx8fHx8fHwxNjE5MTc5NTg1&ixlib=rb-1.2.1&q=80&w=1080",
        categories: ["juice"],
        location: "Charlotte",
        restaurantName: "Juice Hub"
    },
    {
        image: "https://images.unsplash.com/photo-1523741543316-beb7fc7023d8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMTkzNjN8MHwxfGFsbHwxOXx8fHx8fHwxNjE5MTc5NTg1&ixlib=rb-1.2.1&q=80&w=1080",
        categories: ["briyani"],
        location: "Seattle",
        restaurantName: "Spice & Rice"
    },
    {
        image: "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMTkzNjN8MHwxfGFsbHwyMHx8fHx8fHwxNjE5MTc5NTg1&ixlib=rb-1.2.1&q=80&w=1080",
        categories: ["briyani", "juice"],
        location: "Denver",
        restaurantName: "Curry House"
    },
    {
        image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMTkzNjN8MHwxfGFsbHwyMXx8fHx8fHwxNjE5MTc5NTg1&ixlib=rb-1.2.1&q=80&w=1080",
        categories: ["juice"],
        location: "Washington",
        restaurantName: "Juice Fresh"
    }
];


const ResturantCard = () => {
    const navigate=useNavigate();
    
    return (
        <div className="container mx-auto px-10 sm:px-5 lg:px-20" >
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6 place-items-center" onClick={()=>navigate("/FoodMenu")}>
                {dummyData.map((data, index) => (
                    <div key={index} className=" rounded-md h-full overflow-hidden shadow-md bg-white hover:shadow-xl hover:w-[98%]  cursor-pointer transition-shadow duration-300 w-full" >
                        <img className="w-full h-60" src={data.image} alt="Food" />
                        <div className="px-6 pt-3">
                            <div className="font-bold text-xl text-orange-600">{data.restaurantName}</div>
                        </div>
                        <div className="px-6 relative flex items-center">
                            <span
                                className="inline-flex items-center text-orange-800 text-sm mr-2 mb-2 rounded-full truncate"
                            // Adjust maxWidth based on your design needs
                            >
                                {data.categories.slice(0, 5).map((category, index) => (
                                    <span key={index}>
                                        {category}
                                        {index < data.categories.slice(0, 5).length - 1 ? ", " : ""}
                                    </span>
                                ))}
                                {data.categories.length > 3 && (
                                    <span>...</span>
                                )}
                            </span>
                        </div>

                        <p className="text-gray-700 text-base px-6 pb-3">
                            <span className="flex items-center">
                                <FaMapMarkerAlt className="text-orange-500 mr-2" /> {data.location}
                            </span>
                        </p>
                    </div>
                ))}
            </div>
            
        </div>
    )
}
export default ResturantCard
