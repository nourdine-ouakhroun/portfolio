import styles from './menu.module.css'
import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from 'react';

function CustomLink({text, style='', path, onLinkClick}){
    const {pathname} = useLocation()
    const activeButton = path !== '/' ? pathname.startsWith(path) : pathname === path;
    return(
        <Link to={path} className={"w-full h-[75px] md:h-[60px] 2xl:h-[80px] border-b border-[#1E2D3D] text-white flex items-start cursor-pointer justify-center flex-col relative  md:items-center md:border-r-[1px] md:border-[#1E2D3D] lg:w-[10rem]" + style}
            onClick={onLinkClick}>
            <p className={`ml-3 md:ml-0 lg:text-md 3xl:text-lg  ${activeButton ? "text-white" : "text-light-gray"}`}>{text}</p>
            <div className={activeButton ? "md:h-[5px] md:w-[100%] bg-sunset-orange absolute bottom-0 " + styles.appear : ''}></div>
        </Link>
    )
}

function Menu({isOpen, onLinkClick}){
    return(
        <nav className="flex-col md:flex-row z-10 md:z-auto" style={{display: isOpen ? 'none' : 'flex'}}>
            <ul className='flex flex-col md:flex-row'>
                <CustomLink onLinkClick={onLinkClick} text='_home' path="/"/>
                <CustomLink onLinkClick={onLinkClick} text='_about-me' path="/about-me"/>
                <CustomLink onLinkClick={onLinkClick} text='_projects' path="/projects"/>
            </ul>
            <CustomLink
                onLinkClick={onLinkClick}
                text='_contact-me'
                style={" md:w-[13rem] xl:w-[13rem] md:border-r-[0] md:border-l-[1px] border-l-custom-gray"}
                path='/contact-me'/>
        </nav>
    )
}

export default Menu