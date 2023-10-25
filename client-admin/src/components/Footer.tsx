import styles from './Footer.module.css';
import Joonhee from '../assets/joon_transparent_background.png'
import {FC} from 'react'

interface FooterProps {
  isAbsolute: boolean
}

const Footer : FC<FooterProps> = ({isAbsolute}) => {
  if(isAbsolute){
    return (
      <footer className = {styles.footer}>
        <p>A Gift from Joonhee's Friends</p>
        <img className = {styles["joonhee"]} src = {Joonhee} />
      </footer>
    )
  }
  return (
    <footer className = {`${styles.footer} ${styles["document-flow"]}`}>
      <p>A Gift from Joonhee's Friends</p>
    </footer>
  )

}

export default Footer;