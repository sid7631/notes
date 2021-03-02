import React, { useRef, useState } from 'react';
import './Sidebar.scss';
import classNames  from 'classnames';
import { NavLink } from 'react-router-dom';
import { Edit, Book, Star, Trash } from 'react-feather';

const options = [
    {
        link:'/dashboard/scratchpad',
        icon:<Edit size={15} className="app-sidebar-icon" color="rgba(255, 255, 255, 0.25)"  />,
        title:'Scratchpad'
    },
    {
        link:'/dashboard/notes',
        icon:<Book size={15} className="app-sidebar-icon" color="rgba(255, 255, 255, 0.25)"  />,
        title:'Notes'
    },
    {
        link:'/dashboard/favorites',
        icon:<Star size={15} className="app-sidebar-icon" color="rgba(255, 255, 255, 0.25)"  />,
        title:'Favorites'
    },
    {
        link:'/dashboard/trash',
        icon:<Trash size={15} className="app-sidebar-icon" color="rgba(255, 255, 255, 0.25)"  />,
        title:'Trash'
    }
]

const sidebarIcon = (icon,title) => {
    if(icon instanceof Object){
        return icon
    }
}

function Sidebar(props) {

    const wrapperRef = useRef()
    const [isActive, setisActive] = useState(false)


    
    return (
        <nav
            id="sidebar"
            ref={wrapperRef} 
            className={classNames(isActive?'active':'')}
        >
        <div className="sidebar-toggle-arrow">
            <i
                className={classNames("fa sidebar-toggle-arrow-icon",isActive?"fa-angle-left sidebar-toggle-arrow-left-icon":"fa-angle-right sidebar-toggle-arrow-right-icon")}
                aria-hidden="true"
                onClick={()=>setisActive(!isActive)}
            >
            </i>
        </div>
        <div className="sidebar-header"></div>
        <div className="sidebar-body">
            <ul className="list-unstyled">
                {options.map((item,i) => (
                    <li key={i} className={classNames('link')}>
                        <NavLink
                            to={item.link}
                            activeClassName='active'
                        >
                            <div className="link-label">
                                <span className="icon-container">
                                    {sidebarIcon(item.icon,item.title)}
                                </span>
                                <span className="hidetext fontstyling">{item.title}</span>
                            </div>
                        </NavLink>
                    </li>
                ))}
            </ul>
        </div>
        </nav>
    )
}

export default Sidebar
