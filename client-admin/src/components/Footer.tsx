import styles from './Footer.module.css';
import Joonhee from '../assets/joon_transparent_background.png'

const Footer = () => {
  return (
    <footer className = {styles.footer}>
      <p>A Gift from Joonhee's Friends</p>
      <img className = {styles["joonhee"]} src = {Joonhee} />
    </footer>
  )
}

export default Footer;