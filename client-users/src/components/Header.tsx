
import styles from './Header.module.css'
import JoonheeLogo from '../assets/joonhee-logo.svg'

function Header(){
  return (
    <header className = {styles["header"]}>
      <div className = {styles["container"]}>
        <p className = {styles["name"]}>
          <a className = {styles["home-redirect"]} href = "/"><img className = {styles["joonhee-logo"]} src = {JoonheeLogo} alt = "Joonhee logo" /></a>
        </p>
        <ul className = {styles["nav-items"]}>
          <li><a href="/about">About</a></li>
          <li><a href="/posts">Posts</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
      </div>
    </header>
  )
}

export default Header;
