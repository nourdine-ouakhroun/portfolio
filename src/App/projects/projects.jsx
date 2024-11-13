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
            <Languages text="React" icon="src/assets/react.svg"/>
            <Languages text="HTML" icon="src/assets/HTML.svg"/>
            <Languages text="Css" icon="src/assets/CSS.svg"/>
            <Languages text="C" icon="src/assets/C.svg"/>
            <Languages text="C++" icon="src/assets/C++.svg"/>
            <Languages text="Django" icon="src/assets/Django.svg"/>
            <Languages text="Python" icon="src/assets/Python.svg"/>
            <Languages text="Docker" icon="src/assets/Docker.svg"/>
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
        </div>
    )
}

export default Projects