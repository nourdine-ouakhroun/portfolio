import { useEffect, useRef } from 'react';
import './hello.css';
const KeyBoard = ()=>{
	return(
		<div className='flex justify-center items-center rounded-xl bg-[rgba(0,0,0,0.15)] w-full h-[12rem]'>
			<div className='w-[85%] h-[85%] flex flex-col gap-4'>
				<div className='flex flex-col'>
					<span className='text-xl text-white'>// arrows to play</span>
					<span className='text-xl text-white'>// use Keyboard</span>
				</div>
				<div className='h-full w-full flex items-center flex-col justify-between'>
					<div className='border-[2px] border-custom-gray w-[70px] h-[40px] bg-black rounded-lg flex justify-center items-center'>
						<img className="rotate-270" src="/src/assets/playIcon.svg" alt=""/>
					</div>
					<div className='flex gap-4'>
						<div className='border-[2px] border-custom-gray w-[70px] h-[40px] bg-black rounded-lg flex justify-center items-center'>
							<img className="rotate-180" src="/src/assets/playIcon.svg" alt=""/>
						</div>
						<div className='border-[2px] border-custom-gray w-[70px] h-[40px] bg-black rounded-lg flex justify-center items-center'>
							<img className="rotate-90" src="/src/assets/playIcon.svg" alt=""/>
						</div>
						<div className='border-[2px] border-custom-gray w-[70px] h-[40px] bg-black rounded-lg flex justify-center items-center'>
							<img src="/src/assets/playIcon.svg" alt=""/>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

const Food = ()=>{
	return (
		<div className='flex justify-center items-center w-[30px] h-[30px] rounded-full bg-[rgba(67,217,173,0.15)]'>
			<div className='flex justify-center items-center w-[70%] h-[70%] rounded-full bg-[rgba(67,217,173,0.40)]'>
				<div className='w-[60%] h-[60%] rounded-full bg-light-green'>
				</div>
			</div>
		</div>
	)
}

const FoodContainer = () => {
	return(
		<div className='flex justify-center items-center w-full h-[12rem]'>
			<div className='w-[85%] h-[85%] flex flex-col gap-4'>
				<div className='flex flex-col'>
					<span className='text-xl text-white'>// food left</span>
				</div>
				<div className='w-full flex flex-wrap gap-4'>
				{
					Array.from(({length: 10}), (_, index) =>{
						return (<Food key={index}/>)
					})
				}
				</div>
			</div>
		</div>
	)
}

const Skip = () => {
	return (
		<div className='w-full h-[30%] flex justify-end items-end'>
			<div className='flex justify-center items-center w-[80px] h-[50px] border-[1px] border-white rounded-xl'>
				<span className=''>Skip</span>
			</div>
		</div>
	)
}

const GameContainer = () => {
    return (
		<div className='hidden 2xl:flex h-full flex-1 items-center'>
			<div className='bg-gradient-to-br from-dark-green  border-t-[1px] border-t-light-gray rounded-xl w-[44rem] h-[42rem] flex flex-col items-center justify-center shadow-black shadow-sm'>
				<div className='flex w-[90%] h-[90%]'>
					<div className='flex flex-1 w-full h-full bg-custom-blue rounded-xl'></div>
					<div className='flex flex-1 w-full h-full justify-end'>
						<div className='w-[85%] h-full flex flex-col gap-3'>
							<KeyBoard/>
							<FoodContainer/>
							<Skip/>
						</div>
					</div>
				</div>
			</div>
		</div>
    );
};


function Hello() {
	return (
		<div className='w-[90%] h-full flex justify-center items-center gap-28 relative'>
			<div className='flex flex-1 justify-center 2xl:justify-end items-center 2xl:items-end'>
				<div className='flex flex-col gap-20'>
					<div className="flex flex-col gap-3">
						<p className='md:text-2xl'>Hello, World! I am</p>
						<p className='text-6xl md:text-8xl lg:text-7xl' >Nourdine Ouakhroun</p>
						<p className='text-1xl md:text-3xl lg:text-5xl text-light-green 2xl:text-purple'> {'>'} Full Stack Developer</p>
					</div>
					<p className='gap-3 flex flex-col'>
						<span className='md:text-2xl text-light-gray'>
							// find my profile on GitHub:
						</span>
						<span>
							<span className='md:text-2xl text-purple'>const </span>
							<span className='md:text-2xl text-light-green'>github</span>
							<span className='md:text-2xl'> = </span>
							<a className='md:text-2xl text-dark-orange' href="https://github.com/nourdine-ouakhroun" target="_blank" rel="noreferrer">
								<span>
									"https://github.com/nourdine-ouakhroun" 
								</span>
							</a>
						</span>
					</p>
				</div>
			</div>
			<GameContainer />
		</div>
	);
}

export default Hello;