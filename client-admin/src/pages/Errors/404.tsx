import styles from "./Error.module.css";
import Header from "../../components/Header";
import { navItems } from "../../utils/constants";
import { useNavigate } from "react-router-dom";

const ErrorPage = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className={styles["whole-screen"]}>
        <Header active={navItems.POSTS} />
        <div className={styles["error-wrapper"]}>
          <h1>D'oh! Something went wrong!</h1>
          <button
            onClick={() => {
              navigate("/");
            }}
          >
            <i className="fa-solid fa-house"></i> Go Back Home
          </button>
        </div>
      </div>
    </>
  );
};

export default ErrorPage;
