import styles from "components/Login/LoginHeader/LoginHeader.module.scss";

function LoginHeader() {
  return (
    <div className={styles["login-content-header"]}>
      <h2>
        Events<span className="text-primary">.io</span>
      </h2>
    </div>
  );
}

export default LoginHeader;
