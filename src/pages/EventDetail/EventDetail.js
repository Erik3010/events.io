import Badge from "components/Basic/Badge/Badge";
import Button from "components/Basic/Button/Button";
import Default from "containers/Default";

import styles from "pages/EventDetail/EventDetail.module.scss";

import cx from "classnames";

import { ReactComponent as Clock } from "assets/icons/clock.svg";
import { ReactComponent as User } from "assets/icons/user.svg";

function EventDetail() {
  return (
    <Default>
      <div className={styles["event-detail-container"]}>
        <div className={styles["event-detail-header"]}>
          <div className={styles["event-detail-title"]}>
            <div className={styles["event-detail-subtitle"]}>
              <h2>Vue Conference 2021</h2>{" "}
              <Badge color="secondary">ongoing</Badge>
            </div>
            <div className={styles["event-detail-info-container"]}>
              <div className={styles["event-detail-info"]}>
                <Clock width={16} height={16} /> {new Date().toLocaleString()}
              </div>
              <div className={styles["event-detail-info"]}>
                <User width={16} height={16} /> {new Date().toLocaleString()}
              </div>
            </div>
          </div>
          <Button small type="primary">
            Register this Event
          </Button>
        </div>
        <div className={styles["event-detail-body"]}>
          <div className={styles["event-detail-tab"]}>
            <div
              className={cx(styles["event-detail-tab-item"], styles["active"])}
            >
              Sessions
            </div>
            <div className={styles["event-detail-tab-item"]}>Attendees</div>
            <div className={styles["event-detail-tab-item"]}>
              Rooms Timeline
            </div>
          </div>
          <div className={styles["event-detail-content"]}>asd</div>
        </div>
      </div>
    </Default>
  );
}

export default EventDetail;
