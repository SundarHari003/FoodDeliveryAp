import React from 'react'
import Sidebar from '../Mainnav/Sidebar'
import Header from '../Mainnav/Header'
import { Outlet } from 'react-router-dom'

const AppLoayout = () => {
    return (
        <div className="flex h-screen bg-fourth">
            <div className='  hidden md:block '>
                <Sidebar />
            </div>
            <div className="flex-1 flex flex-col">
                <Header />
                <main className="flex-1 overflow-x-hidden overflow-y-auto pt-0 rounded-md">
                    <Outlet />
                </main>
            </div>
        </div>
    )
}

export default AppLoayout
