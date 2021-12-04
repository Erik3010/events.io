import styles from "components/Timeline/TimelineTable/TimelineTable.module.scss";

import cx from "classnames";

import SessionItem from "components/Session/SessionItem/SessionItem";

function TimelineTable() {
  return (
    <div className={styles["table"]}>
      <div className={styles["table__head"]}>
        <div
          className={cx([
            styles["table__head-cell"],
            styles["table__cell--fixed-width"],
          ])}
        >
          Room
        </div>
        <div className={styles["table__head-cell"]}>09:00</div>
        <div className={styles["table__head-cell"]}>11:00</div>
        <div className={styles["table__head-cell"]}>13:00</div>
        <div className={styles["table__head-cell"]}>15:00</div>
      </div>
      <div className={styles["table__body"]}>
        <div className={styles["table__row"]}>
          <div
            className={cx([
              styles["table__cell"],
              styles["table__cell--fixed-width"],
              styles["table__cell--label"],
            ])}
          >
            Main Hall
          </div>
          <div className={styles["table__cell"]}>
            <div className={styles["table__cell--content"]}>
              <SessionItem>Vue workshop</SessionItem>
            </div>
          </div>
        </div>
        <div className={styles["table__row"]}>
          <div
            className={cx([
              styles["table__cell"],
              styles["table__cell--fixed-width"],
              styles["table__cell--label"],
            ])}
          >
            Hall
          </div>
          <div className={styles["table__cell"]}>
            <div className={styles["table__cell--content"]}>
              <SessionItem>Vue workshop</SessionItem>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TimelineTable;
