import styles from "components/Session/SessionCard/SessionCard.module.scss";

import { ReactComponent as User } from "assets/icons/user.svg";
import { ReactComponent as Clock } from "assets/icons/clock.svg";

import Button from "components/Basic/Button/Button";

function SessionCard() {
  return (
    <div className={styles["card"]}>
      <div className={styles["card__header"]}>
        <div className={styles["card__title"]}>
          <div className={styles["card__indicator"]}></div>{" "}
          <h4 className={styles["card__title-text"]}>Vue 3 Workshop</h4>
        </div>
      </div>
      <div className={styles["card__body"]}>
        <div className={styles["card__info"]}>
          <div className={styles["card__info-item"]}>
            <User width={16} height={16} /> Evan You
          </div>
          <div className={styles["card__info-item"]}>
            <Clock width={16} height={16} /> 2020-02-14 09:30:00
          </div>
        </div>
        <div className={styles["card__description"]}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis
          voluptatum quo debitis repudiandae ea voluptatibus. Lorem ipsum dolor
          sit amet consectetur adipisicing elit. Aspernatur, rerum.
        </div>
        <div className={styles["card__actions"]}>
          <Button small type="secondary">
            View Detail
          </Button>
        </div>
      </div>
    </div>
  );
}

export default SessionCard;
