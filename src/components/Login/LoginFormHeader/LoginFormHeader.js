import styles from "components/Login/LoginFormHeader/LoginFormHeader.module.scss";

function LoginFormHeader() {
  return (
    <header className={styles["login-form-header"]}>
      <p className={styles["login-form-header__subtitle"]}>
        Getting Started Now
      </p>
      <h2>Login to you account</h2>
    </header>
  );
}

export default LoginFormHeader;
