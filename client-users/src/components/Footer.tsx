
import styles from './Footer.module.css'

function Footer(){
  return (
    <footer className = {styles["footer"]}>
      <div className = {styles["container"]}>
        <ul className = {styles["nav-items"]}>
          <li><a href="">About</a></li>
          <li><a target= "_blank" href="">LetterBoxd</a></li>
          <li><a href="">Posts</a></li>
          <li><a href="">Contact</a></li>
        </ul>
      </div>
    </footer>
  )
}

export default Footer;
