import styles from "components/Event/EventCard.module.scss";

import { ReactComponent as DotsVertical } from "assets/icons/dots-vertical.svg";

function EventCard() {
  return (
    <div className={styles["event-card"]}>
      <div className={styles["event-card-overlay"]}></div>
      <div className={styles["event-card-body"]}>
        <div className={styles["event-card-header"]}>
          <div>
            <span className={styles["event-badge"]}>12 hours to go</span>
          </div>
          <div className={styles["event-menu-icon"]}>
            <DotsVertical width={22} height={22} />
          </div>
        </div>
        <div className={styles["event-card-content"]}>
          <h3>Event List</h3>
          <p>20 Agustus 2021</p>
        </div>
      </div>
    </div>
  );
}

export default EventCard;
