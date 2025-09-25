import React, {useState} from 'react';
import './category.css';
import costumStyle from '../utils/utils.jsx';
import { responsiveSizes, responsiveClass } from '../../utils/responsive.js';
function Category({name, component}){
    const [show, setShow] = useState(true)

    const clickHandler = () => {
        setShow(!show)
    }
    return(
        <>
            <div className={responsiveClass(
                'flex justify-center items-center md:border-b-[1px] border-b-custom-gray w-full flex justify-start items-center flex-col bg-custom-gray md:bg-transparent cursor-pointer hover:bg-custom-gray/30 transition-colors duration-200 relative group',
                responsiveSizes.heights.medium,
                responsiveSizes.gaps.sm
            )} onClick={clickHandler}>
                {/* Subtle left indicator */}
                <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-light-green/40 opacity-0 group-hover:opacity-100 transition-opacity duration-200"></div>
                <div className={costumStyle.container}>
                    <img 
                        src="/assets/playIcon.svg" 
                        alt="" 
                        className={responsiveClass(
                            responsiveSizes.margins.icon, 
                            responsiveSizes.icons.xs, 
                            'transition-transform duration-200',
                            show ? 'rotate-90' : ''
                        )}
                    />
                    <span className={responsiveClass(
                        'p-1',
                        responsiveSizes.text.sm,
                        show ? 'text-light-green' : 'text-white'
                    )}>{' ' + name}</span>
                </div>
            </div>
            <div className={show ? 'w-full flex justify-start items-center flex-col' : 'hidden'}>
                {component}
            </div>
        </>
    )
}

export default Category