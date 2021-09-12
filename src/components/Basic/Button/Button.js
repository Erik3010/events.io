import styles from "components/Basic/Button/Button.module.scss";
import classNames from "classnames";

function Button({ children, type, ...props }) {
  return (
    <button
      className={classNames(styles["btn"], styles[`btn-${type}`])}
      type="submit"
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;
