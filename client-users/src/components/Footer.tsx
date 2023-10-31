
import styles from './Footer.module.css'

function Footer(){
  return (
    <footer className = {styles["footer"]}>
      <div className = {styles["container"]}>
        <ul className = {styles["nav-items"]}>
          <li><a href="/about">About</a></li>
          <li><a target= "_blank" href="https://letterboxd.com/tada/">LetterBoxd</a></li>
          <li><a href="/posts">Posts</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
      </div>
    </footer>
  )
}

export default Footer;
