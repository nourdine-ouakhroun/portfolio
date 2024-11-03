import React, {useState} from 'react';
import './category.css';
import costumStyle from '../utils/utils.jsx';
function Category({name}){
    
    const [show, setShow] = useState(false)
    
    clickHandler = () => {
        setShow(!show)
    }
    return(
        <>
            <div className="w-full flex justify-start items-center flex-col bg-custom-gray mb-1" onClick={clickHandler}>
                <div className={costumStyle.container}>
                    <img src="src/assets/playIcon.svg" alt="" className='mr-3'/>
                    <spain className='p-1 text-white'>{' ' + name}</spain>
                </div>
            </div>
            <div className={show ? 'w-full flex justify-start items-center flex-col bg-custom-gray' : 'hidden'}>

            </div>
        </>
    )
}

export default Category