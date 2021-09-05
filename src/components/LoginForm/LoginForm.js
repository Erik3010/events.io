import styles from "components/LoginForm/LoginForm.module.scss";

import Input from "components/Input/Input";
import Button from "components/Button/Button";
import { Link } from "react-router-dom";

function LoginForm() {
  return (
    <form className={styles["login-form"]}>
      <Input label="Username" type="text" />
      <Input label="Password" type="password" />
      <Link to="/" className={styles["login-form-link"]}>
        Forgot Password?
      </Link>
      <Button>Log in</Button>
    </form>
  );
}

export default LoginForm;
