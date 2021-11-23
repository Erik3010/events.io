import styles from "pages/Login/Login.module.scss";

import LoginHeader from "components/Login/LoginHeader/LoginHeader";
import LoginFormHeader from "components/Login/LoginFormHeader/LoginFormHeader";
import LoginForm from "components/Login/LoginForm/LoginForm";
import LoginFooter from "components/Login/LoginFooter/LoginFooter";
import LoginSidebar from "components/Login/LoginSidebar/LoginSidebar";

function Login() {
  return (
    <main className={styles["login"]}>
      <div className={styles["login__body"]}>
        <LoginHeader />
        <div className={styles["login__form"]}>
          <LoginFormHeader />
          <LoginForm />
        </div>
        <LoginFooter />
      </div>
      <LoginSidebar />
    </main>
  );
}

export default Login;
