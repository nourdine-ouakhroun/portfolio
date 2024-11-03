import styles from './menu.module.css'
import { Link } from "react-router-dom";
function Menu({isOpen, onLinkClick}){
    return(
        <nav style={{display: isOpen ? 'none' : 'flex'}}>
            <ul>
                <Link className={styles.routerlink} to='/' onClick={onLinkClick}>
                    <span>_home</span>
                </Link>
                <Link className={styles.routerlink} to='/about-me' onClick={onLinkClick}>
                    <span>_about-me</span>
                </Link>
                <Link className={styles.routerlink} to='/projects' onClick={onLinkClick}>
                    <span>_projects</span>
                </Link>
                <Link className={styles.routerlink} to='/contact-me' onClick={onLinkClick}>
                    <span>_contact-me</span>
                </Link>
            </ul>
        </nav>
    )
}

export default Menu