import styles from "pages/Login/Login.module.scss";
import { Link } from "react-router-dom";

import LoginForm from "components/LoginForm/LoginForm";

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
          <div className={styles["login-form-header"]}>
            <p>Getting Started Now</p>
            <h2>Login to you account</h2>
          </div>
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
