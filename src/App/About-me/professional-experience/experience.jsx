import { useDispatch, useSelector } from "react-redux";
import { removeComponent, resetComponents, toggleComponent } from "../../../componentsSlice";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import data from '/src/data.json';
import { responsiveSizes, responsiveClass } from '../../../utils/responsive.js';

function IntegratedExperience({experience, length}){
    return(
        <div className='w-full h-auto md:h-[90%] flex justify-start items-start pt-2 md:pt-4'>
            <div className='w-full max-w-[98%] h-auto md:h-full bg-gradient-to-br from-dark-blue/40 to-custom-gray/20 rounded-xl border border-custom-gray/50 backdrop-blur-sm overflow-hidden'>
                {/* Header with file info */}
                <div className="flex items-center justify-between p-3 md:p-4 border-b border-custom-gray/30 bg-custom-gray/10">
                    <div className="flex items-center gap-2">
                        <div className="w-3 h-3 bg-red-500/80 rounded-full"></div>
                        <div className="w-3 h-3 bg-yellow-500/80 rounded-full"></div>
                        <div className="w-3 h-3 bg-green-500/80 rounded-full"></div>
                        <span className="ml-3 text-light-gray text-xs md:text-sm font-mono">experience.md</span>
                    </div>
                    <div className="text-light-gray/60 text-xs font-mono">{experience.length} positions</div>
                </div>

                {/* Main content area - mobile-first responsive design */}
                <div className='flex flex-col lg:flex-row'>
                    {/* Mobile: Professional experience cards */}
                    <div className='lg:hidden p-4 space-y-6 max-h-[600px] overflow-y-auto terminal-scroll'>
                        {/* Experience header */}
                        <div className='text-center mb-6'>
                            <div className='w-12 h-12 bg-gradient-to-br from-orange/20 to-orange/10 rounded-full flex items-center justify-center mx-auto mb-3 border border-orange/30'>
                                <svg className="w-6 h-6 text-orange" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2V8a2 2 0 012-2h2zm-1 3a1 1 0 112 0v2a1 1 0 11-2 0V9zm8 0a1 1 0 112 0v2a1 1 0 11-2 0V9zM9 5a1 1 0 011-1h0a1 1 0 011 1v1H9V5z" clipRule="evenodd"/>
                                </svg>
                            </div>
                            <h3 className="text-orange font-bold text-xl">Professional Experience</h3>
                            <p className="text-light-gray text-sm mt-1">Work History & Achievements</p>
                        </div>

                        {/* Experience cards */}
                        {experience.map((exp, index) => (
                            <div key={index} className='bg-gradient-to-br from-dark-blue/30 to-custom-gray/20 rounded-xl p-5 border border-custom-gray/30 relative overflow-hidden'>
                                {/* Company indicator */}
                                <div className='absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-orange via-light-green to-purple'></div>
                                
                                {/* Header */}
                                <div className='mb-4'>
                                    <div className='flex items-start justify-between mb-2'>
                                        <h4 className="text-light-green font-bold text-lg">{exp.position}</h4>
                                        <div className='text-right'>
                                            <div className='inline-flex items-center px-2 py-1 bg-orange/20 border border-orange/30 rounded-md'>
                                                <span className="text-orange font-medium text-xs">{exp.type}</span>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    {/* Company info */}
                                    <div className='flex items-center gap-2 mb-2'>
                                        <svg className="w-4 h-4 text-light-gray" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M4 4a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2H4zm3 2h6v2H7V6zm6 4H7v2h6v-2z" clipRule="evenodd"/>
                                        </svg>
                                        <span className="text-light-gray font-semibold text-base">{exp.company}</span>
                                    </div>
                                    
                                    {/* Duration & Location */}
                                    <div className='flex items-center gap-4 text-sm text-light-gray/80'>
                                        <div className='flex items-center gap-1'>
                                            <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd"/>
                                            </svg>
                                            <span>{exp.duration} ({exp.period})</span>
                                        </div>
                                        <div className='flex items-center gap-1'>
                                            <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"/>
                                            </svg>
                                            <span>{exp.location}</span>
                                        </div>
                                    </div>
                                </div>
                                
                                {/* Project */}
                                <div className='mb-4'>
                                    <div className='bg-purple/10 border border-purple/20 rounded-lg p-3'>
                                        <div className='flex items-center gap-2 mb-2'>
                                            <svg className="w-4 h-4 text-purple" fill="currentColor" viewBox="0 0 20 20">
                                                <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z"/>
                                            </svg>
                                            <span className="text-purple font-semibold text-sm">Project</span>
                                        </div>
                                        <p className="text-purple text-xs leading-relaxed">{exp.project}</p>
                                    </div>
                                </div>
                                
                                {/* Responsibilities */}
                                <div className='mb-4'>
                                    <h5 className="text-light-green font-semibold text-sm mb-2">Key Responsibilities</h5>
                                    <div className='space-y-2'>
                                        {exp.responsibilities.map((resp, respIndex) => (
                                            <div key={respIndex} className='flex items-start gap-2'>
                                                <div className='w-1 h-1 bg-light-green rounded-full mt-2 flex-shrink-0'></div>
                                                <p className="text-light-gray text-xs leading-relaxed">{resp}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                
                                {/* Technologies */}
                                <div className='mb-3'>
                                    <h5 className="text-light-green font-semibold text-sm mb-2">Technologies Used</h5>
                                    <div className='flex flex-wrap gap-1'>
                                        {exp.techs.map((tech, techIndex) => (
                                            <span key={techIndex} className='inline-block bg-light-green/10 border border-light-green/20 rounded px-2 py-1 text-light-green text-xs font-medium'>
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                                
                                {/* Skills */}
                                <div>
                                    <h5 className="text-orange font-semibold text-sm mb-2">Skills Developed</h5>
                                    <div className='flex flex-wrap gap-1'>
                                        {exp.skills.map((skill, skillIndex) => (
                                            <span key={skillIndex} className='inline-block bg-orange/10 border border-orange/20 rounded px-2 py-1 text-orange text-xs font-medium'>
                                                {skill}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
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
                        <div className='flex-1 flex flex-col py-4 px-4 overflow-y-auto terminal-scroll max-h-[600px]'>
                            <div className="text-light-green/70 text-sm font-mono mb-1 min-h-[24px] flex items-center">/**</div>
                            <div className="flex items-center min-h-[24px] mb-2">
                                <span className="text-light-green/70 text-sm font-mono mr-2"> *</span>
                                <span className="text-light-green font-medium text-sm font-mono">Professional Experience</span>
                            </div>
                            <div className="flex items-center min-h-[24px] mb-2">
                                <span className="text-light-green/70 text-sm font-mono mr-2"> *</span>
                                <span className="text-transparent text-sm font-mono"> </span>
                            </div>
                            {experience.map((exp, index) => (
                                <div key={index} className='mb-4'>
                                    <div className="flex items-center min-h-[24px]">
                                        <span className="text-light-green/70 text-sm font-mono mr-2"> *</span>
                                        <span className="text-orange-400 text-sm font-mono">{exp.duration} - {exp.company}</span>
                                    </div>
                                    <div className="flex items-center min-h-[24px]">
                                        <span className="text-light-green/70 text-sm font-mono mr-2"> *</span>
                                        <span className="text-light-green text-sm font-mono">{exp.position}</span>
                                    </div>
                                    <div className="flex items-center min-h-[24px]">
                                        <span className="text-light-green/70 text-sm font-mono mr-2"> *</span>
                                        <span className="text-light-gray text-sm font-mono">{exp.location} | {exp.type}</span>
                                    </div>
                                    <div className="flex items-start min-h-[24px]">
                                        <span className="text-light-green/70 text-sm font-mono mr-2"> *</span>
                                        <span className="text-purple text-sm font-mono">{exp.project}</span>
                                    </div>
                                    {exp.responsibilities.slice(0, 3).map((resp, respIndex) => (
                                        <div key={respIndex} className="flex items-start min-h-[24px]">
                                            <span className="text-light-green/70 text-sm font-mono mr-2"> *</span>
                                            <span className="text-light-gray text-sm font-mono">- {resp}</span>
                                        </div>
                                    ))}
                                    {index < experience.length - 1 && (
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

function Experience() {
    const dispatch = useDispatch();
    const selectedComponents = useSelector(
      (state) => state.components.selectedComponents
    );
    const location = useLocation();
    const locationPath = location.pathname.endsWith('experience');
  
    const handleClick = (data) => {
        dispatch(toggleComponent(data));
    };
  
    useEffect(() => {
        if (locationPath) {
            dispatch(resetComponents());
            handleClick({
                img: '/assets/readmi.svg',
                text: 'experience.md',
                component: <IntegratedExperience experience={data.experience} length={data.experience.length * 8 + 4}/>
            });
        }
        else {
            dispatch(removeComponent({ text: 'experience.md' }));
        }
      }, [locationPath]);
      
  
    return (
        <div className="w-[85%] flex flex-col">
            <div className="flex justify-start items-center">
            <img src="/assets/readmi.svg" alt="" className={responsiveClass(responsiveSizes.icons.xs, responsiveSizes.margins.icon)}/>
            <span className={responsiveClass('text-light-gray', responsiveSizes.text.sm)}>experience.md</span>
            </div>
        </div>
    );
  }
  
  export default Experience;
