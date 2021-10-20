import styles from "components/Registration/RegistrationTicket/RegistrationTicket.module.scss";

function RegistrationTicket() {
  return (
    <div className={styles["registration-ticket-container"]}>
      <div className={styles["registration-ticket-list"]}>
        <div className={styles["registration-ticket-item"]}>
          <div className={styles["registration-ticket-item-title"]}>
            Early Bird
          </div>
          <div className={styles["registration-ticket-item-content"]}></div>
        </div>
      </div>
    </div>
  );
}

export default RegistrationTicket;
