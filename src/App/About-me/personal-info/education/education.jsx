import { useDispatch, useSelector } from "react-redux";
import { removeComponent, toggleComponent } from "../../../../componentsSlice";
import { useLocation } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import data from '/src/data.json'


function Writer({Lines, length}){
    const componentRef = useRef(null);
    const [width, setWidth] = useState(0);
  
    useEffect(() => {
        if (componentRef.current) {
            const rect = componentRef.current.getBoundingClientRect();
            setWidth(rect.width);
            console.log(rect.width);
        }
    }, []);

    return(
        <div className='w-[90%] h-[90%] flex justify-start items-center'>
            <div className='w-[90%] lg:min-w-[35rem] lg:max-w-[60rem] h-[95%] flex'>
                <div className="w-[7rem] hidden 2xl:flex items-start justify-between">
                    <div className="flex flex-col items-end">
                        {
                            Array.from({length: length}, (_, i) => i + 1).map((number, index)=>{
                                return (
                                    <p key={index} className='text-light-gray lg:text-xl 3xl:text-2xl'>
                                        {number}
                                    </p>
                            )})
                            
                        }
                    </div>
                    <div className="flex flex-col items-center">
                        {
                            Array.from({length: length}, (_, i) => i + 1).map((number, index)=>{
                                return (
                                    <p key={index} className='lg:text-xl 3xl:text-2xl text-light-gray'>
                                        {
                                            index === 0 ? '/**' : index === length - 1 ? '*/' : '*'  
                                        }
                                    </p>
                            )})
                        }
                    </div>
                </div>
                <div className='w-full h-full flex flex-col justify-start items-start  '>
                    {
                        Lines.map((line, index)=>{
                            return (
                                <p key={index} className='text-light-gray md:text-lg lg:text-xl 3xl:text-2xl  whitespace-pre-wrap'>
                                    {`${line}`}
                                </p>
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
            handleClick({
                img: '/assets/readmi.svg',
                text: 'education.md',
                component: <Writer Lines={data.education} length={20}/>
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