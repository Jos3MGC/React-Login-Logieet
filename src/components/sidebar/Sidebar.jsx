import React, { useEffect, useState } from 'react'
import './sidebar.scss'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { images } from '../../assets/constants'
import sidebarNav from '../../configs/sidebarNav'
import { useUser } from "../../UserProvider/index";

const Sidebar = () => {
    const [activeIndex, setActiveIndex] = useState(0)
    const location = useLocation()
    const navigate = useNavigate();
    const user = useUser();

    useEffect(() => {
        const curPath = window.location.pathname.split('/')[1]
        const activeItem = sidebarNav.findIndex(item => item.section === curPath)

        setActiveIndex(curPath.length === 0 ? 0 : activeItem)
    }, [location])

    const closeSidebar = () => {
        document.querySelector('.main__content').style.transform = 'scale(1) translateX(0)'
        setTimeout(() => {
            document.body.classList.remove('sidebar-open')
            document.querySelector('.main__content').style = ''
        }, 500);
    }

    return (
        <div className='sidebar'>
            <div className="sidebar__logo">
                <img src={images.logo} alt="" />
                <div className="sidebar-close" onClick={closeSidebar}>
                    <i className='bx bx-x'></i>
                </div>
            </div>
            <div className="sidebar__menu">
                {
                    sidebarNav.map((nav, index) => (
                        <Link to={nav.link} key={`nav-${index}`} className={`sidebar__menu__item ${activeIndex === index && 'active'}`} onClick={closeSidebar}>
                            <div className="sidebar__menu__item__icon">
                                {nav.icon}
                            </div>
                            <div className="sidebar__menu__item__txt">
                                {nav.text}
                            </div>
                        </Link>
                    ))
                }
                <div className="sidebar__menu__item">
                    <div className="sidebar__menu__item__icon">
                        <i className='bx bx-log-out'></i>
                    </div>
                    <div className="sidebar__menu__item__txt">
                        {user && user.id ? (
                            <span
                                className="link"
                                onClick={() => {
                                    // TODO: have this delete cookie on server side
                                    user.setID(null);
                                    navigate("/");
                                }}
                            >
                                Logout
                            </span>
                        ):(
                            <></>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Sidebar
