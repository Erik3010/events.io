import styles from "components/Login/LoginFormHeader/LoginFormHeader.module.scss";

function LoginFormHeader() {
  return (
    <div className={styles["login-form-header"]}>
      <p>Getting Started Now</p>
      <h2>Login to you account</h2>
    </div>
  );
}

export default LoginFormHeader;
