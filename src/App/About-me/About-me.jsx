import './About-me.css'
import costumStyle from '../utils/utils.jsx'
import Category from '../category/category.jsx'

// Exclusive Category component for About Me sections
function ExclusiveCategory({name, component, isOpen, onToggle}){
    const clickHandler = () => {
        onToggle(name);
    }
    
    return(
        <>
            <div className={responsiveClass(
                'flex justify-center items-center md:border-b-[1px] border-b-custom-gray w-full flex justify-start items-center flex-col bg-custom-gray md:bg-transparent cursor-pointer hover:bg-custom-gray/30 transition-colors duration-200 relative group',
                responsiveSizes.heights.medium,
                responsiveSizes.gaps.sm
            )} onClick={clickHandler}>
                {/* Subtle left indicator */}
                <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-light-green/40 opacity-0 group-hover:opacity-100 transition-opacity duration-200"></div>
                <div className={costumStyle.container}>
                    <img 
                        src="/assets/playIcon.svg" 
                        alt="" 
                        className={responsiveClass(
                            responsiveSizes.margins.icon, 
                            responsiveSizes.icons.xs, 
                            'transition-transform duration-200',
                            isOpen ? 'rotate-90' : ''
                        )}
                    />
                    <span className={responsiveClass(
                        'p-1',
                        responsiveSizes.text.sm,
                        isOpen ? 'text-light-green' : 'text-white'
                    )}>{' ' + name}</span>
                </div>
            </div>
            <div className={isOpen ? 'w-full flex justify-start items-center flex-col' : 'hidden'}>
                {component}
            </div>
        </>
    )
}
import {PersonalInfo, PersonalInfoContent} from './personal-info/personal-info.jsx'
import Experience from './professional-experience/experience.jsx'
import { Route, Routes, Link, useLocation, useNavigate } from 'react-router-dom'
import Contacts from './contactes/contacts.jsx'
import { useEffect, useState } from 'react'
import data from '/src/data.json'
import { responsiveSizes, responsiveClass } from '../../utils/responsive.js'

function CustomLink({path, img}){
    const location = useLocation()
    const isMatching = location.pathname.includes(path)
    return(
        <Link className={responsiveClass(
            'flex justify-center items-center hover:bg-custom-gray/20 transition-colors duration-200',
            responsiveSizes.heights.medium
        )} to={path}>
            <img 
                className={responsiveClass(
                    responsiveSizes.icons.lg,
                    isMatching ? 'opacity-100' : 'opacity-40 hover:opacity-70'
                )} 
                src={img} 
                alt="" 
            />
        </Link>
    )
}

function AboutMe(){
    const [hasNavigated, setHasNavigated] = useState(false);
    const [openSection, setOpenSection] = useState('personal'); // Track which section is open
    const navigate = useNavigate();
    const location = useLocation();

    // Handle section toggle - only one section can be open at a time
    const handleSectionToggle = (sectionName) => {
        if (openSection === sectionName) {
            setOpenSection(''); // Close if clicking the same section
        } else {
            setOpenSection(sectionName); // Open the clicked section
            // Navigate to appropriate content based on section
            if (sectionName === 'professional') {
                navigate('experience');
            } else if (sectionName === 'personal') {
                // Navigate to bio as default personal content
                navigate('personal/bio');
            }
        }
    };
    useEffect(() => {
        // Sync section state with current URL
        if (location.pathname.includes('personal')) {
            setOpenSection('personal');
        } else if (location.pathname.endsWith('experience')) {
            setOpenSection('professional');
        }
        
        if (!hasNavigated) {
            // Redirect if we're at base routes
            if (location.pathname === '/about-me' || location.pathname === '/about-me/') {
                navigate('personal/bio');
            } else if (location.pathname === '/about-me/personal' || location.pathname === '/about-me/personal/') {
                navigate('personal/bio');
            }
            setHasNavigated(true);
        } else {
            // Handle direct navigation to personal route
            if (location.pathname === '/about-me/personal' || location.pathname === '/about-me/personal/') {
                navigate('personal/bio');
            }
        }
    }, [hasNavigated, navigate, location.pathname]);

    return(
          <div className="w-full h-full about-me flex flex-col md:grid md:grid-cols-[240px_1fr] lg:grid-cols-[260px_1fr] xl:grid-cols-[280px_1fr] justify-between items-start overflow-y-auto scrollbar-hidden">
              <div className='flex w-full h-auto md:h-full md:border-r-[1px] border-r-custom-gray bg-gradient-to-b from-dark-blue/20 to-transparent'>
                  <div className='hidden 2xl:flex flex-col w-[2.5rem] lg:w-[3rem] xl:w-[3.5rem] 2xl:w-[4rem] h-full md:border-r-[1px] border-r-custom-gray bg-custom-gray/10'>
                      <CustomLink img="/assets/personal-icon.svg" path='personal'/>
                      <CustomLink img="/assets/Shell Scripting.svg" path='experience'/>
                      <div className={responsiveClass('flex justify-center items-center hover:bg-custom-gray/20 transition-colors duration-200', responsiveSizes.heights.medium)}>
                          <img className={responsiveClass('opacity-40 hover:opacity-60', responsiveSizes.icons.sm)} src={'/assets/hobbies-icon.svg'} alt="" />
                      </div>
                  </div>
                  <div className='w-full h-auto md:h-full md:border-r-[1px] border-r-custom-gray relative'>
                    <div className={responsiveClass(costumStyle.container, 'md:hidden px-3 sm:px-4', responsiveSizes.heights.small)}>
                        <p className={responsiveClass('', responsiveSizes.text.xs)}>_about-me</p>
                    </div>
                    <ExclusiveCategory name="personal" component={<PersonalInfo/>} isOpen={openSection === 'personal'} onToggle={handleSectionToggle}/>
                    <ExclusiveCategory name="professional" component={<Experience/>} isOpen={openSection === 'professional'} onToggle={handleSectionToggle}/>
                    <div className="hidden md:block">
                        <Category name="contacts" component={<Contacts/>}/>
                    </div>
                </div>
            </div>
            <div className='flex w-full h-full'>
                <Routes>
                    <Route path='personal/*' element={<PersonalInfoContent/>}/>
                    <Route path='experience' element={<PersonalInfoContent/>}/>
                </Routes>
            </div>
        </div>
    )
}

export default AboutMe