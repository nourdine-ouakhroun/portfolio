import Category from "../category/category"
import { useState } from 'react';


const Checkmark = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleClick = () => {
    setIsChecked(!isChecked);
  };

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
          width="28"
          height="28"
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
				<div className='w-full h-[4rem] border-b-[1px] border-b-custom-gray'>
					<div className='flex justify-center items-center h-full w-[19rem] border-r-[1px] border-r-custom-gray'>
						<div className='flex justify-between items-center w-[90%]'>
								<span className='text-2xl text-light-gray'>{
								}</span>
							<img src="/assets/x.svg" alt=""/>
						</div>
					</div>
				</div>
				{
					<div className='flex justify-center items-center w-full h-full'>
						<ProjectsList/>
					</div>
				}
		</div>
  )
}

function Languages({text, icon})
{
    return (
        <div className="w-[40%] h-[3rem] flex justify-between items-center cursor-pointer">
            <Checkmark/>
            <div className="flex w-[70%] justify-start items-center gap-3">
                <img src={icon} alt="" className="w-[30px] h-[30px]"/>
                <spain className="text-white text-2xl">{text}</spain>
            </div>
        </div>
    )
}

function ProjectsFliter()
{
    return (
        <div className="w-[90%] mt-2">
            <Languages text="React" icon="/assets/react.svg"/>
            <Languages text="HTML" icon="/assets/HTML.svg"/>
            <Languages text="Css" icon="/assets/CSS.svg"/>
            <Languages text="C" icon="/assets/C.svg"/>
            <Languages text="C++" icon="/assets/C++.svg"/>
            <Languages text="Django" icon="/assets/Django.svg"/>
            <Languages text="Python" icon="/assets/Python.svg"/>
            <Languages text="Docker" icon="/assets/Docker.svg"/>
        </div>
    )
}

// transition duration-500 ease-in-out transform hover:scale-105 hover:border-light-gray 
function ProjectsCard({description, img, text})
{
	return (
		<div className="w-full h-[12rem] flex flex justify-end items-end border border-custom-gray ">
			<div className="w-full h-full flex justify-center items-start flex-1 border-r-[1px] border-r-custom-gray overflow-hidden">
				<img className="w-[90%] h-full object-contain" src={img} alt="" />
			</div>
			<div className="w-[85%] h-full felx flex-col flex justify-center items-center">
				<div className="w-[95%] h-[80%] flex  justify-start  items-start gap-2">
					<div className="w-full h-full flex flex-col justify-between items-end">
						<div className="flex w-full justify-between items-center">
							<span className="text-light-purple text-2xl">{text}</span>
							<div className="flex gap-2">
								<img src="/assets/react.svg" alt="" className="w-[30px] h-[30px]"/>
								<img src="/assets/HTML.svg" alt="" className="w-[30px] h-[30px]"/>
								<img src="/assets/CSS.svg" alt="" className="w-[30px] h-[30px]"/>
							</div>
						</div>
						<div className="w-[99%] h-full flex justify-between items-end border-custom-gray">
							<div className="flex w-[90%] h-full flex justify-between items-start">
								<div className="flex h-full flex-col justify-start items-start">
								{
									description.map((item, index) => {
										return (
											<div key={index} className="flex justify-start items-center gap-2">
												<span className="text-light-gray text-3xl"> • </span>
												<span className="text-light-gray text-xl"> {item} </span>
											</div>
										)
									})
								}
								</div>
								<div className="w-[10%] flex h-full justify-start items-end gap-2">
									<img src="/assets/github.svg" alt="" className="w-[35px] h-[35px]"/>
								</div>
							</div>
							<div className="h-[3rem] flex justify-start items-center">
								<button className="w-[10rem] h-full bg-custom-gray rounded-lg">View-Project</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}


const description = {
	Inception: [
		"Introduction to the world of virtualization.",
	],
	//give this with new line
	Transcendence : [
		"The ft_transcendence project challenges 42 students to build a scalable, full-stack web application.",
	],
	WebServer: [
		"Introduction to the world of virtualization.",
	]
}

function ProjectsList()
{
    return(
		<div className="[&::-webkit-scrollbar]:hidden w-[95%] h-[85%] flex flex-col items-start flex-wrap overflow-y-auto gap-5">
			<ProjectsCard description={description.Transcendence} img={"/assets/tranc.svg"} text={"ft_transcendence"}/>
			<ProjectsCard description={description.WebServer} img={"/assets/nginx.png"} text={"WebServer"}/>
			<ProjectsCard description={description.Inception} img={"/assets/Docker-Logo.png"} text={"Inception"}/>
			<ProjectsCard description={description.Inception} img={"/assets/Docker-Logo.png"} text={"Inception"}/>
		</div>
    )
}

function Projects()
{
    return (
        <div className="w-full h-full about-me flex md:grid grid-cols-[1fr_4fr]  justify-start items-center flex-col">
            <div className='flex w-full h-full md:border-r-[1px] border-r-custom-gray'>
                <div className='w-full h-full md:border-r-[1px] border-r-custom-gray'>
                    <Category name="Projects" component={<ProjectsFliter/>}/>
                </div>
            </div>
            <div className="w-full h-full  scrollbar-none scrollbar-hide  no-scrollbar">
				<Content/>
            </div>
        </div>
    )
}

export default Projects