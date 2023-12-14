import { useState, FC } from "react";
import styles from "./SignInForm.module.css";
import { Redirect404 } from "../../utils/redirect";

// getSignedInStatus changes the App.tsx signInStatus state
interface FormProps {
  getSignedInStatus: () => void;
}

interface dataErrors {
  [key: string]: {
    msg?: string;
  };
}

const SignInForm: FC<FormProps> = ({ getSignedInStatus }) => {
  const defaultFormErrors = {
    email: "",
    password: "",
  };

  const [emailInput, setEmailInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [formErrors, setFormErrors] = useState(defaultFormErrors);

  function togglePasswordVisible() {
    setPasswordVisible(!passwordVisible);
  }

  function changeEmailInput(e: React.FormEvent<HTMLInputElement>) {
    setEmptyError("email");
    setEmailInput(e.currentTarget.value);
  }

  function changePasswordInput(e: React.FormEvent<HTMLInputElement>) {
    setEmptyError("password");
    setPasswordInput(e.currentTarget.value);
  }

  function setErrors(data: dataErrors) {
    for (const key in data) {
      setFormErrors((prevFormErrors) => ({
        ...prevFormErrors,
        [key]: data[key].msg,
      }));
    }
  }

  function setEmptyError(key: string) {
    setFormErrors((prevFormErrors) => ({ ...prevFormErrors, [key]: "" }));
  }

  async function handlePost(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    try {
      const response = await fetch(
        import.meta.env.VITE_BACKEND_PORT + "/admin/login",
        {
          method: "POST",
          mode: "cors",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({ email: emailInput, password: passwordInput }),
        }
      );
      const data = await response.json();
      // TO-DO: research more about storing in memory and HTTP only cookies
      if (response.status === 400) {
        console.log(data);
        setErrors(data);
      } else if (response.ok) {
        localStorage.setItem("jwt", data.token);
        getSignedInStatus();
      }
    } catch {
      Redirect404();
    }
  }

  return (
    <div className={styles["form-container"]}>
      <form
        className={styles["sign-in-form"]}
        method="POST"
        action="/login"
        onSubmit={(e) => handlePost(e)}
        noValidate
      >
        <label htmlFor="email">Email:</label>
        <input
          type="text"
          id="email"
          name="email"
          autoComplete="off"
          onChange={(e) => changeEmailInput(e)}
          onFocus={(e) => changeEmailInput(e)}
          value={emailInput}
          className={formErrors.email && "error-input"}
          required
        />
        {formErrors.email !== "" && (
          <span className="error">{formErrors.email}</span>
        )}
        <label htmlFor="password">Password:</label>
        <div className={styles["password-button-container"]}>
          {!passwordVisible ? (
            <>
              <input
                type="password"
                id="password"
                name="password"
                autoComplete="off"
                onChange={(e) => changePasswordInput(e)}
                onFocus={(e) => changePasswordInput(e)}
                value={passwordInput}
                className={formErrors.password && "error-input"}
                required
              />
              <button type="button" onClick={togglePasswordVisible}>
                <i className="fa-solid fa-eye"></i>
              </button>
            </>
          ) : (
            <>
              <input
                type="text"
                id="password"
                name="password"
                autoComplete="off"
                onChange={(e) => changePasswordInput(e)}
                value={passwordInput}
                required
              />
              <button type="button" onClick={togglePasswordVisible}>
                <i className="fa-solid fa-eye-slash"></i>
              </button>
            </>
          )}
        </div>
        {formErrors.password !== "" && (
          <span className="error">{formErrors.password}</span>
        )}
        <button type="submit">Log In</button>
      </form>
    </div>
  );
};

export default SignInForm;
