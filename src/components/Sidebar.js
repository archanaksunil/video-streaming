import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const Sidebar = () => {
    const isOpen = useSelector((store) => store.config?.isSidebarOpen)
    return !isOpen ? null : (
        <div className='p-5 shadow-lg min-w-52 h-screen'>
            <h1 className='font-bold pb-5'>
                <Link to="/">Home</Link></h1>
            <h1 className='font-bold pb-5'>Shorts</h1>
            <h1 className='font-bold pb-5'>Subscriptions</h1>
            <h1 className='font-bold'>You ˃</h1>
            <ul>
                <li>Your channel</li>
                <li>History</li>
                <li>Playlist</li>
                <li>Watch later</li>
            </ul>
            <h1 className='font-bold pt-5'>Subscriptions</h1>
            <ul>
                <li>Music</li>
                <li>Sports</li>
                <li>Gaming</li>
                <li>Movies</li>
            </ul>
        </div>
    )
}

export default Sidebar