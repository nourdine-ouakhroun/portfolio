import React, {useState} from 'react';
import './category.css';
import costumStyle from '../utils/utils.jsx';
function Category({name, component}){
    const [show, setShow] = useState(true)
    
    const clickHandler = () => {
        setShow(!show)
    }
    return(
        <>
            <div className="flex justify-center items-center md:border-b-[1px] border-b-custom-gray w-full md:h-[4rem] flex justify-start items-center flex-col bg-custom-gray  md:bg-transparent mb-1" onClick={clickHandler}>
                <div className={costumStyle.container}>
                    <img src="/src/assets/playIcon.svg" alt="" className={`w-[10px] mr-3 ${show ? 'rotate-90' : ''}`}/>
                    <spain className='text-2xl p-1 text-white'>{' ' + name}</spain>
                </div>
            </div>
            <div className={show ? 'w-full flex justify-start items-center flex-col' : 'hidden'}>
                {component}
            </div>
        </>
    )
}

export default Category