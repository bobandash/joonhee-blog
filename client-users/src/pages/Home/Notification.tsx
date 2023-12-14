import ErrorPage from "../Error/ErrorPage";
import styles from "./Notification.module.css";
import { useState } from "react";

function Notification() {
  const [hasError, setHasError] = useState(false);
  const [subscribed, setSubscribed] = useState(false);
  const [hasInvalidEmail, setHasInvalidEmail] = useState(false);
  const [email, setEmail] = useState("");

  async function registerEmail() {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_BACKEND_PORT}/mailing/subscribe`,
        {
          method: "POST",
          mode: "cors",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            email: email,
          }),
        }
      );
      if (!response.ok) {
        setHasInvalidEmail(true);
      } else {
        setSubscribed(true);
      }
    } catch {
      setHasError(true);
    }
  }

  if (hasError) {
    <ErrorPage errorStatus={500} />;
  }

  return (
    <section className={styles["section-background"]}>
      <form className={styles["email-newsletter"]} noValidate>
        <label htmlFor="email">Join My Journey</label>
        <div className={styles["form-elem-container"]}>
          <div className={styles["input-and-button"]}>
            <input
              onChange={(e) => {
                setSubscribed(false);
                setHasInvalidEmail(false);
                setEmail(e.currentTarget.value);
              }}
              placeholder="Enter your email"
              type="email"
              name="email"
              id="email"
              autoComplete="off"
            />
            <button
              onClick={async (e) => {
                e.preventDefault();
                await registerEmail();
              }}
            >
              Follow
            </button>
          </div>
          {subscribed && (
            <span className={`${styles.message} success`}>
              You have successfully subscribed.
            </span>
          )}
          {hasInvalidEmail && (
            <span className={`${styles.message} error`}>
              Your email is invalid. Please try again.
            </span>
          )}
        </div>
      </form>
    </section>
  );
}

export default Notification;
