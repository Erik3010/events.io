import styles from "components/Login/LoginForm/LoginForm.module.scss";

import Input from "components/Basic/Input/Input";
import Button from "components/Basic/Button/Button";
import { Link } from "react-router-dom";

function LoginForm() {
  const loginHandler = (e) => {
    e.preventDefault();
  };

  return (
    <form className={styles["login-form"]} onSubmit={loginHandler}>
      <Input label="Username" type="text" />
      <Input label="Password" type="password" />
      <Link to="/" className={styles["login-form-link"]}>
        Forgot Password?
      </Link>
      <Button type="primary">Log in</Button>
    </form>
  );
}

export default LoginForm;
