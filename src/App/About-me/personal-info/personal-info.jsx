import './personal-info.css'
import costumStyle from '../../utils/utils.jsx'
import { useState } from 'react'
import Bio from './bio/bio.jsx'

const lines = [
    "/**",
    "  * About me",
    "  * Hello World!",
    "  * I'm Nourdine Ouakhroun, a passionate software ",
    "  * engineering student from Morocco, currently ",
    "  * honing my skills at 1337 Coding School, ",
    "  * part of the prestigious 42 Network.",
    "  * ",
    "  * I'm a 21-year-old full-stack software engineer ",
    " * with a deep interest in building efficient, ",
    " * scalable, and innovative solutions. My journey", 
    " * in software development has equipped me with ", 
    " * a strong foundation in both front-end and ",
    " * back-end technologies, allowing me to create",
    " * impactful applications.",
    " * ",
    " * I'm also an avid competitive programmer, having",
    " * competed in events like MNPC and CodinGame, where",
    " * I secured 92nd place globally and 13th place in ",
    " * Morocco during my first competition.",
    " */ "
]

function Writer({Lines}){

    return(<>
        <div className='w-[90%] h-[90%]'>
            {
               Lines.map((line, index)=>{
                    return (
                        <p key={index} className='text-light-gray text-2xl' style={{ whiteSpace: 'pre' }}>
                            {`${index + 1}   ${line}`}
                        </p>
                    )
               })
            }
        </div>
    </>)
}

function MyImg(){

    return(<>
        {/* <img className="absolute" src="/src/assets/Background Blurs.svg" alt="" /> */}
        <div className='w-[90%] h-[90%] relative flex justify-center items-start drop-shadow-[80px_30px_10px_rgba(0,0,0,1)]'>
            <img 
                className="
                w-[80%]
                opacity-80
                " 
                src="/src/assets/nouakhro-none_background.jpeg" 
                alt="Profile Image"
            />
        </div>
        {/* <div className='w-[90%] h-[90%] relative flex justify-center items-start'>
            <img 
                className="
                w-[100%]
                opacity-80
                " 
                src="/src/assets/nouakhro.jpeg" 
                alt="Profile Image"
            />
        </div> */}
    </>)
}

function Content({text, component, img}){
    return(
        <div className='flex flex-col flex-1 border-r-[1px] border-r-custom-gray'>
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

export function PersonalInfoContent(){
    return(
        <div className='flex w-full h-full'>
            <Content img="/src/assets/Readmi.svg" text='about-me.md' component={<Writer Lines={lines}/>}/>
            <Content img="/src/assets/img.svg" text='nouakhro.jpeg' component={<MyImg/>}/>
        </div>
    )
}

function PersonalInfoCategory({text, icon, component}) {
    const [show, setShow] = useState(false)

    const clickhandler = () =>{
        setShow(!show)
    }   
    return(
        <div className='flex flex-col w-[85%]'>
            <div className={costumStyle.container + ' h-[40px]'} onClick={clickhandler}>
                <img className={`w-[11px] mr-4 ${show ? 'rotate-90' : ''}`} src="/src/assets/arow.svg" alt="" />
                <img className="w-[23px] mr-3" src={icon} alt="" />
                <span className={`text-2xl ${show ? "text-white" : "text-steel-blue"}`}>{text}</span>
            </div>
            <div className={!show ? 'hidden' : 'flex flex justify-end items-center'} >{component}</div>
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
