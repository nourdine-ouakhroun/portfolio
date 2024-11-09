import styles from './menu.module.css'
import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from 'react';

function CustomLink({text, style='', path, onLinkClick}){
    const {pathname} = useLocation()
    const activeButton = path !== '/' ? pathname.startsWith(path) : pathname === path;
    return(
        <Link className={styles.routerlink + style} to={path}
            onClick={onLinkClick}>
            <p className={`text-2xl  ${activeButton ? "text-white" : "text-light-gray"}`}>{text}</p>
            <div className={activeButton ? "md:h-[5px] md:w-[100%] bg-sunset-orange absolute bottom-0 " + styles.appear : ''}></div>
        </Link>
    )
}

function Menu({isOpen, onLinkClick}){
    return(
        <nav className="flex-col md:flex-row " style={{display: isOpen ? 'none' : 'flex'}}>
            <ul className='flex flex-col md:flex-row'>
                <CustomLink onLinkClick={onLinkClick} text='_home' path="/"/>
                <CustomLink onLinkClick={onLinkClick} text='_about-me' path="/about-me"/>
                <CustomLink onLinkClick={onLinkClick} text='_projects' path="/projects"/>
            </ul>
            <CustomLink
                onLinkClick={onLinkClick}
                text='_contact-me'
                style={" md:w-[15rem] md:border-r-[0] md:border-l-[1px] border-l-custom-gray"}
                path='/contact-me'/>
        </nav>
    )
}

export default Menu