import { useDispatch, useSelector } from "react-redux";
import { removeComponent, resetComponents, toggleComponent } from "../../../../componentsSlice";
import { useLocation } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import data from '/src/data.json';

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
        <div className='lg:text-xl 3xl:text-2xl w-[90%] h-[90%] flex justify-start items-center'>
            <div className='w-[90%] lg:min-w-[35rem] lg:max-w-[60rem] h-[95%] flex'>
                <div className="w-[7rem] hidden 2xl:flex items-start justify-between">
                    <div className="flex flex-col items-end">
                        {
                            Array.from({length: length}, (_, i) => i + 1).map((number, index)=>{
                                return (
                                    <p key={index} className='text-light-gray '>
                                        {number}
                                    </p>
                            )})
                            
                        }
                    </div>
                    <div className="flex flex-col items-center">
                        {
                            Array.from({length: length}, (_, i) => i + 1).map((number, index)=>{
                                return (
                                    <p key={index} className=' text-light-gray'>
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
                                <p key={index} className='text-light-gray  whitespace-pre-wrap'>
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

function MyImg(){

    return(<>
        <div className='w-[90%] h-[90%] relative flex justify-center items-start 2xl:drop-shadow-[40px_0px_20px_rgba(0,0,0,1)]'>
            <img 
                className="
                lg:min-w-[35rem]
                1xl:w-[42rem]
                w-[30rem]
                opacity-80
                " 
                src={data.image.src}
                alt="Profile Image"
            />
        </div>
    </>)
}


function Bio() {
    const dispatch = useDispatch();
    const selectedComponents = useSelector(
      (state) => state.components.selectedComponents
    );
    const location = useLocation();
    const locationPath = location.pathname.endsWith('bio');
  
    const handleClick = (data) => {
        dispatch(toggleComponent(data));
    };
  
    useEffect(() => {
        if (locationPath) {
            handleResize();
        }
        else {
            dispatch(resetComponents());

        }
    }, [data.bio, locationPath]);
    
    const handleResize = () => {
        if (locationPath) {
            console.log("its nooooooooot meeeeeee", location.pathname)
            if (window.innerWidth <= 1536) {
            
                dispatch(resetComponents());

                handleClick({
                    img: '/assets/img.svg',
                    text: data.image.name,
                    component: <MyImg/>
                });
                const totalLength = data.bio.reduce((sum, line) => sum + line.length, 0);
                handleClick({
                    img: '/assets/readmi.svg',
                    text: 'about-me.md',
                    component: <Writer Lines={data.bio} length={Math.ceil(totalLength / 24)}/>
                });
            }
            else {
                
                dispatch(resetComponents());

                const totalLength = data.bio.reduce((sum, line) => sum + line.length, 0);
                handleClick({
                    img: '/assets/readmi.svg',
                    text: 'about-me.md',
                    component: <Writer Lines={data.bio} length={Math.ceil(totalLength / 24)}/>
                });
                handleClick({
                    img: '/assets/img.svg',
                    text: data.image.name,
                    component: <MyImg/>
                });
            }
        }
    }

    useEffect(() => {
        window.addEventListener('resize', () => handleResize());

        handleResize();

        return () => {
            window.removeEventListener('resize', () => handleResize()); 
        }
    }, [ ]);           
    return (
        <div className="w-[85%] flex flex-col">
            <div className="flex justify-start items-center ">
            <img src="/assets/readmi.svg" alt="" className="w-[20px] h-[20px] 2xl:w-auto 2xl:h-auto mr-3"/>
            <span className="2xl:text-xl 3xl:text-2xl text-light-gray">about-me.md</span>
            </div>
            <div className="flex justify-start items-center">
            <img src="/assets/img.svg" alt="" className="w-[20px] h-[20px] 2xl:w-auto 2xl:h-auto mr-3"/>
            <span className="2xl:text-xl 3xl:text-2xl text-light-gray">{data.image.name}</span>
            </div>
        </div>
    );
  }
  
  export default Bio;