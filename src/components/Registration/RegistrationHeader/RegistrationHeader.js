import styles from "components/Registration/RegistrationHeader/RegistrationHeader.module.scss";

function RegistrationHeader() {
  return (
    <div className={styles["registration-header-title"]}>
      <h1>Vue Conference</h1>
      <div className={styles["registration-header-subtitle"]}>
        <div className={styles["registration-sub-content"]}>
          Order Date:{" "}
          <span>
            {new Intl.DateTimeFormat("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            }).format(new Date())}
          </span>
        </div>
        <div className={styles["separator"]}>|</div>
        <div className={styles["registration-sub-content"]}>
          Location: <span>Online Meeting (Zoom)</span>
        </div>
      </div>
    </div>
  );
}

export default RegistrationHeader;
