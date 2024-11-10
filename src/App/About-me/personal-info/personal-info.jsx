import './personal-info.css'
import costumStyle from '../../utils/utils.jsx'
import { useEffect, useState } from 'react'
import Bio from './bio/bio.jsx'
import { useSelector } from 'react-redux'
import { Link, Route, Routes, useLocation, useNavigate } from 'react-router-dom'

function Content({text, component, img}){
    return(
        <div className='w-full h-full flex flex-col flex-1 border-r-[1px] border-r-custom-gray'>
            <div className='w-full h-[4rem] border-b-[1px] border-b-custom-gray'>
                <div className='flex justify-center items-center h-full w-[19rem] border-r-[1px] border-r-custom-gray'>
                    <div className='flex justify-between items-center w-[90%]'>
                        <img src={img} alt=""/>
                        <span className='text-2xl text-light-gray'>{text}</span>
                        <img src="/src/assets/x.svg" alt=""/>
                    </div>
                </div>
            </div>
            <div className='flex flex-1'>
                <div className='w-full h-full flex justify-center items-center'>
                    {component}
                </div>
                <div className='flex justify-center  w-[3rem] h-full border-l-[1px] border-l-custom-gray'>
                    <div className='mt-2 w-[2rem] h-[13px] bg-light-gray'></div>
                </div>
            </div>
        </div>
    )
}

// src/app/PersonalInfoContent.jsx

export function PersonalInfoContent() {
  const selectedComponents = useSelector(
    (state) => state.components.selectedComponents
  );

  return (
    <div className="flex w-full h-full justify-center items-center">
      {
        selectedComponents.length > 0 ? (
            selectedComponents.map(({ img, text, component }, index) => (
                <Content key={index} img={img} text={text} component={component} />
            ))
        ) : (
            <p className="text-3xl text-light-gray">No File Selected</p>
        )
      }
    </div>
  );
}

{/* <Content img="/src/assets/Readmi.svg" text='about-me.md' component={<Writer Lines={lines}/>}/>
<Content img="/src/assets/img.svg" text='nouakhro.jpeg' component={<MyImg/>}/> */}

function PersonalInfoCategory({text, icon, component}) {
    const [show, setShow] = useState(false)
    const location = useLocation()
    const isMatching = location.pathname.includes(text)
    const clickhandler = () =>{
        setShow(!show)
    }
    return(
        <div className='flex flex-col w-[85%]'>
            <Link to={text} className={costumStyle.container + ' h-[40px]'} onClick={clickhandler}>
                <img className={`w-[11px] mr-4 ${show || isMatching ? 'rotate-90' : ''}`} src="/src/assets/arow.svg" alt="" />
                <img className="w-[23px] mr-3" src={icon} alt="" />
                <span className={`text-2xl ${show ? "text-white" : "text-steel-blue"}`}>{text}</span>
            </Link>
            <div className={!show && !isMatching ? 'hidden' : 'flex flex justify-end items-center'} >{component}</div>
        </div>
    )
}

export function PersonalInfo(){
    
    return(
        <div className="md:border-b-[1px] border-b-custom-gray w-full  flex justify-start items-center flex-col gap-2 mb-2">
            <PersonalInfoCategory text="bio" icon="/src/assets/o-folder.svg" component={<Bio/>}/>
            <PersonalInfoCategory text="interests" icon="/src/assets/g-folder.svg"/>
            <PersonalInfoCategory text="education" icon="/src/assets/m-folder.svg"/>
        </div>
    )
}
