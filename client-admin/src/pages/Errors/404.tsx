import { redirectHome } from "../../utils/redirect"
import styles from './Error.module.css'
import Header from "../../components/Header"
import { navItems } from "../../utils/constants"

const ErrorPage = () => {
  return (
    <>
      <div className= {styles["whole-screen"]}>
        <Header isSignedIn = {false} active = {navItems.POSTS}/>
        <div className = {styles["error-wrapper"]}>
          <h1>D'oh! Something went wrong!</h1>
          <button onClick = {redirectHome}>
            <i className = "fa-solid fa-house"></i> Go Back Home
          </button>
        </div>
      </div>
    </>
  )
}

export default ErrorPage