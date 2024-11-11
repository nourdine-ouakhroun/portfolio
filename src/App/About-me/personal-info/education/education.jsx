import { useDispatch, useSelector } from "react-redux";
import { removeComponent, toggleComponent } from "../../../../componentsSlice";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
const lines = [
    "/**",
    " *",
    " * EDUCATION JOURNEY",
    " *",
    " *     2022 — 2024",
    " *         Software Engineering at 1337 Coding School, 42 Network",
    " *         Tétouan, Morocco",
    " *         Focus: Full-Stack Development, Algorithms, Data Structures",
    " *         Skills: Project Management, Version Control, Self-learning",
    " *",
    " *     2020 — 2023",
    " *         Licentiate Degree in Economics and Management",
    " *         Ibn Zohr University, FSJES-CUAM Agadir, Ait Melloul",
    " *         Specialization: Management",
    " *         Achievement: Graduated with a focus on leadership and teamwork",
    " *         Skills: Project Management, Communication, Business Strategy",
    " */"
];
  
  
function Writer({Lines, length}){

    return(<>
        <div className='w-[95%] h-[95%] flex'>
            <div className="w-[4rem]">
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


// const BioComponent = [
//     {
//         img : '/src/assets/Readmi.svg',
//         text: 'education.md',
//         component: <Writer Lines={lines}/>
//     },
// ]


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
  
    // Trigger actions when the component mounts
    useEffect(() => {
        if (locationPath) {
            handleClick({
                img: '/src/assets/Readmi.svg',
                text: 'education.md',
                component: <Writer Lines={lines} length={lines.length}/>
            });
        }
        else {
            dispatch(removeComponent({ text: 'education.md' }));
        }
      }, [locationPath]);
      
  
    return (
        <div className="w-[85%] flex flex-col">
            <div className="flex justify-start items-center">
            <img src="/src/assets/Readmi.svg" alt="" />
            <span className="text-2xl text-light-gray">education.md</span>
            </div>
        </div>
    );
  }
  
  export default Education;