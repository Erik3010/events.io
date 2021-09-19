import styles from "components/Basic/Badge/Badge.module.scss";

import cx from "classnames";

function Badge({ children, color }) {
  return (
    <span className={cx(styles["badge"], styles[`badge--${color}`])}>
      {children}
    </span>
  );
}

export default Badge;
