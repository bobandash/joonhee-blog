import { Link } from "react-router-dom";
import styles from "./Footer.module.css";

function Footer() {
  return (
    <footer className={styles["footer"]}>
      <div className={styles["container"]}>
        <ul className={styles["nav-items"]}>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <a target="_blank" href="https://letterboxd.com/tada/">
              LetterBoxd
            </a>
          </li>
          <li>
            <Link to="/posts">Posts</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
