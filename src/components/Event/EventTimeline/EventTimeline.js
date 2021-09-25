import styles from "components/Event/EventTimeline/EventTimeline.module.scss";

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
          <div className={styles["channel-card"]}>
            <div className={styles["channel-card-title"]}>#roadmap</div>
            <div className={styles["channel-card-subtitle"]}>
              This is a roadmap of javascript frontend
            </div>
          </div>
          <div className={styles["channel-card"]}>
            <div className={styles["channel-card-title"]}>#roadmap</div>
            <div className={styles["channel-card-subtitle"]}>
              This is a roadmap of javascript frontend
            </div>
          </div>
        </div>
      </div>
      <div className={styles["room-timeline"]}></div>
    </div>
  );
}

export default EventTimeline;
