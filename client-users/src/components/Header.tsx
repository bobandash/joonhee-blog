
import styles from './Header.module.css'

function Header(){
  return (
    <header className = {styles["header"]}>
      <div className = {styles["container"]}>
        <p className = {styles["name"]}>
          <a href = "/">Joonhee Bock</a>
        </p>
        <ul className = {styles["nav-items"]}>
          <li><a href="/about">About</a></li>
          <li><a href="">Posts</a></li>
        </ul>
      </div>
    </header>
  )
}

export default Header;
