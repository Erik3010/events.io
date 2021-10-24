import styles from "components/Registration/RegistrationConfiguration/RegistrationConfiguration.module.scss";

import cx from "classnames";

import RegistrationTicket from "components/Registration/RegistrationTicket/RegistrationTicket";

import Checkbox from "components/Basic/Checkbox/Checkbox";

import { useState } from "react";

function RegistrationConfiguration() {
  const [workshops, setWorkshops] = useState([]);

  const onWorkshopChangeHandler = (e) => {
    if (e.target.checked) {
      setWorkshops([...workshops, +e.target.value]);
    } else {
      setWorkshops(
        workshops.filter((workshop) => workshop !== +e.target.value)
      );
    }
  };

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
                <RegistrationTicket key={index} isActive={index === 1} />
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
            {Array(5)
              .fill("")
              .map((_, index) => (
                <div
                  key={index}
                  className={cx({
                    [styles["registration-workshop-item"]]: true,
                    [styles["active"]]: workshops.includes(index),
                  })}
                >
                  <Checkbox
                    onChange={(e) => onWorkshopChangeHandler(e)}
                    value={index}
                    label={`Hello ${index + 1}`}
                    tagline="Halo"
                  />
                  <div className={styles["registration-workshop-item-info"]}>
                    <div
                      className={
                        styles["registration-workshop-item-info-price"]
                      }
                    >
                      $100
                    </div>
                    <div
                      className={
                        styles["registration-workshop-item-info-price-subtitle"]
                      }
                    >
                      +10% tax
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default RegistrationConfiguration;
