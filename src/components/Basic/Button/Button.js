import styles from "components/Basic/Button/Button.module.scss";
import cx from "classnames";

function Button({ children, type, small: isSmall = true, ...props }) {
  return (
    <button
      className={cx(styles["btn"], styles[`btn-${type}`], {
        [styles["btn-small"]]: isSmall,
      })}
      type="submit"
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;
