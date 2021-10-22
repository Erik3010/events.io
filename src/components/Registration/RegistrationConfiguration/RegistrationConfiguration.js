import styles from "components/Registration/RegistrationConfiguration/RegistrationConfiguration.module.scss";

import cx from "classnames";

import RegistrationTicket from "components/Registration/RegistrationTicket/RegistrationTicket";

function RegistrationConfiguration() {
  return (
    <div className={styles["registration-section-container"]}>
      <div className={styles["registration-section"]}>
        <div className={styles["registration-section-title"]}>
          <h1>Get Your Tickets</h1>
          <p>
            Choose your ticket in here. The ticket price based on the ticket
            type you've choosed.
          </p>
        </div>
        <div className={styles["registration-section-content"]}>
          <div className={styles["registration-ticket-container"]}>
            {Array(10)
              .fill("")
              .map((_, index) => (
                <RegistrationTicket isActive={index === 1} />
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default RegistrationConfiguration;
