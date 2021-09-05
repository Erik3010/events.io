import styles from "components/Basic/Button/Button.module.scss";
import classNames from "classnames";

function Button({ children }) {
  return (
    <button
      className={classNames(styles["btn"], styles["btn-primary"])}
      type="submit"
    >
      {children}
    </button>
  );
}

export default Button;
