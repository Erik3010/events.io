import styles from "pages/Login/Login.module.scss";
import { Link } from "react-router-dom";
import classNames from "classnames";

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
          <form className={styles["login-form"]}>
            <div className="form-control">
              <label htmlFor="">Username</label>
              <input type="text" />
            </div>
            <div className="form-control">
              <label htmlFor="">Password</label>
              <input type="password" />
            </div>
            <Link to="/" className={styles["login-form-link"]}>
              Forgot Password?
            </Link>
            <button className="button" type="submit">
              Log In
            </button>
          </form>
        </div>
        <div className={styles["login-content-footer"]}>
          <Link to="/">Events.io</Link> made with love by{" "}
          <a target="_blank" href="https://github.com/Erik3010">
            Erik3010
          </a>
        </div>
      </div>
      <div className={styles["login-sidebar"]}></div>
    </main>
  );
}

export default Login;
