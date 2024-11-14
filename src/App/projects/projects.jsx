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


function ProjectsCard({description, img, text})
{
	return (
		<div className="w-[30rem] h-[30rem] flex flex-col justify-start items-end">
			<div className="w-full h-[5rem] flex justify-start items-center">
				<span className="text-light-purple text-2xl">{text}</span>
			</div>

			<div className="transition duration-500 ease-in-out transform hover:scale-105 hover:border-light-gray w-full h-[25rem] felx flex-col rounded-xl border border-custom-gray flex justify-center items-center">
				<div className="w-full h-full flex justify-center items-center flex-1 border-b-[1px] border-b-custom-gray rounded-t-xl overflow-hidden">
					<img className="w-[90%] h-full object-contain" src={img} alt="" />
				</div>
				<div className="flex flex-col flex-1 w-full h-full bg-dark-blue justify-center items-center rounded-b-xl">
					<div className="flex flex-col justify-between items-center w-[85%] h-[75%]">
						<span className="text-light-gray text-2xl">{description}</span>
						<div className="w-full h-[3rem] flex justify-start items-center">
							<button className="w-[10rem] h-[3rem] bg-custom-gray rounded-lg">View-Project</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

const description = {
	Inception: "Deployed WordPress, MariaDB, Nginx using Docker",
	Transcendence: "A web application that allows users to create",
	WebServer: "A web server that can handle multiple clients "
}

function ProjectsList()
{
    return(
		// hide the scrollbar
		<div className="w-[80%] h-[90%] flex justify-evenly items-center flex-wrap overflow-y-auto  scrollbar-none scrollbar-hide  no-scrollbar">
			<ProjectsCard description={description.Transcendence} img={"/assets/tranc.svg"} text={"Transcendence"}/>
			<ProjectsCard description={description.WebServer} img={"/assets/nginx.png"} text={"WebServer"}/>
			{/* <ProjectsCard description={description.Inception} img={"/assets/Inception.png"} text={"Inception"}/> */}
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