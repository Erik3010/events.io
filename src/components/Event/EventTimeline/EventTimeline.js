import styles from "components/Event/EventTimeline/EventTimeline.module.scss";

import cx from "classnames";

function EventTimeline() {
  return (
    <div className={styles["event-timeline"]}>
      <div className={styles["channel-sidebar"]}>
        <div className={styles["channel-list"]}>
          <div className={styles["channel-card"]}>
            <div className={styles["channel-card-title"]}>#roadmap</div>
            <div className={styles["channel-card-subtitle"]}>
              This is a roadmap of javascript frontend
            </div>
          </div>
        </div>
      </div>
      <div className={styles["timeline-container"]}>
        <div className={styles["timeline-header"]}>
          <h1>
            <span>#</span>roadmap
          </h1>
          <p>This is a roadmap of javascript frontend</p>
        </div>
      </div>
    </div>
  );
}

export default EventTimeline;
