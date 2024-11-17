import { useDispatch, useSelector } from "react-redux";
import { removeComponent, toggleComponent } from "../../../../componentsSlice";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import data from '/src/data.json'


  
function Writer({Lines, length}){

    return(<>
        <div className='w-[95%] h-[95%] flex'>
            <div className="w-[4rem]">
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
                component: <Writer Lines={data.education} length={data.education.length}/>
            });
        }
        else {
            dispatch(removeComponent({ text: 'education.md' }));
        }
      }, [locationPath]);
      
  
    return (
        <div className="w-[85%] flex flex-col">
            <div className="flex justify-start items-center">
            <img src="/assets/readmi.svg" alt="" />
            <span className="text-2xl text-light-gray">education.md</span>
            </div>
        </div>
    );
  }
  
  export default Education;