import { useState } from 'react'
import Menu from './menu/menu.jsx'
import styles from './header.module.css'


const user = {
	name: 'nourdine-ouakhroun',
}

function HeaderBar(){
	const [isOpen, setisOpen] = useState(true)
	function clicked(){
		setisOpen(!isOpen)
	}
	return(
		<>
			<header>
				<div id={styles.header}>
					<p className={styles.p}>{user.name}</p>
					<img
						src= {isOpen ? 'src/assets/list.svg' : 'src/assets/close_list.svg'}
						onClick={() => clicked()} alt='menu'
						style={{cursor: 'pointer'}}
						/>
				</div>
			</header>
			<Menu isOpen={isOpen} onLinkClick={() => setisOpen(true)} />
		</>
	)
}


export default HeaderBar