import styles from "components/Basic/Button/Button.module.scss";
import classNames from "classnames";

function Button({ children, type }) {
  return (
    <button
      className={classNames(styles["btn"], styles[`btn-${type}`])}
      type="submit"
    >
      {children}
    </button>
  );
}

export default Button;
