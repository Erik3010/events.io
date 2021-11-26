import styles from "components/Home/HomeHeader/HomeHeader.module.scss";

import Button from "components/Basic/Button/Button";

function HomeHeader({ onCreateEvent }) {
  return (
    <div className={styles["home-header"]}>
      <div className={styles["home-header__title"]}>
        <h3>Upcoming Events</h3>
        <p>There are 3 upcoming events. Check it out!</p>
      </div>
      <div>
        <Button onClick={onCreateEvent} type="secondary">
          Create Event
        </Button>
      </div>
    </div>
  );
}

export default HomeHeader;
