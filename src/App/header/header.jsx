import { useState } from 'react'
import Menu from './menu/menu.jsx'
import styles from './header.module.css'
import { useEffect } from 'react'

const user = {
	name: 'nourdine-ouakhroun',
}

function HeaderBar(){
	const [show, setshow] = useState(true)
	function clicked(){
		if (window.innerWidth < 768)
			setshow(!show)
	}

	function handleResize() {
		if (window.innerWidth >= 768)
			setshow(false)
		else
			setshow(true)
	}

	useEffect(() => {
		window.addEventListener('resize', handleResize);
		
		handleResize();
	
		return () => {
		  window.removeEventListener('resize', handleResize);
		};
	}, []);

	return(
		<>
			<header className='md:border-r-[1px] border-r-custom-gray min-w-[15rem] sm:min-w-[16rem] bg-custom-blue/80 backdrop-blur-sm md:bg-transparent md:backdrop-blur-none'>
				<div id={styles.header} className="px-3 sm:px-4">
					<p className='text-xs sm:text-sm md:text-base lg:text-lg xl:text-[1rem] 2xl:text-[1.1rem] text-light-gray truncate'>{user.name}</p>
					<img
						className='md:hidden w-[16px] h-[16px] sm:w-[18px] sm:h-[18px] hover:opacity-80 transition-opacity'
						src= {show ? '/assets/list.svg' : '/assets/close_list.svg'}
						onClick={() => clicked()} alt='menu'
						style={{cursor: 'pointer'}}
						/>
				</div>
			</header>
			<Menu isOpen={show} onLinkClick={() => clicked()} />
		</>
	)
}


export default HeaderBar