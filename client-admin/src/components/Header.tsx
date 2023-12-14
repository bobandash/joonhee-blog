import styles from "./Header.module.css";
import { FC } from "react";
import JoonheeLogo from "../assets/joonhee-logo.svg";
import { navItems } from "../utils/constants";
import { logout, redirectHome } from "../utils/redirect";
import { SignedInContext } from "../main/context";
import { useContext } from "react";
import { Link } from "react-router-dom";

interface HeaderProps {
  active: string;
}

const Header: FC<HeaderProps> = ({ active }) => {
  const { isSignedIn, getSignedInStatus } = useContext(SignedInContext);
  if (!isSignedIn) {
    return (
      <header className={`${styles["header"]} ${styles["centered"]}`}>
        <img
          onClick={redirectHome}
          className={`${styles["logo"]}`}
          src={JoonheeLogo}
        />
      </header>
    );
  }

  return (
    <header className={`${styles["header"]} ${styles["space-between"]}`}>
      <button className={styles["mobile-nav-buttons"]}>
        <i className="white fa-solid fa-bars fa-2x"></i>
      </button>
      <img
        onClick={redirectHome}
        className={styles["logo"]}
        src={JoonheeLogo}
      />
      <ul className={styles["desktop-nav-items"]}>
        <li>
          <Link
            className={active === navItems.POSTS ? styles["active"] : ""}
            to="/"
          >
            Posts
          </Link>
        </li>
        <li>
          <Link
            className={active === navItems.COMMENTS ? styles["active"] : ""}
            to="/comments"
          >
            Comments
          </Link>
        </li>
        <li>
          <Link
            className={active === navItems.MESSAGES ? styles["active"] : ""}
            to="/messages"
          >
            Messages
          </Link>
        </li>
        <li
          className={styles["logout-container"]}
          onClick={async () => {
            await logout(getSignedInStatus);
          }}
        >
          <Link
            className={active === navItems.LOGOUT ? styles["active"] : ""}
            to="/"
          >
            Log Out
          </Link>
        </li>
      </ul>
      <button className={styles["mobile-nav-buttons"]}>
        <i className={`white fa-solid fa-user fa-2x`}></i>
      </button>
    </header>
  );
};

export default Header;
