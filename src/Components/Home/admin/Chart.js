import React, { useState } from 'react';
import { PieChart, Pie, Cell, Tooltip, BarChart, Bar, XAxis, YAxis, CartesianGrid, Legend, ResponsiveContainer, LineChart, Line } from 'recharts';
import Select from 'react-select'
const customStyles = {
    control: (provided, state) => ({
        ...provided,
        boxShadow: state.isFocused ? '0 0 0 2px orange' : null,
        borderColor: state.isFocused ? 'orange' : provided.borderColor,
        '&:hover': {
            borderColor: 'lightorange',
        },
    })
};
const dataOverallRevenue = {
    '2020': [
        { month: 'Jan', revenue: 20000 },
        { month: 'Feb', revenue: 18000 },
        { month: 'Mar', revenue: 22000 },
        { month: 'Apr', revenue: 24000 },
        { month: 'May', revenue: 20000 },
        { month: 'Jun', revenue: 21000 },
        { month: 'Jul', revenue: 23000 },
        { month: 'Aug', revenue: 25000 },
        { month: 'Sep', revenue: 22000 },
        { month: 'Oct', revenue: 26000 },
        { month: 'Nov', revenue: 24000 },
        { month: 'Dec', revenue: 25000 },
    ],
    '2021': [
        { month: 'Jan', revenue: 30000 },
        { month: 'Feb', revenue: 28000 },
        { month: 'Mar', revenue: 32000 },
        { month: 'Apr', revenue: 34000 },
        { month: 'May', revenue: 30000 },
        { month: 'Jun', revenue: 31000 },
        { month: 'Jul', revenue: 33000 },
        { month: 'Aug', revenue: 35000 },
        { month: 'Sep', revenue: 32000 },
        { month: 'Oct', revenue: 36000 },
        { month: 'Nov', revenue: 34000 },
        { month: 'Dec', revenue: 35000 },
    ],
    '2022': [
        { month: 'Jan', revenue: 40000 },
        { month: 'Feb', revenue: 36000 },
        { month: 'Mar', revenue: 42000 },
        { month: 'Apr', revenue: 44000 },
        { month: 'May', revenue: 40000 },
        { month: 'Jun', revenue: 41000 },
        { month: 'Jul', revenue: 43000 },
        { month: 'Aug', revenue: 45000 },
        { month: 'Sep', revenue: 42000 },
        { month: 'Oct', revenue: 46000 },
        { month: 'Nov', revenue: 44000 },
        { month: 'Dec', revenue: 45000 },
    ],
    '2023': [
        { month: 'Jan', revenue: 42000 },
        { month: 'Feb', revenue: 38000 },
        { month: 'Mar', revenue: 44000 },
        { month: 'Apr', revenue: 46000 },
        { month: 'May', revenue: 42000 },
        { month: 'Jun', revenue: 43000 },
        { month: 'Jul', revenue: 45000 },
        { month: 'Aug', revenue: 47000 },
        { month: 'Sep', revenue: 44000 },
        { month: 'Oct', revenue: 48000 },
        { month: 'Nov', revenue: 46000 },
        { month: 'Dec', revenue: 47000 },
    ],
    '2024': [
        { month: 'Jan', revenue: 43000 },
        { month: 'Feb', revenue: 39000 },
        { month: 'Mar', revenue: 45000 },
        { month: 'Apr', revenue: 47000 },
        { month: 'May', revenue: 43000 },
        { month: 'Jun', revenue: 44000 },
        { month: 'Jul', revenue: 46000 },
        { month: 'Aug', revenue: 48000 },
        { month: 'Sep', revenue: 45000 },
        { month: 'Oct', revenue: 49000 },
        { month: 'Nov', revenue: 47000 },
        { month: 'Dec', revenue: 48000 },
    ],
};

const Dashboard = () => {
    const [selectedYear, setSelectedYear] = useState('2020');
    const years = ['2020', '2021', '2022', '2023', '2024'];

    const handleYearChange = (selectedOption) => {
        setSelectedYear(selectedOption.value);
    };
    const SellerRevenue = [
        {
            year: '2020',
            data: [
                { seller: 'Seller 1', revenue: 2000 },
                { seller: 'Seller 2', revenue: 1800 },
                { seller: 'Seller 3', revenue: 2200 },
                { seller: 'Seller 4', revenue: 2400 },
                { seller: 'Seller 5', revenue: 2000 },
                { seller: 'Seller 6', revenue: 2100 },
                { seller: 'Seller 7', revenue: 2300 },
                { seller: 'Seller 8', revenue: 2500 },
                { seller: 'Seller 9', revenue: 2200 },
                { seller: 'Seller 10', revenue: 2600 },
                { seller: 'Seller 11', revenue: 2400 },
                { seller: 'Seller 12', revenue: 2500 },
            ],
        },
        {
            year: '2021',
            data: [
                { seller: 'Seller 1', revenue: 3000 },
                { seller: 'Seller 2', revenue: 2800 },
                { seller: 'Seller 3', revenue: 3200 },
                { seller: 'Seller 4', revenue: 3400 },
                { seller: 'Seller 5', revenue: 3000 },
                { seller: 'Seller 6', revenue: 3100 },
                { seller: 'Seller 7', revenue: 3300 },
                { seller: 'Seller 8', revenue: 3500 },
                { seller: 'Seller 9', revenue: 3200 },
                { seller: 'Seller 10', revenue: 3600 },
                { seller: 'Seller 11', revenue: 3400 },
                { seller: 'Seller 12', revenue: 3500 },
            ],
        },
        {
            year: '2022',
            data: [
                { seller: 'Seller 1', revenue: 4000 },
                { seller: 'Seller 2', revenue: 3600 },
                { seller: 'Seller 3', revenue: 4200 },
                { seller: 'Seller 4', revenue: 4400 },
                { seller: 'Seller 5', revenue: 4000 },
                { seller: 'Seller 6', revenue: 4100 },
                { seller: 'Seller 7', revenue: 4300 },
                { seller: 'Seller 8', revenue: 4500 },
                { seller: 'Seller 9', revenue: 4200 },
                { seller: 'Seller 10', revenue: 4600 },
                { seller: 'Seller 11', revenue: 4400 },
                { seller: 'Seller 12', revenue: 4500 },
            ],
        },
        {
            year: '2023',
            data: [
                { seller: 'Seller 1', revenue: 4200 },
                { seller: 'Seller 2', revenue: 3800 },
                { seller: 'Seller 3', revenue: 4400 },
                { seller: 'Seller 4', revenue: 4600 },
                { seller: 'Seller 5', revenue: 4200 },
                { seller: 'Seller 6', revenue: 4300 },
                { seller: 'Seller 7', revenue: 4500 },
                { seller: 'Seller 8', revenue: 4700 },
                { seller: 'Seller 9', revenue: 4400 },
                { seller: 'Seller 10', revenue: 4800 },
                { seller: 'Seller 11', revenue: 4600 },
                { seller: 'Seller 12', revenue: 4700 },
            ],
        },
    ];



    const MonthlyRevenue = [
        {
            year: '2020',
            data: [
                { month: 'Jan', revenue: 2000 },
                { month: 'Feb', revenue: 1800 },
                { month: 'Mar', revenue: 2200 },
                { month: 'Apr', revenue: 2400 },
                { month: 'May', revenue: 2000 },
                { month: 'Jun', revenue: 2100 },
                { month: 'Jul', revenue: 2300 },
                { month: 'Aug', revenue: 2500 },
                { month: 'Sep', revenue: 2200 },
                { month: 'Oct', revenue: 2600 },
                { month: 'Nov', revenue: 2400 },
                { month: 'Dec', revenue: 2500 },
            ],
        },
        {
            year: '2021',
            data: [
                { month: 'Jan', revenue: 3000 },
                { month: 'Feb', revenue: 2800 },
                { month: 'Mar', revenue: 3200 },
                { month: 'Apr', revenue: 3400 },
                { month: 'May', revenue: 3000 },
                { month: 'Jun', revenue: 3100 },
                { month: 'Jul', revenue: 3300 },
                { month: 'Aug', revenue: 3500 },
                { month: 'Sep', revenue: 3200 },
                { month: 'Oct', revenue: 3600 },
                { month: 'Nov', revenue: 3400 },
                { month: 'Dec', revenue: 3500 },
            ],
        },
        {
            year: '2022',
            data: [
                { month: 'Jan', revenue: 4000 },
                { month: 'Feb', revenue: 3600 },
                { month: 'Mar', revenue: 4200 },
                { month: 'Apr', revenue: 4400 },
                { month: 'May', revenue: 4000 },
                { month: 'Jun', revenue: 4100 },
                { month: 'Jul', revenue: 4300 },
                { month: 'Aug', revenue: 4500 },
                { month: 'Sep', revenue: 4200 },
                { month: 'Oct', revenue: 4600 },
                { month: 'Nov', revenue: 4400 },
                { month: 'Dec', revenue: 4500 },
            ],
        },
        {
            year: '2023',
            data: [
                { month: 'Jan', revenue: 4200 },
                { month: 'Feb', revenue: 3800 },
                { month: 'Mar', revenue: 4400 },
                { month: 'Apr', revenue: 4600 },
                { month: 'May', revenue: 4200 },
                { month: 'Jun', revenue: 4300 },
                { month: 'Jul', revenue: 4500 },
                { month: 'Aug', revenue: 4700 },
                { month: 'Sep', revenue: 4400 },
                { month: 'Oct', revenue: 4800 },
                { month: 'Nov', revenue: 4600 },
                { month: 'Dec', revenue: 4700 },
            ],
        },
    ];



    const COLORS = [
        '#FF7F50', // Coral
        '#FF6347', // Tomato
        '#FF8C00', // Dark Orange
        '#FFA500', // Orange
        '#FFB347', // Light Orange
        '#FF4500', // Orange Red
        '#FF6F00', // Vivid Orange
        '#FF9F00', // Bright Orange
    ];

    const RADIAN = Math.PI / 180;

    const renderCustomizedLabel = ({
        cx, cy, midAngle, innerRadius, outerRadius, percent, index,
    }) => {
        // Calculate the radius and position
        const radius = innerRadius + (outerRadius - innerRadius) * 0.7;
        const x = cx + radius * Math.cos(-midAngle * RADIAN);
        const y = cy + radius * Math.sin(-midAngle * RADIAN);

        // Adjust text anchor to ensure it is centered correctly
        // const textAnchor = x > cx ? 'start' : 'end';
        const dominantBaseline = 'center'; // Centers the text vertically

        return (
            <text
                x={x}
                y={y}
                fill="white"
                dominantBaseline={dominantBaseline}
                fontSize={14} // Adjust font size as needed
                fontFamily="Arial" // Adjust font family as needed
            >
                {`${(percent * 100).toFixed(0)}%`}
            </text>
        );
    };

    return (
        <div className=' grid grid-cols-1 gap-4'>
            <div className=' flex items-center justify-between pt-1'>
                <div className=' flex items-center justify-center gap-2'>
                    <span className=' text-xl font-medium'>Revenue </span>
                    <span className=' text-orange-700 font-medium pt-1'>{selectedYear}</span>
                </div>
                <Select
                    id="year-select"
                    value={years.find(option => option === selectedYear)}
                    onChange={handleYearChange}
                    options={years.map(year => ({ value: year, label: year }))}
                    styles={customStyles}
                    className=' w-60 hover:bg-orange-100'
                />
            </div>
            <div className=' flex items-center gap-3 w-full flex-wrap md:flex-nowrap'>
                <div className=' w-full md:w-[30%] rounded-md border border-gray-200'>
                    <div className=' p-4 font-medium flex justify-between items-center'>
                        <h1 >Seller Revenue</h1>
                        <span className=' text-orange-600'>$70000</span>
                    </div>
                    <ResponsiveContainer width="100%" height={300}>
                        <PieChart >
                            <Pie
                                data={SellerRevenue?.find((data, index) => data.year == selectedYear)?.data}
                                // cx={160}
                                // cy={130}
                                labelLine={false}
                                label={renderCustomizedLabel}
                                // outerRadius={150}    
                                fill="#8884d8"
                                dataKey="revenue"
                                nameKey="year"
                            >
                                {SellerRevenue.find((data, index) => data.year == selectedYear).data.map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                ))}
                            </Pie>
                            <Tooltip />
                        </PieChart>
                    </ResponsiveContainer>
                </div>
                <div className=' w-full md:w-[70%] rounded-md border border-gray-200 px-5'>
                    <div className=' p-4 font-medium flex justify-between items-center'>
                        <h1 >Yearly Seller Revenue</h1>
                        <span className=' text-orange-600'>$70000</span>
                    </div>
                    <ResponsiveContainer width="100%" height={300}>
                        <BarChart data={MonthlyRevenue.find((data, index) => data.year == selectedYear).data}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="month" />
                            <YAxis />
                            <Tooltip />
                            <Legend />
                            <Bar dataKey="revenue" fill="#F00000" />
                        </BarChart>
                    </ResponsiveContainer>
                </div>
            </div>
            <div className=' rounded-md border border-gray-200 p-2 px-4'>
                <div className=' p-4 font-medium flex justify-between items-center'>
                    <h1 >All Over Revenue</h1>
                    <span className=' text-orange-600'>$70000</span>
                </div>
                <ResponsiveContainer width="100%" height={300}>
                    <LineChart data={dataOverallRevenue[selectedYear]}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="month" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Line type="monotone" dataKey="revenue" stroke="#D00000" />
                    </LineChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
};

export default Dashboard;
