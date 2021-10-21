import styles from "components/Registration/RegistrationTicket/RegistrationTicket.module.scss";

import cx from "classnames";

import { ReactComponent as Check } from "assets/icons/Check.svg";

function RegistrationTicket() {
  return (
    <div className={styles["registration-ticket-container"]}>
      <div className={cx(styles["registration-ticket-item"], styles["active"])}>
        <div className={styles["registration-ticket-item-check"]}>
          <Check width={12} height={12} />
        </div>
        <div className={styles["registration-ticket-item-header"]}>
          <div className={styles["registration-ticket-item-header-title"]}>
            Early Bird
          </div>
          <div className={styles["registration-ticket-item-header-tagline"]}>
            30 tickets left
          </div>
        </div>
        <div className={styles["registration-ticket-item-content"]}>
          $100.00
        </div>
      </div>
      <div className={styles["registration-ticket-item"]}>
        <div className={styles["registration-ticket-item-header"]}>
          <div className={styles["registration-ticket-item-header-title"]}>
            Early Bird
          </div>
          <div className={styles["registration-ticket-item-header-tagline"]}>
            30 tickets left
          </div>
        </div>
        <div className={styles["registration-ticket-item-content"]}>
          $100.00
        </div>
      </div>
      <div className={styles["registration-ticket-item"]}>
        <div className={styles["registration-ticket-item-header"]}>
          <div className={styles["registration-ticket-item-header-title"]}>
            Early Bird
          </div>
          <div className={styles["registration-ticket-item-header-tagline"]}>
            30 tickets left
          </div>
        </div>
        <div className={styles["registration-ticket-item-content"]}>
          $100.00
        </div>
      </div>
      <div className={styles["registration-ticket-item"]}>
        <div className={styles["registration-ticket-item-header"]}>
          <div className={styles["registration-ticket-item-header-title"]}>
            Early Bird
          </div>
          <div className={styles["registration-ticket-item-header-tagline"]}>
            30 tickets left
          </div>
        </div>
        <div className={styles["registration-ticket-item-content"]}>
          $100.00
        </div>
      </div>
      <div className={styles["registration-ticket-item"]}>
        <div className={styles["registration-ticket-item-header"]}>
          <div className={styles["registration-ticket-item-header-title"]}>
            Early Bird
          </div>
          <div className={styles["registration-ticket-item-header-tagline"]}>
            30 tickets left
          </div>
        </div>
        <div className={styles["registration-ticket-item-content"]}>
          $100.00
        </div>
      </div>
      <div className={styles["registration-ticket-item"]}>
        <div className={styles["registration-ticket-item-header"]}>
          <div className={styles["registration-ticket-item-header-title"]}>
            Early Bird
          </div>
          <div className={styles["registration-ticket-item-header-tagline"]}>
            30 tickets left
          </div>
        </div>
        <div className={styles["registration-ticket-item-content"]}>
          $100.00
        </div>
      </div>
    </div>
  );
}

export default RegistrationTicket;
