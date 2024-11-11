import { useDispatch, useSelector } from "react-redux";
import { removeComponent, toggleComponent } from "../../../../componentsSlice";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";


const lines = [
    "/**",
    "  * I'm Nourdine Ouakhroun, a passionate software ",
    "  * engineering student from Morocco, currently ",
    "  * honing my skills at 1337 Coding School, ",
    "  * part of the prestigious 42 Network.",
    "  * ",
    "  * I'm a 21-year-old full-stack software engineer ",
    "  * with a deep interest in building efficient, ",
    "  * scalable, and innovative solutions. My journey", 
    " * in software development has equipped me with ", 
    " * a strong foundation in both front-end and ",
    " * back-end technologies, allowing me to create",
    " * impactful applications.",
    " */ "
]


function Writer({Lines, length}){
    return(<>
        <div className='w-[90%] h-[95%] flex'>
            <div className="w-[5rem]">
                {/* print just numbers */}
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
        {/* <img className="absolute" src="/src/assets/Background Blurs.svg" alt="" /> */}
        <div className='w-[90%] h-[90%] relative flex justify-center items-start drop-shadow-[80px_30px_10px_rgba(0,0,0,1)]'>
            <img 
                className="
                w-[80%]
                opacity-80
                " 
                src="/src/assets/nouakhro-none_background.jpeg" 
                alt="Profile Image"
            />
        </div>
        {/* <div className='w-[90%] h-[90%] relative flex justify-center items-start'>
            <img 
                className="
                w-[100%]
                opacity-80
                " 
                src="/src/assets/nouakhro.jpeg" 
                alt="Profile Image"
            />
        </div> */}
    </>)
}


const BioComponent = [
    {
        img : '/src/assets/Readmi.svg',
        text: 'about-me.md',
        component: <Writer Lines={lines} length={lines.length}/>
    },
    {
        img : '/src/assets/img.svg',
        text: 'nouakhro.jpeg',
        component: <MyImg/>
    }
]


function Bio() {
    const dispatch = useDispatch();
    const selectedComponents = useSelector(
      (state) => state.components.selectedComponents
    );
    const location = useLocation();
    const locationPath = location.pathname.endsWith('bio');
  
    const handleClick = (data) => {
        console.log("=====>", data);
        // data.forEach((component) => {
            dispatch(toggleComponent(data));
        // });
    };
  
    // Trigger actions when the component mounts
    useEffect(() => {
        if (locationPath) {
            handleClick({
                img: '/src/assets/Readmi.svg',
                text: 'about-me.md',
                component: <Writer Lines={lines} length={lines.length}/>
            });
            handleClick({
                img: '/src/assets/img.svg',
                text: 'nouakhro.jpeg',
                component: <MyImg/>
            });
        }
        else {
            dispatch(removeComponent({ text: 'about-me.md' }));
            dispatch(removeComponent({ text: 'nouakhro.jpeg' }));
        }
      }, [locationPath]);
      
  
    return (
        <div className="w-[85%] flex flex-col">
            <div className="flex justify-start items-center">
            <img src="/src/assets/Readmi.svg" alt="" />
            <span className="text-2xl text-light-gray">about-me.md</span>
            </div>
            <div className="flex justify-start items-center">
            <img src="/src/assets/img.svg" alt="" />
            <span className="text-2xl text-light-gray">nouakhro.jpeg</span>
            </div>
        </div>
    );
  }
  
  export default Bio;