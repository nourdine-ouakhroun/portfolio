import { useDispatch, useSelector } from "react-redux";
import { removeComponent, resetComponents, toggleComponent } from "../../../../componentsSlice";
import { useLocation } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import data from '/src/data.json'


function Writer({education, length}){
    const componentRef = useRef(null);
    const [width, setWidth] = useState(0);
  
    useEffect(() => {
        if (componentRef.current) {
            const rect = componentRef.current.getBoundingClientRect();
            setWidth(rect.width);
        }
    }, []);

    return(
        <div className='ml-10 w-full h-[90%] flex justify-start items-center xl:text-xl 3xl:text-2xl '>
            <div className='w-full h-[95%] flex'>
                <div className="w-[7rem] hidden 2xl:flex items-start justify-between">
                    <div className="flex flex-col items-end">
                        {
                            Array.from({length: length}, (_, i) => i + 1).map((number, index)=>{
                                return (
                                    <p key={index} className='text-light-gray'>
                                        {number}
                                    </p>
                            )})
                            
                        }
                    </div>
                    <div className="flex flex-col items-center">
                        {
                            Array.from({length: length}, (_, i) => i + 1).map((number, index)=>{
                                return (
                                    <p key={index} className='text-light-gray'>
                                        {
                                            index === 0 ? '/**' : index === length - 1 ? '*/' : '*'  
                                        }
                                    </p>
                            )})
                        }
                    </div>
                </div>
                <div className='w-full h-full flex flex-col justify-start items-start  '>
                    <br/>
                    <br/>
                    <span className='text-light-gray '> Education Journey </span> 
                    {
                        
                        education.map((degree, index)=>{
                            return (
                                <div key={index} className='w-full flex flex-col justify-start items-start'>
                                    <br/>
                                    <br/>
                                    <p className='text-light-gray lg:whitespace-pre-wrap'>
                                        {`  Date: ${degree.date}`}
                                    </p>
                                    <p className='text-light-gray lg:whitespace-pre-wrap'>
                                        {`      Degree: ${degree.degree}`}
                                    </p>
                                    <p className='text-light-gray lg:whitespace-pre-wrap'>
                                        {`      school: ${degree.school}`}
                                    </p>
                                    <p className='text-light-gray lg:whitespace-pre-wrap'>
                                        {`      location: ${degree.location}`}
                                    </p>
                                    <p className='text-light-gray lg:whitespace-pre-wrap'>
                                        {`      focus: ${degree.focus}`}
                                    </p>
                                    <p className='text-light-gray lg:whitespace-pre-wrap'>
                                        {`      skills: ${degree.skills}`}
                                    </p>
                                </div>
                            )
                        })
                    }
                </div>

            </div>
        </div>
    )
}

function Education() {
    const dispatch = useDispatch();
    const selectedComponents = useSelector(
      (state) => state.components.selectedComponents
    );
    const location = useLocation();
    const locationPath = location.pathname.endsWith('education');
  
    const handleClick = (data) => {
        dispatch(toggleComponent(data));
    };
  
    useEffect(() => {
        if (locationPath) {
            dispatch(resetComponents());
            handleClick({
                img: '/assets/readmi.svg',
                text: 'education.md',
                component: <Writer education={data.education} length={20}/>
            });
        }
        else {
            dispatch(removeComponent({ text: 'education.md' }));
        }
      }, [locationPath]);
      
  
    return (
        <div className="w-[85%] flex flex-col">
            <div className="flex justify-start items-center">
            <img src="/assets/readmi.svg" alt="" className="w-[20px] h-[20px] 2xl:w-auto 2xl:h-auto mr-3"/>
            <span className="2xl:text-xl 3xl:text-2xl text-light-gray">education.md</span>
            </div>
        </div>
    );
  }
  
  export default Education;