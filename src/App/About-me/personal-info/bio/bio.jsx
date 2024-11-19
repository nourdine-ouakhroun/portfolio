import { useDispatch, useSelector } from "react-redux";
import { removeComponent, toggleComponent } from "../../../../componentsSlice";
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

    return(<>
        <div className='w-[90%] min-w-[40rem] h-[95%] flex'>
            <div className="w-[7rem] hidden md:flex items-start justify-between">
                <div className="flex flex-col items-end">
                    {
                        Array.from({length: length}, (_, i) => i + 1).map((number, index)=>{
                            return (
                                <p key={index} className='text-light-gray md:text-2xl'>
                                    {number}
                                </p>
                        )})
                        
                    }
                </div>
                <div className="flex flex-col items-center">
                    {
                        Array.from({length: length}, (_, i) => i + 1).map((number, index)=>{
                            return (
                                <p key={index} className='text-light-gray md:text-2xl'>
                                    {
                                        index === 0 ? '/**' : index === Math.ceil(length) - 1 ? '*/' : '*'  
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
                            <p key={index} className='text-light-gray md:text-2xl whitespace-pre-wrap'>
                                {`${line}`}
                            </p>
                        )
                    })
                }
            </div>

        </div>
    </>)
}

function MyImg(){

    return(<>
        <div className='w-[90%] h-[90%] relative flex justify-center items-start drop-shadow-[80px_30px_10px_rgba(0,0,0,1)]'>
            <img 
                className="
                md:min-w-[40rem]
                w-[42rem]
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
            if (data.bio.length > 0) {
                const totalLength = data.bio.reduce((sum, line) => sum + line.length, 0);
                handleClick({
                    img: '/assets/readmi.svg',
                    text: 'about-me.md',
                    component: <Writer Lines={data.bio} length={totalLength / 25}/>
                });
                handleClick({
                    img: '/assets/img.svg',
                    text: data.image.name,
                    component: <MyImg/>
                });
            }
        }
        else {
            dispatch(removeComponent({ text: 'about-me.md' }));
            dispatch(removeComponent({ text: data.image.name }));
        }
    }, [data.bio, locationPath]);
  
    return (
        <div className="w-[85%] flex flex-col">
            <div className="flex justify-start items-center">
            <img src="/assets/readmi.svg" alt="" />
            <span className="md:text-2xl text-light-gray">about-me.md</span>
            </div>
            <div className="flex justify-start items-center">
            <img src="/assets/img.svg" alt="" />
            <span className="md:text-2xl text-light-gray">{data.image.name}</span>
            </div>
        </div>
    );
  }
  
  export default Bio;