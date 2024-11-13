import Category from "../category/category"
import { useState } from 'react';

const Checkmark = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleClick = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div
      className="checkmark-container cursor-pointer flex justify-center items-center w-6 h-6 border border-steel-blue rounded"
      onClick={handleClick}
    >
      {isChecked ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-steel-blue"
        >
          <path d="M5 12l4 4L19 7" />
        </svg>
      ) : (
        <div className="checkmark-placeholder w-full h-full bg-steel-blue"></div>
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
            <Languages text="React" icon="/src/assets/react.svg"/>
            <Languages text="HTML" icon="/src/assets/html.svg"/>
            <Languages text="Css" icon="/src/assets/CSS.svg"/>
            <Languages text="C" icon="/src/assets/CSS.svg"/>
            <Languages text="C++" icon="/src/assets/CSS.svg"/>
            <Languages text="Django" icon="/src/assets/CSS.svg"/>
            <Languages text="Python" icon="/src/assets/CSS.svg"/>
            <Languages text="Docker" icon="/src/assets/CSS.svg"/>
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