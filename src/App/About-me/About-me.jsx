import './About-me.css'
import costumStyle from '../utils/utils.jsx'
import Category from '../category/category.jsx'
import {PersonalInfo, PersonalInfoContent} from './personal-info/personal-info.jsx'
import { Route, Routes, Link, useLocation, useNavigate } from 'react-router-dom'
import Contacts from './contactes/contacts.jsx'
import { useEffect, useState } from 'react'
import data from '/src/data.json'

function CustomLink({path, img}){
    const location = useLocation()
    const isMatching = location.pathname.includes(path)
    return(
        <Link className='h-[5rem] flex justify-center items-center' to={path}>
            <img className={`${!isMatching ? 'opacity-40' : ''}`} src={img} alt="" />
        </Link>
    )
}

function AboutMe(){
    const [hasNavigated, setHasNavigated] = useState(false);
    const navigate = useNavigate();

    // Automatically navigate to 'personal-info' on component mount, but only the first time
    useEffect(() => {
        if (!hasNavigated) {
            navigate('personal-info/bio');
            setHasNavigated(true); // Mark that we've navigated once
        }
    }, [hasNavigated, navigate]);

    return(
        <div className="w-full h-full about-me flex md:grid md:grid-cols-[1fr_4fr] justify-between items-center flex-col overflow-y-auto">
            <div className='flex w-full h-full md:border-r-[1px] border-r-custom-gray'>
                <div className='hidden md:flex flex-col w-[5rem] h-full md:border-r-[1px] border-r-custom-gray'>
                    <CustomLink img="/assets/personal-icon.svg" path='personal-info'/>
                    <div className='h-[5rem] flex justify-center items-center'>
                        <img className={`opacity-40 `} src={'/assets/Shell Scripting.svg'} alt="" />
                    </div>
                    <div className='h-[5rem] flex justify-center items-center'>
                        <img className={`opacity-40 `} src={'/assets/hobbies-icon.svg'} alt="" />
                    </div>
                </div>
                <div className='w-full h-full md:border-r-[1px] border-r-custom-gray'>
                    <div className={costumStyle.container + ' h-[4rem] md:hidden'}>
                        <p>_about-me</p>
                    </div>
                    <Routes>
                        <Route path='personal-info/*' element={<Category name="personal-info" component={<PersonalInfo/>}/>}/>
                    </Routes>
                    <Category name="contacts" component={<Contacts/>}/>
                </div>
            </div>
            <div className='flex w-full h-full'>
                <Routes>
                    <Route path='personal-info/*' element={<PersonalInfoContent/>}/>
                </Routes>
            </div>
        </div>
    )
}

export default AboutMe