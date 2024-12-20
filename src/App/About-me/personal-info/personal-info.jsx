import './personal-info.css'
import costumStyle from '../../utils/utils.jsx'
import { useEffect, useState } from 'react'
import Bio from './bio/bio.jsx'
import { useSelector } from 'react-redux'
import { Link, Route, Routes, useLocation, useNavigate } from 'react-router-dom'
import Education from './education/education.jsx'
import data from '/src/data.json'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFilePdf } from '@fortawesome/free-solid-svg-icons';
import { motion } from 'framer-motion';
const pageVariants = {
	initial: { opacity: 0, y: -50 },
	animate: { opacity: 1, y: 0 },
	exit: { opacity: 0, y: 50 },
};

function Content({text, component, img}){
    return(
        <div className='w-full h-full flex flex-col flex-1 border-r-[1px] border-r-custom-gray'>
            <div className='hidden md:flex w-full h-[4rem] md:border-[1px] 2xl:border-b-[1px] border-custom-gray'>
                <div className='flex justify-center items-center h-full w-[19rem] border-r-[1px] border-r-custom-gray'>
                    <div className='flex justify-between items-center w-[90%]'>
                        <img src={img} alt="" className='w-[20px] h-[20px] 2xl:w-auto 2xl:h-auto'/>
                        <span className='lg:text-xl 3xl:text-2xl text-light-gray'>{text}</span>
                        <img src="/assets/x.svg" alt=""/>
                    </div>
                </div>
            </div>
            <div className='flex flex-1'>
                <motion.div
                    key={text}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    variants={pageVariants}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                    className="w-full h-full flex justify-center items-start"
                >
                    {component}
                </motion.div>
                <div className='hidden 2xl:flex justify-center  w-[3rem] h-full border-l-[1px] border-l-custom-gray'>
                    <div className='mt-2 w-[2rem] h-[13px] bg-light-gray'></div>
                </div>
            </div>
        </div>
    )
}


export function PersonalInfoContent() {
  const selectedComponents = useSelector(
    (state) => state.components.selectedComponents
  );

  return (
    <div className="flex flex-col 2xl:flex-row w-full h-full justify-start items-center">
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


function PersonalInfoCategory({text, icon, component}) {
    const [show, setShow] = useState(false)
    const clickhandler = () =>{
        setShow(!show)
    }
    return(
        <div className='flex flex-col w-[85%] mb-[7px]'>
            <Link to={text} className={costumStyle.container + ' h-[40px]'} onClick={clickhandler}>
                <img className={`mr-4 ${show  ? 'rotate-90' : ''}`} src="/assets/arow.svg" alt="" />
                <img className="w-[20px] h-[20px] 2xl:w-auto 2xl:h-auto mr-3" src={icon} alt="" />
                <span className={`2xl:text-xl 3xl:text-2xl ${show ? "text-white" : "text-steel-blue"}`}>{text}</span>
            </Link>
            <div className={!show ? 'hidden' : 'flex flex justify-end items-center'} >{component}</div>
        </div>
    )
}

const DownloadResume = () => {
	const handleDownload = () => {
		window.open(data.resume, '_blank');
	};

	return (
		<div
		className=" mb-[7px] w-[90%] flex flex-col cursor-pointer"
		onClick={handleDownload}
		>
		<div className="flex justify-start items-center w-full h-[50px]">
			<FontAwesomeIcon icon={faFilePdf} className="text-steel-blue 2xl:text-2xl 3xl:text-3xl mr-3 ml-2" />
			<span className="2xl:text-xl 3xl:text-2xl  text-light-gray">my_resume.pdf</span>
		</div>
		</div>
	);
};


export function PersonalInfo(){
    
    return(
        <div className="md:border-b-[1px] border-b-custom-gray w-full  flex justify-start items-center flex-col gap-2 mb-2 3xl:min-w-[20rem] 2xl:min-w-[17rem] min-w-[17rem]">
            <PersonalInfoCategory text="bio" icon="/assets/o-folder.svg" component={<Bio/>}/>
            <PersonalInfoCategory text="education" icon="/assets/m-folder.svg" component={<Education/>}/>
            <DownloadResume />
        </div>
    )
}
