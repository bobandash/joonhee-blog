import styles from './Header.module.css'
import {FC} from 'react'
import JoonheeLogo from '../assets/joonhee-logo.svg'
import { navItems } from '../utils/constants'

interface HeaderProps {
  isSignedIn: boolean
  active: string
}

const Header: FC<HeaderProps> = ({ isSignedIn, active }) => {
  if (!isSignedIn) {
    return (
      <header className={`${styles["header"]} ${styles["centered"]}`}>
        <img className = {`${styles["logo"]}`} src= {JoonheeLogo} />
      </header>
    );
  }

  return (
    <header className={`${styles["header"]} ${styles["space-between"]}`}>
      <button className = {styles["mobile-nav-buttons"]}><i className = "white fa-solid fa-bars fa-2x"></i></button>
      <img className = {styles["logo"]} src= {JoonheeLogo} />
      <ul className = {styles["desktop-nav-items"]}>
        <li><a className = {(active === navItems.POSTS) ? styles["active"] : ''} href="">Posts</a></li>
        <li><a className = {(active === navItems.COMMENTS) ? styles["active"] : ''} href="">Comments</a></li>
        <li><a className = {(active === navItems.LOGOUT) ? styles["active"] : ''} href="">Log Out</a></li>
      </ul>
      <button className = {styles["mobile-nav-buttons"]}><i className = {`white fa-solid fa-user fa-2x`}></i></button>
    </header>
  );
};

export default Header;