import styles from "components/Login/LoginFooter/LoginFooter.module.scss";

import { Link } from "react-router-dom";

function LoginFooter() {
  return (
    <div className={styles["login-content-footer"]}>
      <Link to="/">Events.io</Link> made with love by{" "}
      <a target="_blank" rel="noreferrer" href="https://github.com/Erik3010">
        Erik3010
      </a>
    </div>
  );
}

export default LoginFooter;
