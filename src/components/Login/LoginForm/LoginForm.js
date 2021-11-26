import styles from "components/Login/LoginForm/LoginForm.module.scss";

import Input from "components/Basic/Input/Input";
import Button from "components/Basic/Button/Button";
import { Link } from "react-router-dom";

function LoginForm() {
  const loginHandler = (e) => {
    e.preventDefault();
  };

  return (
    <form className={styles["form"]} onSubmit={loginHandler}>
      <div className={styles["form__input-group"]}>
        <Input label="Username" type="text" />
        <Input label="Password" type="password" />
      </div>
      <Link to="/" className={styles["form__link"]}>
        Forgot Password?
      </Link>
      <div className={styles["form__cta"]}>
        <Button type="primary" full>
          Log in
        </Button>
      </div>
    </form>
  );
}

export default LoginForm;
