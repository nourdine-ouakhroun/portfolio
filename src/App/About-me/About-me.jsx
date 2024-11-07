import './About-me.css'
import costumStyle from '../utils/utils.jsx'
import Category from '../category/category.jsx'
import {PersonalInfo, PersonalInfoContent} from './personal-info/personal-info.jsx'
import { Route, Routes, Link } from 'react-router-dom'
function AboutMe(){

    return(
        <>
            <div className="w-full h-full about-me flex md:grid grid-cols-[1fr_4fr]  justify-start items-center flex-col">
                <div className='flex w-full h-full md:border-r-[1px] border-r-custom-gray'>
                    <div className='w-[7rem] h-full md:border-r-[1px] border-r-custom-gray'>
                        <div className='h-[5rem] flex justify-center items-center'>
                            <img className='w-[40%]' src="/src/assets/professional-icon.svg" alt="" />
                        </div>
                        <div className='h-[5rem] flex justify-center items-center'>
                            <img className='w-[40%]' src="/src/assets/personal-icon.svg" alt="" />
                        </div>
                        <div className='h-[5rem] flex justify-center items-center'>
                            <img className='w-[40%]' src="/src/assets/hobbies-icon.svg" alt="" />
                        </div>
                    </div>
                    <div className='w-full h-full md:border-r-[1px] border-r-custom-gray'>
                        <div className={costumStyle.container + ' h-[4rem] md:hidden'}>
                            <p>_about-me</p>
                        </div>
                        <Link to="personal-info">
                            <Category name="personal-info" component={<PersonalInfo/>}/>
                        </Link>
                        <Link to="professional-info">
                            <Category name="professional-info"/>
                        </Link>
                        <Link to="hobbies">
                            <Category name="hobbies"/>
                        </Link>
                        <Link to="skills">
                            <Category name="skills"/>
                        </Link>
                    </div>
                </div>
                <div className='w-full h-full'>
                    <Routes>
                        <Route path='personal-info' element={<PersonalInfoContent/>}/>
                        <Route path='professional-info' element={<></>}/>
                        <Route path='hobbies' element={<></>}/>
                        <Route path='skills' element={<></>}/>
                    </Routes>
                </div>
            </div>
        </>
    )
}

export default AboutMe