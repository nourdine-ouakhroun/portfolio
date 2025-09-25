import { useDispatch, useSelector } from "react-redux";
import { removeComponent, resetComponents, toggleComponent } from "../../../../componentsSlice";
import { useLocation } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import data from '/src/data.json';
import { responsiveSizes, responsiveClass, componentConfig } from '../../../../utils/responsive.js';


function IntegratedEducation({education, length}){
    return(
        <div className='w-full h-auto md:h-[90%] flex justify-start items-start pt-2 md:pt-4'>
            <div className='w-full max-w-[98%] h-auto md:h-full bg-gradient-to-br from-dark-blue/40 to-custom-gray/20 rounded-xl border border-custom-gray/50 backdrop-blur-sm overflow-hidden'>
                {/* Header with file info */}
                <div className="flex items-center justify-between p-3 md:p-4 border-b border-custom-gray/30 bg-custom-gray/10">
                    <div className="flex items-center gap-2">
                        <div className="w-3 h-3 bg-red-500/80 rounded-full"></div>
                        <div className="w-3 h-3 bg-yellow-500/80 rounded-full"></div>
                        <div className="w-3 h-3 bg-green-500/80 rounded-full"></div>
                        <span className="ml-3 text-light-gray text-xs md:text-sm font-mono">education.md</span>
                    </div>
                    <div className="text-light-gray/60 text-xs font-mono">{education.length} degrees</div>
                </div>
                
                {/* Main content area - mobile-first responsive design */}
                <div className='flex flex-col lg:flex-row'>
                    {/* Mobile: Vertical timeline style */}
                    <div className='lg:hidden p-4 max-h-[500px] overflow-y-auto terminal-scroll'>
                        {/* Timeline container */}
                        <div className='relative'>
                            {/* Timeline line */}
                            <div className='absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-light-green via-purple to-orange'></div>
                            
                            {/* Timeline items */}
                            {education.map((degree, index) => (
                                <div key={index} className='relative flex items-start gap-4 pb-8 last:pb-0'>
                                    {/* Timeline dot */}
                                    <div className='relative z-10 flex-shrink-0'>
                                        <div className='w-12 h-12 bg-gradient-to-br from-dark-blue to-custom-gray border-2 border-light-green rounded-full flex items-center justify-center'>
                                            <div className='w-6 h-6 bg-light-green rounded-full flex items-center justify-center'>
                                                <span className='text-dark-blue text-xs font-bold'>{index + 1}</span>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    {/* Content */}
                                    <div className='flex-1 bg-gradient-to-r from-dark-blue/20 to-custom-gray/10 rounded-lg p-4 border border-custom-gray/30 mt-1'>
                                        {/* Date */}
                                        <div className='text-orange font-bold text-sm mb-2'>{degree.date}</div>
                                        
                                        {/* Degree */}
                                        <h3 className='text-light-green font-bold text-base mb-2'>{degree.degree}</h3>
                                        
                                        {/* School & Location */}
                                        <div className='space-y-1 mb-3'>
                                            <p className='text-light-gray text-sm font-medium'>{degree.school}</p>
                                            <p className='text-light-gray/80 text-xs'>{degree.location}</p>
                                        </div>
                                        
                                        {/* Focus */}
                                        <div className='inline-block bg-purple/20 border border-purple/30 rounded-md px-2 py-1'>
                                            <span className='text-purple text-xs font-medium'>{degree.focus}</span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    
                    {/* Desktop/Tablet: Code layout */}
                    <div className='hidden lg:flex lg:flex-row w-full'>
                        {/* Line numbers */}
                        <div className="w-16 bg-custom-gray/20 flex flex-col items-center py-4 border-r border-custom-gray/30">
                            {Array.from({length: length}, (_, i) => i + 1).map((number, index) => (
                                <div key={index} className="text-light-gray/60 text-sm leading-6 font-mono min-h-[24px] flex items-center">
                                    {number}
                                </div>
                            ))}
                        </div>
                        
                        {/* Code content */}
                        <div className='flex-1 flex flex-col py-4 px-4 overflow-y-auto terminal-scroll'>
                            <div className="text-light-green/70 text-sm font-mono mb-1 min-h-[24px] flex items-center">/**</div>
                            <div className="flex items-center min-h-[24px] mb-2">
                                <span className="text-light-green/70 text-sm font-mono mr-2"> *</span>
                                <span className="text-light-green font-medium text-sm font-mono">Education Journey</span>
                            </div>
                            <div className="flex items-center min-h-[24px] mb-2">
                                <span className="text-light-green/70 text-sm font-mono mr-2"> *</span>
                                <span className="text-transparent text-sm font-mono"> </span>
                            </div>
                            {education.map((degree, index) => (
                                <div key={index} className='mb-3'>
                                    <div className="flex items-center min-h-[24px]">
                                        <span className="text-light-green/70 text-sm font-mono mr-2"> *</span>
                                        <span className="text-orange-400 text-sm font-mono">{degree.date}</span>
                                    </div>
                                    <div className="flex items-center min-h-[24px]">
                                        <span className="text-light-green/70 text-sm font-mono mr-2"> *</span>
                                        <span className="text-light-green text-sm font-mono">{degree.degree}</span>
                                    </div>
                                    <div className="flex items-center min-h-[24px]">
                                        <span className="text-light-green/70 text-sm font-mono mr-2"> *</span>
                                        <span className="text-light-gray text-sm font-mono">{degree.school}</span>
                                    </div>
                                    <div className="flex items-center min-h-[24px]">
                                        <span className="text-light-green/70 text-sm font-mono mr-2"> *</span>
                                        <span className="text-light-gray text-sm font-mono">{degree.location}</span>
                                    </div>
                                    <div className="flex items-center min-h-[24px]">
                                        <span className="text-light-green/70 text-sm font-mono mr-2"> *</span>
                                        <span className="text-purple text-sm font-mono">{degree.focus}</span>
                                    </div>
                                    {index < education.length - 1 && (
                                        <div className="flex items-center min-h-[24px]">
                                            <span className="text-light-green/70 text-sm font-mono mr-2"> *</span>
                                            <span className="text-transparent text-sm font-mono"> </span>
                                        </div>
                                    )}
                                </div>
                            ))}
                            <div className="text-light-green/70 text-sm font-mono mt-1 min-h-[24px] flex items-center"> */</div>
                        </div>
                    </div>
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
    const locationPath = location.pathname.includes('personal') && location.pathname.endsWith('education');
  
    const handleClick = (data) => {
        dispatch(toggleComponent(data));
    };
  
    useEffect(() => {
        if (locationPath) {
            dispatch(resetComponents());
            handleClick({
                img: '/assets/readmi.svg',
                text: 'education.md',
                component: <IntegratedEducation education={data.education} length={data.education.length * 5 + 4}/>
            });
        }
        else {
            dispatch(removeComponent({ text: 'education.md' }));
        }
      }, [locationPath]);
      
  
    return (
        <div className="w-[85%] flex flex-col">
            <div className="flex justify-start items-center">
            <img src="/assets/readmi.svg" alt="" className={responsiveClass(responsiveSizes.icons.xs, responsiveSizes.margins.icon)}/>
            <span className={responsiveClass('text-light-gray', responsiveSizes.text.sm)}>education.md</span>
            </div>
        </div>
    );
  }
  
  export default Education;