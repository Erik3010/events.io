import styles from "components/Basic/Avatar/Avatar.module.scss";

import cx from "classnames";

function Avatar({ children, color }) {
  return (
    <div className={cx([styles["avatar"], styles[`avatar-${color}`]])}>
      {children}
    </div>
  );
}

export default Avatar;
