import './personal-info.css'
import costumStyle from '../../utils/utils.jsx'
import { useState } from 'react'

function Content(){
    return(
        <div className='flex flex-col flex-1 border-r-[1px] border-r-custom-gray'>
            <div className='w-full h-[4rem] border-b-[1px] border-b-custom-gray'>
                <div className='flex justify-between items-center h-full w-[20rem] border-r-[1px] border-r-custom-gray'>
                    <div className='flex justify-between items-center w-[90%]'>
                        <span className='text-2xl text-light-gray'>personal-info</span>
                    </div>

                </div>
            </div>
            <div className='flex flex-1'>
                <div className='w-full h-full'>

                </div>
                <div className='flex justify-center  w-[3rem] h-full border-l-[1px] border-l-custom-gray'>
                    <div className='mt-2 w-[2rem] h-[13px] bg-light-gray'></div>
                </div>
            </div>
        </div>
    )
}

export function PersonalInfoContent(){
    return(
        <div className='flex w-full h-full'>
            <Content/>
            <Content/>
        </div>
    )
}

function PersonalInfoCategory({text, icon}) {
    const [show, setShow] = useState(false)

    const clickhandler = () =>{
        setShow(!show)
    }   
    return(
        <div className={costumStyle.container + ' h-[40px]'} onClick={clickhandler}>
            <img className={`w-[11px] mr-4 ${show ? 'rotate-90' : ''}`} src="/src/assets/arow.svg" alt="" />
            <img className="w-[23px] mr-3" src={icon} alt="" />
            <span className={`text-2xl ${show ? "text-white" : "text-steel-blue"}`}>{text}</span>
        </div>
    )
}

export function PersonalInfo(){
    return(
        <div className="md:border-b-[1px] border-b-custom-gray w-full md:h-[13rem] flex justify-start items-center flex-col gap-2 mb-2">
            <PersonalInfoCategory text="bio" icon="/src/assets/o-folder.svg"/>
            <PersonalInfoCategory text="interests" icon="/src/assets/g-folder.svg"/>
            <PersonalInfoCategory text="education" icon="/src/assets/m-folder.svg"/>
        </div>
    )
}
