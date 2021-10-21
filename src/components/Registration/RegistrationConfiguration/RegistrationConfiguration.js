import styles from "components/Registration/RegistrationConfiguration/RegistrationConfiguration.module.scss";

import cx from "classnames";

import RegistrationTicket from "components/Registration/RegistrationTicket/RegistrationTicket";

function RegistrationConfiguration() {
  return (
    <div className={styles["registration-section"]}>
      <div className={styles["registration-section-title"]}>
        Choose your ticket
      </div>
      <div className={styles["registration-ticket-container"]}>
        {Array(10)
          .fill("")
          .map((_, index) => (
            <RegistrationTicket isActive={index === 1} />
          ))}
      </div>
    </div>
  );
}

export default RegistrationConfiguration;
