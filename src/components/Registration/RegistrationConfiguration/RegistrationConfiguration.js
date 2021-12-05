import styles from "components/Registration/RegistrationConfiguration/RegistrationConfiguration.module.scss";

import cx from "classnames";

import RegistrationTicket from "components/Registration/RegistrationTicket/RegistrationTicket";
import Checkbox from "components/Basic/Checkbox/Checkbox";
import RegistrationWorkshopItem from "components/Registration/RegistrationWorkshopItem/RegistrationWorkshopItem";

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
    <div className={cx(styles["sections"], styles["sections--stacked"])}>
      <section className={styles["section"]}>
        <header className={styles["section__header"]}>
          <h1 className={styles["section__title"]}>Get Your Tickets</h1>
          <p className={styles["section__subtitle"]}>
            Choose your ticket in here. The ticket price based on the ticket
            type you've choosed.
          </p>
        </header>
        <div
          className={cx([
            styles["section__content"],
            styles["section__content--stack-vertical"],
            styles["section__content--overflowed"],
          ])}
        >
          {Array(10)
            .fill("")
            .map((_, index) => (
              <RegistrationTicket key={index} isActive={index === 1} />
            ))}
        </div>
      </section>
      <section className={styles["section"]}>
        <header className={styles["section__header"]}>
          <h1 className={styles["section__title"]}>Additional Workshops</h1>
          <p className={styles["section__subtitle"]}>
            Choose workshop that you want to join.
          </p>
        </header>
        <div
          className={cx([
            styles["section__content"],
            styles["section__content--stack-horizontal"],
          ])}
        >
          {Array(5)
            .fill("")
            .map((_, index) => (
              <RegistrationWorkshopItem
                key={index}
                active={workshops.includes(index)}
                value={index}
                onChange={(e) => onWorkshopChangeHandler(e)}
              />
            ))}
        </div>
      </section>
    </div>
  );
}

export default RegistrationConfiguration;
