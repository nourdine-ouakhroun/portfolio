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
			<header className='md:border-r-[1px] border-r-custom-gray'>
				<div id={styles.header}>
					<p className='text-2xl text-light-gray'>{user.name}</p>
					<img
						className='md:hidden'
						src= {show ? '/src/assets/list.svg' : '/src/assets/close_list.svg'}
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