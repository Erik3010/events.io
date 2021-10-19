import styles from "components/Registration/RegistrationContentHeader/RegistrationContentHeader.module.scss";

function RegistrationContentHeader({ icon, title, tagline }) {
  return (
    <div className={styles["registration-content-header"]}>
      <div className={styles["registration-content-header-icon"]}>{icon}</div>
      <div className={styles["registration-content-header-group"]}>
        <h4 className={styles["registration-content-header-title"]}>{title}</h4>
        <p className={styles["registration-content-header-subtitle"]}>
          {tagline}
        </p>
      </div>
    </div>
  );
}

export default RegistrationContentHeader;
