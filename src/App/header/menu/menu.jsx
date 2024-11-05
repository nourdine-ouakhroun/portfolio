import styles from './menu.module.css'
import { Link } from "react-router-dom";
function Menu({isOpen, onLinkClick}){
    return(
        <nav className="flex-col md:flex-row " style={{display: isOpen ? 'none' : 'flex'}}>
            <ul className='flex flex-col md:flex-row'>
                <Link className={styles.routerlink} to='/' onClick={onLinkClick}>
                    <span>_home</span>
                </Link>
                <Link className={styles.routerlink} to='/about-me' onClick={onLinkClick}>
                    <span>_about-me</span>
                </Link>
                <Link className={styles.routerlink} to='/projects' onClick={onLinkClick}>
                    <span>_projects</span>
                </Link>
            </ul>
            <Link className={styles.routerlink + " md:w-[13rem] md:border-r-[0] md:border-l-[1px] border-l-custom-gray"} to='/contact-me' onClick={onLinkClick}>
                <span>_contact-me</span>
            </Link>
        </nav>
    )
}

export default Menu