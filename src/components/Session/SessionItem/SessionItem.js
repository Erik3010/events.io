import styles from "components/Session/SessionItem/SessionItem.module.scss";

import cx from "classnames";

function SessionItem({ children }) {
  return (
    <div className={cx([styles["session-item"], styles["talk"]])}>
      {children}
    </div>
  );
}

export default SessionItem;
