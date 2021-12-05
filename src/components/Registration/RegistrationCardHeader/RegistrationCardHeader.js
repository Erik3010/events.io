import styles from "components/Registration/RegistrationCardHeader/RegistrationCardHeader.module.scss";

function RegistrationCardHeader({ icon, title, children }) {
  return (
    <header className={styles["header"]}>
      <div className={styles["header__icon"]}>{icon}</div>
      <div className={styles["header__group"]}>
        <h4 className={styles["header__title"]}>{title}</h4>
        <p className={styles["header__subtitle"]}>{children}</p>
      </div>
    </header>
  );
}

export default RegistrationCardHeader;
