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
import { responsiveSizes, responsiveClass } from '../../../utils/responsive.js';
const pageVariants = {
	initial: { opacity: 0, y: -50 },
	animate: { opacity: 1, y: 0 },
	exit: { opacity: 0, y: 50 },
};

function Content({text, component, img}){
    return(
        <div className='w-full h-auto md:h-full flex flex-col flex-1 md:border-r-[1px] border-r-custom-gray'>
            <div className={responsiveClass('hidden md:flex w-full md:border-b-[1px] border-custom-gray bg-custom-gray/10', 'h-[2rem] sm:h-[2.25rem] md:h-[2.5rem] lg:h-[2.75rem] xl:h-[3rem]')}>
                <div className='flex justify-center items-center h-full w-[6rem] sm:w-[7rem] md:w-[8rem] lg:w-[9rem] xl:w-[10rem] border-r-[1px] border-r-custom-gray bg-dark-blue/20 hover:bg-custom-gray/20 transition-colors duration-200'>
                    <div className='flex justify-between items-center w-[85%] gap-1'>
                        <img src={img} alt="" className={responsiveClass(responsiveSizes.icons.xs, 'flex-shrink-0')}/>
                        <span className={responsiveClass('text-light-gray truncate', 'text-[9px] sm:text-[10px] md:text-xs lg:text-xs xl:text-xs')}>{text}</span>
                        <img src="/assets/x.svg" alt="" className={responsiveClass(responsiveSizes.icons.xs, 'opacity-40 hover:opacity-80 cursor-pointer flex-shrink-0')}/>
                    </div>
                </div>
            </div>
            <div className='flex flex-1 min-h-[300px] md:min-h-0'>
                <motion.div
                    key={text}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    variants={pageVariants}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                    className="w-full h-full flex justify-center items-start py-4 md:py-0"
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
    <div className="flex flex-col md:flex-col 2xl:flex-row w-full h-full justify-start items-center">
      {
        selectedComponents.length > 0 ? (
            selectedComponents.map(({ img, text, component }, index) => (
                <Content key={index} img={img} text={text} component={component} />
            ))
        ) : (
            <p className={responsiveClass('text-light-gray', responsiveSizes.text.lg)}>No File Selected</p>
        )
      }
    </div>
  );
}


function PersonalInfoCategory({text, icon, component}) {
    const location = useLocation()
    const navigate = useNavigate()
    // Initialize show state based on current URL
    const [show, setShow] = useState(location.pathname.endsWith(text))
    
    // Update show state when URL changes
    useEffect(() => {
        setShow(location.pathname.endsWith(text))
    }, [location.pathname, text])
    
    const clickhandler = () =>{
        if (show) {
            // If already open, close it (but keep the navigation)
            setShow(false)
        } else {
            // If closed, open it and navigate directly to the correct path
            setShow(true)
            navigate(`personal/${text}`)
        }
    }
    return(
        <div className={responsiveClass('flex flex-col w-[85%] group', responsiveSizes.gaps.sm)}>
            <div className={responsiveClass(
                costumStyle.container, 
                'h-[32px] sm:h-[36px] md:h-[38px] lg:h-[40px] xl:h-[42px] 2xl:h-[44px]',
                'hover:bg-custom-gray/20 transition-colors duration-200 relative rounded-sm cursor-pointer'
            )} onClick={clickhandler}>
                {/* Subtle hover indicator */}
                <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-light-green/40 opacity-0 group-hover:opacity-100 transition-opacity duration-200"></div>
                <img className={responsiveClass(
                    responsiveSizes.margins.icon, 
                    responsiveSizes.icons.xs, 
                    'transition-transform duration-200',
                    show ? 'rotate-90' : ''
                )} src="/assets/arow.svg" alt="" />
                
                <img className={responsiveClass(
                    responsiveSizes.icons.xs, 
                    'mr-1.5 sm:mr-2 md:mr-2.5 lg:mr-3 xl:mr-3 2xl:mr-3.5'
                )} src={icon} alt="" />
                
                <span className={responsiveClass(
                    responsiveSizes.text.sm,
                    show ? "text-light-green" : "text-steel-blue"
                )}>{text}</span>
            </div>
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
		className={responsiveClass(
			'w-[90%] flex flex-col cursor-pointer hover:bg-custom-gray/20 transition-colors duration-200 relative group rounded-sm', 
			responsiveSizes.gaps.sm
		)}
		onClick={handleDownload}
		>
		{/* Subtle download indicator */}
		<div className="absolute left-0 top-0 bottom-0 w-0.5 bg-orange-400/40 opacity-0 group-hover:opacity-100 transition-opacity duration-200"></div>
		<div className={responsiveClass('flex justify-start items-center w-full', responsiveSizes.heights.large)}>
			<FontAwesomeIcon 
				icon={faFilePdf} 
				className={responsiveClass(
					'text-steel-blue', 
					responsiveSizes.text.sm, 
					responsiveSizes.margins.icon, 
					'ml-1.5 sm:ml-2 md:ml-2.5 lg:ml-3 xl:ml-3 2xl:ml-3.5'
				)} 
			/>
			<span className={responsiveClass(
				'text-light-gray', 
				responsiveSizes.text.sm
			)}>my_resume.pdf</span>
		</div>
		</div>
	);
};


export function PersonalInfo(){
    
    return(
        <div className='md:border-b-[1px] border-b-custom-gray w-full flex justify-start items-center flex-col gap-1 sm:gap-1.5 md:gap-2'>
            <PersonalInfoCategory text="bio" icon="/assets/o-folder.svg" component={<Bio/>}/>
            <PersonalInfoCategory text="education" icon="/assets/m-folder.svg" component={<Education/>}/>
            <DownloadResume />
        </div>
    )
}
