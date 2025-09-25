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
				<div className='hidden md:flex w-full h-[2rem] sm:h-[2.25rem] md:h-[2.5rem] lg:h-[2.75rem] xl:h-[3rem] border-b-[1px] border-b-custom-gray bg-custom-gray/10'>
					<div className='flex justify-center items-center h-full w-[6rem] sm:w-[7rem] md:w-[8rem] lg:w-[9rem] xl:w-[10rem] border-r-[1px] border-r-custom-gray bg-dark-blue/20 hover:bg-custom-gray/20 transition-colors duration-200'>
						<div className='flex justify-between items-center w-[85%] gap-1'>
								<span className='text-[9px] sm:text-[10px] md:text-xs lg:text-xs xl:text-xs text-light-gray truncate'>
									Projects
								</span>
							<img src="/assets/x.svg" alt="" className="w-2 h-2 opacity-40 hover:opacity-80 cursor-pointer flex-shrink-0"/>
						</div>
					</div>
				</div>
				<div className='w-full h-full overflow-hidden'>
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
                <span className="text-white text-lg 2xl:text-2xl">{text}</span>
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
	const [isHovered, setIsHovered] = useState(false);
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
		className="w-full max-w-full relative group"
		onMouseEnter={() => setIsHovered(true)}
		onMouseLeave={() => setIsHovered(false)}
	>
		{/* Modern glassmorphism card */}
		<div className="relative backdrop-blur-sm bg-gradient-to-br from-dark-blue/40 via-custom-gray/20 to-dark-blue/60 border border-custom-gray/50 rounded-xl overflow-hidden hover:border-light-green/30 transition-all duration-300 hover:shadow-2xl hover:shadow-light-green/10">
			{/* Animated background gradient */}
			<div className="absolute inset-0 bg-gradient-to-r from-transparent via-light-green/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
			
			{/* Content container */}
			<div className="relative z-10 flex flex-col lg:flex-row">
				{/* Image section with modern styling */}
				<div className="lg:w-[280px] xl:w-[300px] 2xl:w-[320px] relative overflow-hidden bg-gradient-to-br from-custom-gray/10 to-dark-blue/20 flex-shrink-0">
					{/* Tech stack badges - mobile */}
					<div className="md:hidden absolute top-3 right-3 z-20">
						<div className="flex gap-1 flex-wrap justify-end">
							{technologies.slice(0, 4).map((item, index) => (
								<div key={index} className="w-6 h-6 bg-custom-gray/80 backdrop-blur-sm rounded-full flex items-center justify-center border border-light-green/20">
									<img src={"/assets/" + item + ".svg"} alt="" className="w-3 h-3"/>
								</div>
							))}
						</div>
					</div>
					
					{/* Project image with hover effects */}
					<div className="relative p-6 h-full flex items-center justify-center group-hover:scale-105 transition-transform duration-500">
						<img 
							className="w-full h-auto max-h-[200px] object-contain drop-shadow-2xl group-hover:drop-shadow-[0_0_20px_rgba(67,217,173,0.3)] transition-all duration-500" 
							src={img} 
							alt={text}
						/>
						{/* Subtle glow effect */}
						<div className="absolute inset-0 bg-gradient-to-t from-light-green/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg"></div>
					</div>
				</div>
				
				{/* Content section with modern typography */}
				<div className="flex-1 p-6 md:p-8 flex flex-col justify-between">
					{/* Header section */}
					<div className="space-y-4">
						{/* Title and tech stack */}
						<div className="flex flex-col gap-3">
							<a 
								href={link} 
								target="_blank" 
								rel="noreferrer" 
								className="group/title flex items-center gap-2 hover:gap-3 transition-all duration-300"
							>
								<h3 className="text-lg lg:text-xl font-semibold text-light-purple group-hover/title:text-light-green transition-colors duration-300">
									{text}
								</h3>
								<svg className="w-4 h-4 text-light-gray group-hover/title:text-light-green group-hover/title:translate-x-1 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
								</svg>
							</a>
							
							{/* Tech stack - all devices */}
							<div className="flex gap-2 flex-wrap">
								{technologies.map((item, index) => (
									<div key={index} className="group/tech relative">
										<div className="w-7 h-7 lg:w-8 lg:h-8 bg-custom-gray/60 backdrop-blur-sm rounded-lg flex items-center justify-center border border-light-green/20 hover:border-light-green/50 hover:bg-light-green/10 transition-all duration-300">
											<img src={"/assets/" + item + ".svg"} alt={item} className="w-4 h-4 lg:w-5 lg:h-5 group-hover/tech:scale-110 transition-transform duration-300"/>
										</div>
										{/* Tooltip */}
										<div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-dark-blue/90 text-white text-xs px-2 py-1 rounded opacity-0 group-hover/tech:opacity-100 transition-opacity duration-200 whitespace-nowrap z-30">
											{item}
										</div>
									</div>
								))}
							</div>
						</div>
						
						{/* Description */}
						<div className="space-y-2">
							{description.slice(0, isClicked ? description.length : 2).map((item, index) => (
								<div key={index} className="flex items-start gap-3 group/desc">
									<div className="w-1.5 h-1.5 bg-light-green/60 rounded-full mt-2 flex-shrink-0 group-hover/desc:bg-light-green transition-colors duration-200"></div>
									<p className="text-light-gray text-sm md:text-base leading-relaxed group-hover/desc:text-white transition-colors duration-200">
										{item}
									</p>
								</div>
							))}
							
							{isClicked && skills.length > 0 && (
								<div className="flex items-start gap-3 mt-4 p-3 bg-custom-gray/20 rounded-lg border border-light-green/10">
									<div className="w-1.5 h-1.5 bg-purple/60 rounded-full mt-2 flex-shrink-0"></div>
									<div>
										<span className="text-purple font-medium text-sm">Skills: </span>
										<span className="text-light-gray text-sm">
											{skills.join(', ')}
										</span>
									</div>
								</div>
							)}
						</div>
					</div>
					
					{/* Action buttons */}
					<div className="flex items-center justify-between mt-6 pt-4 border-t border-custom-gray/30">
						<button 
							onClick={handleClick}
							className="px-4 py-2 bg-custom-gray/60 hover:bg-custom-gray text-white rounded-lg transition-all duration-300 hover:scale-105 text-sm font-medium backdrop-blur-sm border border-light-green/20 hover:border-light-green/40"
						>
							{isClicked ? "Show Less" : "Show More"}
						</button>
						
						<a 
							href={link} 
							target="_blank" 
							rel="noreferrer" 
							className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-light-green/20 to-purple/20 hover:from-light-green/30 hover:to-purple/30 text-white rounded-lg transition-all duration-300 hover:scale-105 text-sm font-medium backdrop-blur-sm border border-light-green/30"
						>
							<span>View Code</span>
							<img src="/assets/github.svg" alt="GitHub" className="w-4 h-4" />
						</a>
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
		<div className="w-full h-full flex flex-col overflow-y-auto p-4 space-y-6">
			{
				selectedProjects.length === 0 ? data.projects.map((item, index) => (
					<div key={index} className="w-full max-w-full">
						<ProjectsCard
							link={item.link}
						 	description={item.description}
							img={item.img} text={item.name}
							technologies={item.techs}
							skills={item.skills}/>
					</div>
				)) : selectedProjects.map((item, index) => (
					<div key={index} className="w-full max-w-full">
						<ProjectsCard
							link={item.link}
						 	description={item.description}
							img={item.img} text={item.name}
							technologies={item.techs}
							skills={item.skills}/>
					</div>
				))
			}
		</div>
    )
}

function Projects()
{
    return (
        <div className="w-full h-full about-me flex md:grid md:grid-cols-[240px_1fr] lg:grid-cols-[260px_1fr] xl:grid-cols-[280px_1fr] justify-start items-start flex-col overflow-y-auto relative">
            <div className='flex w-full absolute md:relative bg-custom-blue z-10'>
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