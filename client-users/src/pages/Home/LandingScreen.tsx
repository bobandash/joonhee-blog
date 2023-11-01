import styles from './LandingScreen.module.css'
import kosovoFlag from '../../assets/kosovo flag.jpg'
import joonhee from '../../assets/joon_transparent_background.png'

function LandingScreen(){
  return (
    <div className = {styles["container"]}>
      <div className = {styles["name-container"]}>
        <h1 className = {styles["name"]}><span className = {styles["first-name"]}>Joonhee</span> <span className = {styles["last-name"]}>Bock</span></h1>
      </div>
      <img className = {styles["kosovo-flag"]} src = {kosovoFlag} alt = "kosovo flag" />
      <img className = {styles["joonhee"]} src = {joonhee} alt = "joonhee" />
    </div>
  )
}

export default LandingScreen;