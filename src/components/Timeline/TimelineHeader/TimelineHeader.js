import styles from "components/Timeline/TimelineHeader/TimelineHeader.module.scss";

function TimelineHeader() {
  return (
    <div className={styles["header"]}>
      <h1 className={styles["header__title"]}>
        <span className={styles["header__hashtag"]}>#</span>roadmap
      </h1>
      <p className={styles["header__subtitle"]}>
        This is a roadmap of javascript frontend
      </p>
    </div>
  );
}

export default TimelineHeader;
