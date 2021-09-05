import styles from "pages/Login/Login.module.scss";
import { Link } from "react-router-dom";

import LoginFormHeader from "components/Login/LoginFormHeader/LoginFormHeader";
import LoginForm from "components/Login/LoginForm/LoginForm";

function Login() {
  return (
    <main className={styles["login-container"]}>
      <div className={styles["login-content"]}>
        <div className={styles["login-content-header"]}>
          <h2>
            Events<span className="text-primary">.io</span>
          </h2>
        </div>
        <div className={styles["login-content-body"]}>
          <LoginFormHeader />
          <LoginForm />
        </div>
        <div className={styles["login-content-footer"]}>
          <Link to="/">Events.io</Link> made with love by{" "}
          <a
            target="_blank"
            rel="noreferrer"
            href="https://github.com/Erik3010"
          >
            Erik3010
          </a>
        </div>
      </div>
      <div className={styles["login-sidebar"]}></div>
    </main>
  );
}

export default Login;
