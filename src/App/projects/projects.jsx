import Category from "../category/category"
import { useEffect, useState } from 'react';
import data from '/src/data.json'
import { useDispatch, useSelector } from "react-redux";
import { removeComponent, toggleComponent } from "../../componentsSlice";

const Checkmark = ({ text }) => {
	const [isChecked, setIsChecked] = useState(false);
	const dispatch = useDispatch();
	const selectedProjects = useSelector((state) => state.components.selectedProjects);
	const selectedTechs = useSelector((state) => state.components.selectedTechs);
	const handleClick = () => {
		setIsChecked(!isChecked);
		if (isChecked) {
			dispatch(removeComponent({ text: text }));
		}
		else {
			dispatch(toggleComponent({ text: text, type: 'projects' }));
		}
	};
	useEffect(() => {
		if (selectedTechs.includes(text)) {
			setIsChecked(true);
		}
		else {
			setIsChecked(false);
		}
	}, [selectedTechs]);
	return (
		<div
		className={`cursor-pointer flex justify-center items-center w-8 h-8 rounded-lg border-2 transition-all duration-200 ${
			isChecked
			? 'bg-steel-blue border-steel-blue'
			: 'bg-transparent border-steel-blue hover:bg-gray-800 hover:border-gray-400'
		}`}
		onClick={handleClick}
		>
		{isChecked && (
			<svg 
			xmlns="http://www.w3.org/2000/svg"
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			stroke="#FFFFFF"
			strokeWidth="3"
			strokeLinecap="round"
			strokeLinejoin="round"
			>
			<path d="M5 12l5 5L19 7" />
			</svg>
		)}
		</div>
	);
};



function Content(){
  return(
		<div className='w-full h-full flex flex-col border-r-[1px] border-r-custom-gray'>
				<div className='hidden md:flex  w-full border-b-[1px] border-b-custom-gray'>
					<div className='flex justify-center items-center h-full w-[19rem] border-r-[1px] border-r-custom-gray'>
						<div className='h-[4rem] flex justify-between items-center w-[90%]'>
								<span className='text-sm 2xl:text-2xl text-light-gray '>
									Projects
								</span>
							<img src="/assets/x.svg" alt=""/>
						</div>
					</div>
				</div>
				<div className='flex justify-center items-center w-full h-full'>
					<ProjectsList/>
				</div>
		</div>
  )
}

function Languages({text, icon})
{
    return (
        <div className="min-w-[15rem] h-[3rem] w-full flex justify-start items-center cursor-pointer gap-3">
            <Checkmark text={text}/>
            <div className="flex justify-start items-center gap-3">
                <img src={icon} alt="" className="w-[25px] h-[25px] 2xl:w-auto 2xl:h-auto" />
                <spain className="text-white text-lg 2xl:text-2xl">{text}</spain>
            </div>
        </div>
    )
}

function ProjectsFliter()
{
    return (
        <div className="w-[90%] mt-2">
            {
				data.languages.map((item, index) => (
					<Languages key={index} text={item.name} icon={item.icon}/>
				))
			}
        </div>
    )
}

import { motion } from "framer-motion";

const pageVariants = {
	initial: { opacity: 0, y: -50 },
	animate: { opacity: 1, y: 0 },
	exit: { opacity: 0, y: 50 },
};

function ProjectsCard({link, description, img, text, technologies, skills})
{
	const [isClicked, setIsClicked] = useState(false);
	const [isResized, setIsResized] = useState(false);
	const handleClick = () => {
		setIsClicked(!isClicked);
	}
	const handleResize = () => {
		if (window.innerWidth > 768) {
			setIsResized(true);
		}
		else {
			setIsResized(false);
		}
	};
	useEffect(() => {
		window.addEventListener('resize', () => {handleResize();});
		handleResize();
		return () => window.removeEventListener('resize', () => {handleResize();});
	}, []);
	return (
		<motion.div
		initial="initial"
		animate="animate"
		exit="exit"
		variants={pageVariants}
		transition={{ duration: 0.5, ease: "easeInOut" }}
		className="w-full flex flex-col md:flex-row justify-end items-end border border-custom-gray"
	>
			<div className="min-w-[15rem] flex w-full flex-col h-full justify-center items-center flex-1 border-r-[1px] border-r-custom-gray overflow-hidden">
				<div className="md:hidden flex w-full justify-between items-center p-2 ">
					<div className="flex gap-2 w-full justify-end items-center">
						{
							technologies.map((item, index) => (
								<img key={index} src={"/assets/" + item + ".svg"} alt=""/>
							))
						}
					</div>
				</div>
				<img className="w-[90%] object-contain" src={img} alt="" />
			</div>
			
			<div className="w-full mt-5 flex flex-col justify-center items-center">
				<div className="w-[95%] flex justify-start items-start">
					<div className="w-full flex flex-col justify-between items-end">
						<div className="hidden md:flex w-full justify-between items-center">
							<a href={link} target="_blank" rel="noreferrer" className="flex justify-end items-end gap-2">
								<span className="text-light-purple text-xl 2xl:text-2xl">{text}</span>
							</a>
							<div className="flex gap-2">
								{
									technologies.map((item, index) => (
										<img key={index} src={"/assets/" + item + ".svg"} alt=""  className="w-[20px] h-[20px] 2xl:w-auto 2xl:h-auto" />
									))
								}
							</div>
						</div>
	
						<div className="w-full flex justify-between flex-col gap-5 items-end border-custom-gray">
							<div className="flex w-[98%] flex-col justify-between items-start">
								<div className="flex flex-col">
									{
										description.map((item, index) => (
											!isClicked && (!isResized || index >= 2) ? null :

											<div key={index} className="flex items-start gap-2">
												<span className="text-light-gray text-2xl 2xl:text-3xl">•</span>
												<span className="text-light-gray text-sm 2xl:text-2xl break-words">{item}</span>
											</div>
										))
									}
									{
										isClicked && 
										<div className="flex gap-2 justify-start items-start">
											<span className="text-light-gray text-2xl 2xl:text-3xl">•</span>
											<span className="text-light-gray text-sm 2xl:text-2xl">Skills: &nbsp;
												{
													skills.map((item, index) => (
														<span className="text-light-gray text-sm 2xl:text-2xl">{item}
														{
															index !== skills.length - 1 &&
															<span className="text-light-gray text-sm 2xl:text-2xl">, </span>
														}
														</span>
													))
												}
											</span>
										</div>
									}
								</div>
							</div>
							<div className="w-full mb-5 flex justify-between items-center">
								<div className="flex justify-start items-center">
									<button className="text-sm 2xl:text-xl md:w-[7rem] 2xl:w-[10rem] bg-custom-gray rounded-lg" onClick={handleClick}>{
										isClicked ? "View Less" : "View More"
									}</button>
								</div>
								<a href={link} target="_blank" rel="noreferrer" className="w-[10%] flex justify-end items-end gap-2">
									<img src="/assets/github.svg" alt="" className="" />
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</motion.div>
	)
}	




function ProjectsList()
{
	const selectedProjects = useSelector((state) => state.components.selectedProjects);
    return(
		<div className="[&::-webkit-scrollbar]:hidden w-[95%] h-[90%] flex flex-col items-start  overflow-y-auto gap-5">
			{
				selectedProjects.length === 0 ? data.projects.map((item, index) => (
					<ProjectsCard 
						key={index}
						link={item.link}
					 	description={item.description}
						img={item.img} text={item.name}
						technologies={item.techs}
						skills={item.skills}/>
				)) : selectedProjects.map((item, index) => (
					<ProjectsCard 
						key={index}
						link={item.link}
					 	description={item.description}
						img={item.img} text={item.name}
						technologies={item.techs}
						skills={item.skills}/>
				))
			}
		</div>
    )
}

function Projects()
{
    return (
        <div className="w-full h-full about-me flex md:grid grid-cols-[1fr_4fr] justify-start items-start flex-col overflow-y-auto relative">
            <div className='flex w-full absolute md:relative bg-custom-blue  z-10'>
                <div className='w-full'>
                    <Category name="Filter" component={<ProjectsFliter/>}/>
                </div>
            </div>
            <div className="w-full h-full overflow-hidden md:border-l-[1px] border-l-custom-gray">
				<Content/>
            </div>
        </div>
    )
}

export default Projects