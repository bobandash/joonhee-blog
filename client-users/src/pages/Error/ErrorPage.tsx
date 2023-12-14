import { FC } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import styles from "./ErrorPage.module.css";
import { useNavigate } from "react-router-dom";

interface ErrorPageProps {
  errorStatus?: number;
}

const ErrorPage: FC<ErrorPageProps> = ({ errorStatus = 404 }) => {
  const navigate = useNavigate();
  return (
    <>
      <Header />
      <div className={styles["error-container"]}>
        {errorStatus === 404 ? (
          <h1>Page does not exist</h1>
        ) : (
          <h1>Internal Server Error</h1>
        )}
        <button
          onClick={() => {
            navigate("/");
          }}
        >
          Go Back Home <i className="fa-solid fa-house"></i>
        </button>
      </div>
      <Footer />
    </>
  );
};

export default ErrorPage;
