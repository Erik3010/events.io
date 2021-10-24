import styles from "components/Registration/RegistrationTicket/RegistrationTicket.module.scss";

import cx from "classnames";

import { ReactComponent as Check } from "assets/icons/check.svg";

function RegistrationTicket({ isActive = false }) {
  return (
    <div
      className={cx({
        [styles["registration-ticket-item"]]: true,
        [styles["active"]]: isActive,
      })}
    >
      {isActive && (
        <div className={styles["registration-ticket-item-check"]}>
          <Check width={12} height={12} />
        </div>
      )}
      <div className={styles["registration-ticket-item-header"]}>
        <div className={styles["registration-ticket-item-header-title"]}>
          <div>Early Bird</div>
          <div className={styles["registration-ticket-badge"]}>Amount</div>
        </div>
        <div className={styles["registration-ticket-item-header-tagline"]}>
          30 tickets left
        </div>
      </div>
      <div className={styles["registration-ticket-item-content"]}>$100.00</div>
    </div>
  );
}

export default RegistrationTicket;
