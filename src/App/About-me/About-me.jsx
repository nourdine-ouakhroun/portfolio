import './About-me.css'
import costumStyle from '../utils/utils.jsx'
import Category from '../category/category.jsx'
import {PersonalInfo, PersonalInfoContent} from './personal-info/personal-info.jsx'
import { Route, Routes, Link, useLocation } from 'react-router-dom'
import Contacts from './contactes/contacts.jsx'

function CustomLink({path, img}){
    const location = useLocation()
    const isMatching = location.pathname.endsWith(path)
    return(
        <Link className='h-[5rem] flex justify-center items-center' to={path}>
            <img className={`w-[50%]  ${!isMatching ? 'opacity-40' : ''}`} src={img} alt="" />
        </Link>
    )
}

function AboutMe(){

    return(
        <>
            <div className="w-full h-full about-me flex md:grid grid-cols-[1fr_4fr]  justify-start items-center flex-col">
                <div className='flex w-full h-full md:border-r-[1px] border-r-custom-gray'>
                    <div className='w-[5rem] h-full md:border-r-[1px] border-r-custom-gray'>
                        <CustomLink img="/src/assets/personal-icon.svg" path='personal-info'/>
                        <CustomLink img="/src/assets/professional-icon.svg" path='professional-info'/>
                        <CustomLink img="/src/assets/hobbies-icon.svg" path='hobbies'/>
                    </div>
                    <div className='w-full h-full md:border-r-[1px] border-r-custom-gray'>
                        <div className={costumStyle.container + ' h-[4rem] md:hidden'}>
                            <p>_about-me</p>
                        </div>
                        <Routes>
                            <Route path='personal-info' element={<Category name="personal-info" component={<PersonalInfo/>}/>}/>
                            <Route path='professional-info' element={<Category name="professional-info" component={<></>}/>}/>
                            <Route path='hobbies' element={<Category name="hobbies" component={<></>}/>}/>
                        </Routes>
                        <Category name="contacts" component={<Contacts/>}/>
                    </div>
                </div>
                <div className='flex w-full h-full'>
                    <Routes>
                        <Route path='personal-info' element={<PersonalInfoContent/>}/>
                        <Route path='professional-info' element={<></>}/>
                        <Route path='hobbies' element={<></>}/>
                    </Routes>
                </div>
            </div>
        </>
    )
}

export default AboutMe