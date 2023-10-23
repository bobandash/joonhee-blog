import styles from './LandingScreen.module.css'

function LandingScreen(){
  return (
    <div className = {styles["container"]}>
      <div className = {styles["location-time-container"]}>
        <p>Kansas City 2001</p>
        <p>California 2002 - 2019</p>
        <p>South Bend, Indiana 2019 - 2023</p>
        <p>Kosovo 2023 - 2025</p>
      </div>
    </div>
  )
}

export default LandingScreen;