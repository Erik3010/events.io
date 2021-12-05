import styles from "components/Registration/RegistrationHeader/RegistrationHeader.module.scss";

function RegistrationHeader() {
  return (
    <div className={styles["header"]}>
      <h1 className={styles["header__title"]}>Vue Conference</h1>
      <div className={styles["header__body"]}>
        <div className={styles["header__label"]}>
          Order Date:{" "}
          <span className={styles["header__label--bold"]}>
            {new Intl.DateTimeFormat("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            }).format(new Date())}
          </span>
        </div>
        <div className={styles["header__line"]}>|</div>
        <div className={styles["header__label"]}>
          Location:{" "}
          <span className={styles["header__label--bold"]}>
            Online Meeting (Zoom)
          </span>
        </div>
      </div>
    </div>
  );
}

export default RegistrationHeader;
