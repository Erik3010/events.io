import Badge from "components/Basic/Badge/Badge";
import Button from "components/Basic/Button/Button";
import Default from "containers/Default";

import styles from "pages/EventDetail/EventDetail.module.scss";

import cx from "classnames";

import { useState, memo } from "react";

import { ReactComponent as Clock } from "assets/icons/clock.svg";
import { ReactComponent as User } from "assets/icons/user.svg";
import EventSession from "components/Event/EventSession/EventSession";
import EventAttendees from "components/Event/EventAttendees/EventAttendees";
import EventTimeline from "components/Event/EventTimeline/EventTimeline";

function EventDetail() {
  const tabs = [
    {
      id: "sessions",
      name: "Sessions",
      component: EventSession,
    },
    {
      id: "attendees",
      name: "Attendees",
      component: EventAttendees,
    },
    {
      id: "rooms",
      name: "Room's Timeline",
      component: EventTimeline,
    },
  ];

  const [selectedTab, setSelectedTab] = useState(tabs[0]);

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
                <User width={16} height={16} /> Organizer
              </div>
            </div>
          </div>
          <Button small type="primary">
            Register this Event
          </Button>
        </div>
        <div className={styles["event-detail-body"]}>
          <div className={styles["event-detail-tab"]}>
            {tabs.map((tab) => {
              return (
                <div
                  key={tab.id}
                  className={cx(styles["event-detail-tab-item"], {
                    [styles["active"]]: selectedTab.id === tab.id,
                  })}
                  onClick={() => setSelectedTab(tab)}
                >
                  {tab.name}
                </div>
              );
            })}
          </div>
          <div className={styles["event-detail-content"]}>
            <selectedTab.component />
          </div>
        </div>
      </div>
    </Default>
  );
}

export default EventDetail;
