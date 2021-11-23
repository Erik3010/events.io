import styles from "components/Basic/Button/Button.module.scss";
import cx from "classnames";

function Button({
  children,
  type,
  small: isSmall = false,
  full: isFull = false,
  ...props
}) {
  return (
    <button
      className={cx(styles["button"], styles[`button--${type}`], {
        [styles["button--small"]]: isSmall,
        [styles["button--full"]]: isFull,
      })}
      type="submit"
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;
