import styles from "components/Registration/RegistrationConfiguration/RegistrationConfiguration.module.scss";

import cx from "classnames";

import RegistrationTicket from "components/Registration/RegistrationTicket/RegistrationTicket";

import { ReactComponent as Check } from "assets/icons/check.svg";

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
      <div className={styles["registration-section"]}>
        <div className={styles["registration-section-title"]}>
          <h1>Additional Workshops</h1>
          <p>Choose workshop that you want to join.</p>
        </div>
        <div className={styles["registration-section-content"]}>
          <div className={styles["registration-workshop"]}>
            <label className={styles["registration-workshop-checkbox"]}>
              <div className={styles["registration-workshop-checkbox-label"]}>
                <h4>Workshop123123</h4>
                <p>Lorem ipsum dolor sit amet.</p>
              </div>
              <input type="checkbox" />
              <div className={styles["registration-workshop-checkbox-box"]}>
                <Check
                  className={styles["registration-workshop-checkbox-checkmark"]}
                  width={15}
                  height={15}
                />
              </div>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RegistrationConfiguration;
