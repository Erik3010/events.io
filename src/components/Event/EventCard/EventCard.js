import styles from "components/Event/EventCard/EventCard.module.scss";

import { useHistory } from "react-router-dom";

import { ReactComponent as DotsVertical } from "assets/icons/dots-vertical.svg";
import Badge from "components/Basic/Badge/Badge";

function EventCard() {
  const history = useHistory();

  const clickHandler = () => {
    history.push("/event/asd");
  };

  return (
    <div className={styles["card"]} onClick={clickHandler}>
      <div className={styles["card__circle"]}></div>
      <div className={styles["card__body"]}>
        <div className={styles["card__header"]}>
          <div>
            <Badge color="primary">12 hours to go</Badge>
          </div>
          <div className={styles["card__icon"]}>
            <DotsVertical width={22} height={22} />
          </div>
        </div>
        <div className={styles["card__content"]}>
          <h3 className={styles["card__title"]}>Event List</h3>
          <p className={styles["card__subtitle"]}>20 Agustus 2021</p>
        </div>
      </div>
    </div>
  );
}

export default EventCard;
