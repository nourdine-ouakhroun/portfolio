import { useEffect, useRef } from 'react';
import './hello.css';

// function Code({referenc}){
// 	return(
// 		<div className='w-[45rem] h-[15rem] bg-custom-blue rounded-xl flex-shrink-0 opacity-50' ref={referenc}>
			
// 		</div>
// 	)
// }

const GameContainer = ({length}) => {
	// const references = Array.from({length:length}).map(()=> useRef(null))
	// const baseRef = useRef(null)
	// useEffect(()=>{
	// 	references.forEach((element, index) =>{
	// 		console.log(element.current);
	// 	})
	// 	console.log(baseRef.current);
	// }, [references])
    return (
		<>
			{/* <div className='flex flex-col flex-1 h-full overflow-y-scroll scrollbar-hidden gap-12'> */}
			<div className='flex h-full flex-1 items-center'>
				<div className='bg-gradient-to-br from-dark-green  border-t-[1px] border-t-light-gray rounded-xl w-[44rem] h-[42rem] flex flex-col items-center justify-center shadow-black shadow-sm'>
					<div className='flex w-[90%] h-[90%]'>
						<div className='flex flex-1 w-full h-full bg-custom-blue rounded-xl'></div>
						<div className='flex flex-1 w-full h-full justify-end'>
							<div className='w-[85%] h-full flex flex-col'>
								<div className='flex justify-center items-center rounded-xl bg-[rgba(0,0,0,0.15)] w-full h-[12rem]'>
									<div className='w-[85%] h-[85%] flex flex-col gap-4'>
										<div className='flex flex-col'>
											<span className='text-xl text-white'>// arrows to play</span>
											<span className='text-xl text-white'>// use Keyboard</span>
										</div>
										<div className='h-full w-full flex items-center flex-col justify-between'>
											<div className='border-[2px] border-custom-gray w-[70px] h-[40px] bg-black rounded-lg flex justify-center items-center'>
								                <img className="rotate-270" src="src/assets/playIcon.svg" alt=""/>
											</div>
											<div className='flex gap-2'>
												<div className='border-[2px] border-custom-gray w-[70px] h-[40px] bg-black rounded-lg flex justify-center items-center'>
								                    <img className="rotate-180" src="src/assets/playIcon.svg" alt=""/>
												</div>
												<div className='border-[2px] border-custom-gray w-[70px] h-[40px] bg-black rounded-lg flex justify-center items-center'>
								                    <img className="rotate-90" src="src/assets/playIcon.svg" alt=""/>

												</div>
												<div className='border-[2px] border-custom-gray w-[70px] h-[40px] bg-black rounded-lg flex justify-center items-center'>
								                    <img src="src/assets/playIcon.svg" alt=""/>

												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				{/* <div className='w-[45rem] h-[15rem] bg-custom-blue rounded-xl flex-shrink-0 opacity-50 absolute top-[36%]' ref={baseRef}></div> */}
				{/* {Array.from({length:length}, (_, index)=>{
					return <Code key={index} referenc={references[index]}/>
				})} */}
			</div>
		</>
    );
};


function Hello() {
	return (
		<div className='w-full h-full flex justify-center items-center gap-28 relative'>
			<div className='flex flex-1 justify-end items-end'>
				<div className='flex flex-col gap-20'>
					<div className="flex flex-col gap-3">
						<p>Hello, World! I am</p>
						<p className='text-7xl' >Nourdine Ouakhroun</p>
						<p className='text-5xl text-purple'> {'>'} Full Stack Developer</p>
					</div>
					<p className='gap-3 flex flex-col'>
						<span className='text-light-gray'>
							// find my profile on GitHub:
						</span>
						<span>
							<span className='text-purple'>const </span>
							<span className='text-light-green'>github</span>
							<span> = </span>
							<a href="https://github.com/nourdine-ouakhroun" target="_blank" rel="noreferrer">
								<span>
									"https://github.com/nourdine-ouakhroun" 
								</span>
							</a>
						</span>
					</p>
				</div>
			</div>
			<GameContainer length={8} />
		</div>
	);
}

export default Hello;