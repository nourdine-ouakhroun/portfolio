import styles from './menu.module.css'
import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from 'react';

function CustomLink({text, style='', path, onLinkClick}){
    const {pathname} = useLocation()
    const activeButton = path !== '/' ? pathname.startsWith(path) : pathname === path;
    
    // VS Code-inspired icons for each section
    const getIcon = (text) => {
        switch(text) {
            case '_home': return '🏠';
            case '_about-me': return '👤';
            case '_projects': return '📁';
            case '_contact-me': return '✉️';
            default: return '📄';
        }
    };
    
    return(
        <Link to={path} className={"w-full h-[60px] sm:h-[65px] md:h-[50px] lg:h-[55px] xl:h-[55px] 2xl:h-[60px] border-b border-[#1E2D3D]/40 md:border-[#1E2D3D] text-white flex items-start cursor-pointer justify-center flex-col relative md:items-center md:border-r-[1px] md:border-[#1E2D3D] lg:w-[9rem] hover:bg-custom-gray/20 md:hover:bg-transparent transition-all duration-300 group" + style}
            onClick={onLinkClick}>
            {/* Mobile: VS Code-style layout */}
            <div className='md:hidden flex items-center gap-3 ml-3 w-full'>
                {/* VS Code-style file icon */}
                <div className={`flex items-center justify-center w-6 h-6 rounded text-xs transition-all duration-300 ${activeButton ? 'bg-light-green/20 text-light-green' : 'bg-custom-gray/30 text-light-gray/60 group-hover:bg-custom-gray/50'}`}>
                    {getIcon(text)}
                </div>
                
                {/* File name with VS Code styling */}
                <div className='flex flex-col'>
                    <p className={`text-[0.8rem] sm:text-[0.85rem] transition-colors duration-300 ${activeButton ? "text-white font-medium" : "text-light-gray"}`}>
                        {text}
                    </p>
                    {/* VS Code-style file extension */}
                    <span className={`text-[0.65rem] transition-colors duration-300 ${activeButton ? "text-light-green/80" : "text-light-gray/50"}`}>
                        {text === '_home' ? '.tsx' : text === '_about-me' ? '.md' : text === '_projects' ? '.json' : '.js'}
                    </span>
                </div>
                
                {/* VS Code-style status indicator */}
                <div className={`ml-auto mr-3 w-2 h-2 rounded-full transition-all duration-300 ${activeButton ? 'bg-light-green animate-pulse' : 'bg-transparent group-hover:bg-light-gray/30'}`}></div>
            </div>
            
            {/* Desktop: Simple layout */}
            <div className='hidden md:flex items-center justify-center w-full'>
                <p className={`text-[0.9rem] lg:text-[0.95rem] xl:text-[1rem] 2xl:text-[1.05rem] transition-colors duration-300 ${activeButton ? "text-white" : "text-light-gray"}`}>{text}</p>
            </div>
            
            {/* VS Code-style active indicator (mobile only) */}
            <div className={`md:hidden absolute left-0 top-0 bottom-0 w-1 bg-light-green transition-all duration-300 ${activeButton ? 'opacity-100' : 'opacity-0'}`}></div>
            <div className={activeButton ? "md:h-[3px] md:w-[100%] bg-sunset-orange absolute bottom-0 " + styles.appear : ''}></div>
        </Link>
    )
}

function Menu({isOpen, onLinkClick}){
    return(
        <nav className="flex-col md:flex-row z-20 md:z-auto bg-custom-blue/95 backdrop-blur-md md:bg-transparent border-t border-custom-gray/30 md:border-t-0 shadow-lg md:shadow-none relative" style={{display: isOpen ? 'none' : 'flex'}}>
            {/* VS Code-style explorer header (mobile only) */}
            <div className="md:hidden px-4 py-2 border-b border-custom-gray/20 bg-custom-gray/10">
                <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-light-green/60"></div>
                    <span className="text-xs text-light-gray font-medium">EXPLORER</span>
                </div>
            </div>
            
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