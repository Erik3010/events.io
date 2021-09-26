import styles from "components/Timeline/TimelineTable/TimelineTable.module.scss";

import cx from "classnames";

import SessionItem from "components/Session/SessionItem/SessionItem";

function TimelineTable() {
  return (
    <div className={styles["timeline-table"]}>
      <div className={styles["timeline-header"]}>
        <div
          className={cx([
            styles["timeline-cell"],
            styles["timeline-room-header"],
          ])}
        ></div>
        <div className={styles["timeline-cell"]}>09:00</div>
        <div className={styles["timeline-cell"]}>11:00</div>
        <div className={styles["timeline-cell"]}>13:00</div>
        <div className={styles["timeline-cell"]}>15:00</div>
      </div>
      <div className={styles["timeline-body"]}>
        <div className={styles["timeline-row"]}>
          <div
            className={cx([
              styles["timeline-cell"],
              styles["timeline-room-title"],
            ])}
          >
            Main Hall
          </div>
          <div className={styles["timeline-cell"]}>
            <div className={styles["session-list"]}>
              <SessionItem>Vue workshop</SessionItem>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TimelineTable;
