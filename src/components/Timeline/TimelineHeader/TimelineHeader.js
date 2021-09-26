import styles from "components/Timeline/TimelineHeader/TimelineHeader.module.scss";

function TimelineHeader() {
  return (
    <div className={styles["timeline-header"]}>
      <h1>
        <span>#</span>roadmap
      </h1>
      <p>This is a roadmap of javascript frontend</p>
    </div>
  );
}

export default TimelineHeader;
