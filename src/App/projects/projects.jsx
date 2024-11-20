import Category from "../category/category"
import { useState } from 'react';
import data from '/src/data.json'

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
				<div className='hidden md:flex  w-full border-b-[1px] border-b-custom-gray'>
					<div className='flex justify-center items-center h-full w-[19rem] border-r-[1px] border-r-custom-gray'>
						<div className='h-[4rem] flex justify-between items-center w-[90%]'>
								<span className='text-2xl text-light-gray '>
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
        <div className="w-[40%] h-[3rem] flex justify-between items-center cursor-pointer">
            <Checkmark/>
            <div className="flex w-[70%] justify-start items-center gap-3">
                <img src={icon} alt="" className=""/>
                <spain className="text-white text-2xl">{text}</spain>
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


function ProjectsCard({link, description, img, text, technologies, skills})
{
	const [isClicked, setIsClicked] = useState(false);

	const handleClick = () => {
		setIsClicked(!isClicked);
	}
	return (
		<div className="w-full flex flex-col md:flex-row justify-end items-end border border-custom-gray">
			<div className="min-w-[15rem] flex  flex-col h-full justify-center items-center flex-1 border-r-[1px] border-r-custom-gray overflow-hidden">
				<div className="md:hidden flex w-full justify-between items-center p-2 ">
					<div className="flex gap-2 w-full justify-end items-center">
						{
							technologies.map((item, index) => (
								<img key={index} src={"/assets/" + item + ".svg"} alt="" className="" />
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
							<span className="text-light-purple text-2xl">{text}</span>
							<div className="flex gap-2">
								{
									technologies.map((item, index) => (
										<img key={index} src={"/assets/" + item + ".svg"} alt="" className="" />
									))
								}
							</div>
						</div>
	
						<div className="w-full flex justify-between flex-col  gap-5 items-end border-custom-gray">
							<div className="hidden md:flex w-[98%] flex-col justify-between items-start">
								<div className="flex flex-col">
									{
										description.map((item, index) => (
											!isClicked && index >= 2 ? null :

											<div key={index} className="flex items-center gap-2">
												<span className="text-light-gray text-3xl">•</span>
												<span className="text-light-gray text-xl break-words">{item}</span>
											</div>
										))
									}
									{
										isClicked && 
										<div className="flex gap-2 justify-start items-center">
											<span className="text-light-gray text-3xl">•</span>
											<span className="text-light-gray text-xl">Skills: </span>
											{
												skills.map((item, index) => (
													<div key={index} className="flex items-center">
														<span className="text-light-gray text-xl">{item}</span>
														{
															index !== skills.length - 1 &&
															<span className="text-light-gray text-xl">,</span>
														}
													</div>
												))
											}
										</div>
									}
								</div>
							</div>
							<div className="w-full mb-5 flex justify-between items-center">
								<div className="flex justify-start items-center">
									<button className="w-[10rem] bg-custom-gray rounded-lg" onClick={handleClick}>{
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
		</div>
	)
}	


// "demo": "https:/www.youtube.com/watch?v=3JZDZQ1v8Qw"


function ProjectsList()
{
    return(
		<div className="[&::-webkit-scrollbar]:hidden w-[95%] h-[90%] flex flex-col items-start  overflow-y-auto gap-5">
			{
				data.projects.map((item, index) => (
					<ProjectsCard 
						key={index}
						link={item.link}
					 	description={item.description}
						img={item.img} text={item.name}
						technologies={item.tech}
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
            <div className='flex w-full  absolute md:relative bg-custom-blue'>
                <div className='w-full '>
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