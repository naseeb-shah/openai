import React, { useState } from 'react';
import { FiUpload, FiFileText, FiCalendar, FiBell, FiSettings } from 'react-icons/fi';
import { MdDashboardCustomize } from 'react-icons/md'
import './index.css'; 
import { Link } from 'react-router-dom';

function Sidebar({ isOpen=false }) {
    const [activeItem, setActiveItem] = useState(1)

    const onChangeNavItem = (id) => {
        setActiveItem(id)
    }

    const menuItems = [
        { id:1, path: '/user/dashboard', label: 'Dashboard', icon: <MdDashboardCustomize size={25} /> },
        { id:2, path: '/user/upload', label: 'Upload', icon: <FiUpload size={25} /> },
        { id:3, path: '/user/invoice', label: 'Invoice', icon: <FiFileText size={25} /> },
        { id:4, path: '/user/schedule', label: 'Schedule', icon: <FiCalendar size={25} /> },
        { id:5, path: '/user/notification', label: 'Notification', icon: <FiBell size={25} /> },
        { id:6, path: '/user/settings', label: 'Settings', icon: <FiSettings size={25} /> }
    ];

    return (
        <div className={`sidebar ${isOpen ? 'open' : ''}`}>
            <div className='header-container'>
                <h1 className="sidebar-heading">
                    Base
                </h1>
            </div>
            <ul className="sidebar-nav">
                {menuItems.map((item, index) => (
                    <li key={index}>
                        <Link
                            title={item.label}
                            to={item.path}
                            onClick={() => onChangeNavItem(item.id)}
                            className={`sidebar-link ${activeItem === item.id ? 'active' : ''}`}
                        >
                            <div className='nav-item'>
                               <><span>{item.icon} </span><span style={{ fontSize: '17px' }}>{item.label}</span></>
                            </div>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Sidebar;
