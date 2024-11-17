import { useDispatch, useSelector } from "react-redux";
import { removeComponent, toggleComponent } from "../../../../componentsSlice";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import data from '/src/data.json';

function Writer({Lines, length}){
    return(<>
        <div className='w-[90%] h-[95%] flex'>
            <div className="w-[5rem]">
                {
                    Array.from({length: length}, (_, i) => i + 1).map((number, index)=>{
                        return (
                            <p key={index} className='text-light-gray text-2xl'>
                            {number}
                        </p>
                    )
                    })
                }
            </div>
            <div>
                {
                    Lines.map((line, index)=>{
                        return (
                            <p key={index} className='text-light-gray text-2xl' style={{ whiteSpace: 'pre' }}>
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
                w-[80%]
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
            handleClick({
                img: '/assets/readmi.svg',
                text: 'about-me.md',
                component: <Writer Lines={data.bio} length={data.bio.length}/>
            });
            handleClick({
                img: '/assets/img.svg',
                text: data.image.name,
                component: <MyImg/>
            });
        }
        else {
            dispatch(removeComponent({ text: 'about-me.md' }));
            dispatch(removeComponent({ text: data.image.name }));
        }
      }, [locationPath]);
      
  
    return (
        <div className="w-[85%] flex flex-col">
            <div className="flex justify-start items-center">
            <img src="/assets/readmi.svg" alt="" />
            <span className="text-2xl text-light-gray">about-me.md</span>
            </div>
            <div className="flex justify-start items-center">
            <img src="/assets/img.svg" alt="" />
            <span className="text-2xl text-light-gray">{data.image.name}</span>
            </div>
        </div>
    );
  }
  
  export default Bio;