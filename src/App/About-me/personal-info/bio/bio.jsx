import { useDispatch, useSelector } from "react-redux";
import { removeComponent, resetComponents, toggleComponent } from "../../../../componentsSlice";
import { useLocation } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import data from '/src/data.json';
import { responsiveSizes, responsiveClass, componentConfig } from '../../../../utils/responsive.js';

function Writer({Lines, length}){
    const componentRef = useRef(null);
    const [width, setWidth] = useState(0);
  
    useEffect(() => {
        if (componentRef.current) {
            const rect = componentRef.current.getBoundingClientRect();
            setWidth(rect.width);
        }
    }, []);

    return(
        <div className='w-full h-auto md:h-[90%] flex justify-start items-start pt-2 md:pt-4'>
            <div className='w-full max-w-[95%] md:max-w-[90%] h-auto md:h-full bg-dark-blue/30 rounded-lg border border-custom-gray/50 flex'>
                {/* Line numbers - clean and simple */}
                <div className="w-12 md:w-16 bg-custom-gray/20 flex flex-col items-center py-2 md:py-3 border-r border-custom-gray/50 rounded-l-lg">
                        {
                            Array.from({length: length}, (_, i) => i + 1).map((number, index)=>{
                                return (
                                <div key={index} className="text-light-gray/60 text-xs md:text-sm leading-5 md:leading-6 font-mono">
                                        {number}
                    </div>
                            )
                        })
                    }
                </div>
                
                {/* Content area - clean layout */}
                <div className='flex-1 flex flex-col py-2 md:py-3 px-2 md:px-4'>
                    <div className="text-light-green/60 text-xs md:text-sm font-mono mb-1">/**</div>
                    {
                        Lines.map((line, index)=>{
                            const isEmpty = line.trim() === '';
                            const isTitle = line.includes('Nourdine');
                            const hasKeywords = line.includes('software') || line.includes('developer') || line.includes('1337') || line.includes('42');
                            
                            return (
                                <div key={index} className="flex items-start">
                                    <span className="text-light-green/60 text-xs md:text-sm font-mono mr-1 md:mr-2"> *</span>
                                    <span className={`text-xs md:text-sm font-mono leading-5 md:leading-6 ${
                                        isEmpty ? 'text-transparent' :
                                        isTitle ? 'text-light-green font-medium' :
                                        hasKeywords ? 'text-orange-400' :
                                        'text-light-gray'
                                    }`}>
                                        {isEmpty ? ' ' : line}
                                    </span>
                                </div>
                            )
                        })
                    }
                    <div className="text-light-green/60 text-xs md:text-sm font-mono mt-1"> */</div>
                </div>
            </div>
        </div>
    )
}

function IntegratedBio({Lines, length}){
    // Calculate age based on birth date: February 18, 2003
    const calculateAge = (birthDate) => {
        const today = new Date();
        const birth = new Date(birthDate);
        let age = today.getFullYear() - birth.getFullYear();
        const monthDiff = today.getMonth() - birth.getMonth();
        
        if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birth.getDate())) {
            age--;
        }
        
        return age;
    };
    
    const age = calculateAge('2003-02-18');
    
    // Update bio lines to use dynamic age
    const updatedBioLines = Lines.map(line => 
        line.includes('21-year-old') ? line.replace('21-year-old', `${age}-year-old`) : line
    );
    
    return(
        <div className='w-full h-auto md:h-[90%] flex justify-start items-start pt-2 md:pt-4'>
            <div className='w-full max-w-[98%] h-auto md:h-full bg-gradient-to-br from-dark-blue/40 to-custom-gray/20 rounded-xl border border-custom-gray/50 backdrop-blur-sm overflow-hidden'>
                {/* Header with file info */}
                <div className="flex items-center justify-between p-3 md:p-4 border-b border-custom-gray/30 bg-custom-gray/10">
                    <div className="flex items-center gap-2">
                        <div className="w-3 h-3 bg-red-500/80 rounded-full"></div>
                        <div className="w-3 h-3 bg-yellow-500/80 rounded-full"></div>
                        <div className="w-3 h-3 bg-green-500/80 rounded-full"></div>
                        <span className="ml-3 text-light-gray text-xs md:text-sm font-mono">about-me.md</span>
                    </div>
                    <div className="text-light-gray/60 text-xs font-mono">{Lines.length + 2} lines</div>
                </div>

                {/* Main content area - mobile profile card style */}
                <div className='flex flex-col lg:flex-row max-h-[500px] lg:max-h-[600px] xl:max-h-[700px] overflow-y-auto terminal-scroll'>
                    {/* Mobile: Profile card style */}
                    <div className='lg:hidden p-4 space-y-4 max-h-[400px] overflow-y-auto terminal-scroll'>
                        {/* Profile header */}
                        <div className='flex items-center gap-4 bg-gradient-to-r from-dark-blue/30 to-custom-gray/20 rounded-xl p-4 border border-custom-gray/30'>
                            <div className='relative'>
                                <img 
                                    className="w-16 h-16 rounded-full object-cover border-2 border-light-green/40" 
                                    src={data.image.src}
                                    alt="Nourdine Ouakhroun"
                                />
                                <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-light-green rounded-full border-2 border-dark-blue flex items-center justify-center">
                                    <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                                </div>
                            </div>
                            <div className='flex-1'>
                                <h3 className="text-light-green font-bold text-lg">Nourdine Ouakhroun</h3>
                                <p className="text-orange-400 font-medium text-sm">Full-Stack Developer</p>
                                <p className="text-light-gray text-xs">Software Engineering Student</p>
                            </div>
                        </div>

                        {/* Bio content */}
                        <div className='bg-dark-blue/20 rounded-xl border border-custom-gray/30 overflow-hidden'>
                            <div className="flex items-center gap-2 p-3 border-b border-custom-gray/30 bg-custom-gray/10">
                                <div className="w-2 h-2 bg-red-500/80 rounded-full"></div>
                                <div className="w-2 h-2 bg-yellow-500/80 rounded-full"></div>
                                <div className="w-2 h-2 bg-green-500/80 rounded-full"></div>
                                <span className="ml-2 text-light-gray text-xs font-mono">about-me.md</span>
                            </div>
                                    <div className='p-3 max-h-[300px] overflow-y-auto terminal-scroll'>
                                        {updatedBioLines.map((line, index) => {
                                    const isEmpty = line.trim() === '';
                                    const isTitle = line.includes('Nourdine');
                                    const hasKeywords = line.includes('software') || line.includes('developer') || line.includes('1337') || line.includes('42');

                                    if (isEmpty) return null;

                                    return (
                                        <p key={index} className={`text-xs leading-relaxed mb-1 ${
                                            isTitle ? 'text-light-green font-semibold text-sm' :
                                            hasKeywords ? 'text-orange-400 font-medium' :
                                            'text-light-gray'
                                        }`}>
                                            {line}
                                        </p>
                                    );
                                })}
                            </div>
                        </div>

                        {/* Quick stats */}
                        <div className='grid grid-cols-3 gap-2'>
                                    <div className='bg-gradient-to-br from-light-green/10 to-light-green/5 rounded-lg p-3 text-center border border-light-green/20'>
                                        <div className='text-light-green font-bold text-lg'>{age}</div>
                                        <div className='text-light-gray text-xs'>Years Old</div>
                                    </div>
                            <div className='bg-gradient-to-br from-purple/10 to-purple/5 rounded-lg p-3 text-center border border-purple/20'>
                                <div className='text-purple font-bold text-lg'>1337</div>
                                <div className='text-light-gray text-xs'>School</div>
                            </div>
                            <div className='bg-gradient-to-br from-orange/10 to-orange/5 rounded-lg p-3 text-center border border-orange/20'>
                                <div className='text-orange font-bold text-lg'>MA</div>
                                <div className='text-light-gray text-xs'>Morocco</div>
                            </div>
                        </div>
                    </div>

                    {/* Desktop/Tablet: Original layout */}
                    <div className='hidden lg:flex lg:flex-row w-full max-h-[500px] lg:max-h-[600px] xl:max-h-[700px] overflow-y-auto terminal-scroll'>
                        {/* Code section */}
                        <div className='flex-1 flex'>
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
                                {updatedBioLines.map((line, index) => {
                                    const isEmpty = line.trim() === '';
                                    const isTitle = line.includes('Nourdine');
                                    const hasKeywords = line.includes('software') || line.includes('developer') || line.includes('1337') || line.includes('42');

                                    return (
                                        <div key={index} className="flex items-center min-h-[24px]">
                                            <span className="text-light-green/70 text-sm font-mono mr-2"> *</span>
                                            <span className={`text-sm font-mono leading-6 ${
                                                isEmpty ? 'text-transparent' :
                                                isTitle ? 'text-light-green font-semibold' :
                                                hasKeywords ? 'text-orange-400 font-medium' :
                                                'text-light-gray'
                                            }`}>
                                                {isEmpty ? ' ' : line}
                                            </span>
            </div>
                                    );
                                })}
                                <div className="text-light-green/70 text-sm font-mono mt-1 min-h-[24px] flex items-center"> */</div>
            </div>
            </div>
            
                        {/* Image section */}
                        <div className='lg:w-80 xl:w-96 flex justify-center items-center p-6 border-l border-custom-gray/30'>
                            <div className='relative group'>
                                {/* Background glow */}
                                <div className="absolute inset-0 bg-gradient-to-br from-light-green/10 via-purple/5 to-orange/10 rounded-2xl blur-xl scale-110 opacity-50 group-hover:opacity-80 transition-opacity duration-500"></div>
                                
                                {/* Floating decorative elements */}
                                <div className="absolute -top-2 -left-2 w-4 h-4 border-2 border-light-green/30 rounded-full animate-pulse"></div>
                                <div className="absolute -top-1 -right-3 w-2 h-2 bg-purple/40 rounded-full animate-bounce"></div>
                                <div className="absolute -bottom-2 -left-1 w-3 h-3 bg-orange/30 rounded-full animate-ping"></div>
                                
                                {/* Main image container */}
                                <div className="relative z-10 transform group-hover:scale-105 transition-all duration-500">
                                    <div className="relative overflow-hidden rounded-2xl border-2 border-light-green/20 group-hover:border-light-green/40 transition-colors duration-300">
                                        <img 
                                            className="lg:w-56 lg:h-56 xl:w-64 xl:h-64 object-cover transition-all duration-500 group-hover:brightness-110" 
                    src={data.image.src}
                                            alt="Nourdine Ouakhroun - Profile"
                                        />
                                        
                                        {/* Overlay with name */}
                                        <div className="absolute inset-0 bg-gradient-to-t from-dark-blue/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                            <div className="absolute bottom-3 left-3 right-3">
                                                <h3 className="text-light-green font-semibold text-base">Nourdine Ouakhroun</h3>
                                                <p className="text-light-gray text-sm">Full-Stack Developer</p>
                                            </div>
                                        </div>
                </div>
                
                                    {/* Status indicator */}
                                    <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-light-green rounded-full border-2 border-dark-blue flex items-center justify-center">
                                        <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


function Bio() {
    const dispatch = useDispatch();
    const selectedComponents = useSelector(
      (state) => state.components.selectedComponents
    );
    const location = useLocation();
    const locationPath = location.pathname.includes('personal') && location.pathname.endsWith('bio');
  
    const handleClick = (data) => {
        dispatch(toggleComponent(data));
    };
  
    useEffect(() => {
        if (locationPath) {
            dispatch(resetComponents());
                handleClick({
                    img: '/assets/readmi.svg',
                    text: 'about-me.md',
                component: <IntegratedBio Lines={data.bio} length={data.bio.length + 2}/>
                });
            }
            else {
                dispatch(resetComponents());
        }
    }, [data.bio, locationPath]);           
    return (
        <div className="w-[85%] flex flex-col">
            <div className="flex justify-start items-center ">
            <img src="/assets/readmi.svg" alt="" className={responsiveClass(responsiveSizes.icons.xs, responsiveSizes.margins.icon)}/>
            <span className={responsiveClass('text-light-gray', responsiveSizes.text.sm)}>about-me.md</span>
            </div>
            <div className="flex justify-start items-center">
            <img src="/assets/img.svg" alt="" className={responsiveClass(responsiveSizes.icons.xs, responsiveSizes.margins.icon)}/>
            <span className={responsiveClass('text-light-gray', responsiveSizes.text.sm)}>{data.image.name}</span>
            </div>
        </div>
    );
  }
  
  export default Bio;