import Badge from "components/Basic/Badge/Badge";
import Button from "components/Basic/Button/Button";
import Default from "containers/Default";

import styles from "pages/EventDetail/EventDetail.module.scss";

import cx from "classnames";

import { Link, useHistory } from "react-router-dom";
import { useState } from "react";

import { ReactComponent as Clock } from "assets/icons/clock.svg";
import { ReactComponent as User } from "assets/icons/user.svg";
import EventSession from "components/Event/EventSession/EventSession";
import EventAttendees from "components/Event/EventAttendees/EventAttendees";
import EventTimeline from "components/Event/EventTimeline/EventTimeline";

import useQuery from "hooks/useQuery";

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

  const currentTab = Math.max(0, Math.min(2, useQuery().get("tab") || 0));
  const tab = tabs[currentTab];

  const history = useHistory();

  const onChangeTab = (tab) =>
    history.push({
      pathname: history.location.pathname,
      search: `?tab=${tab}`,
    });

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
          <Link to="/registration">
            <Button small type="primary">
              Register this Event
            </Button>
          </Link>
        </div>
        <div className={styles["event-detail-body"]}>
          <div className={styles["event-detail-tab"]}>
            {tabs.map((item, index) => {
              return (
                <div
                  key={item.id}
                  className={cx(styles["event-detail-tab-item"], {
                    [styles["active"]]: tab.id === item.id,
                  })}
                  onClick={() => onChangeTab(index)}
                >
                  {item.name}
                </div>
              );
            })}
          </div>
          <div className={styles["event-detail-content"]}>
            <tab.component />
          </div>
        </div>
      </div>
    </Default>
  );
}

export default EventDetail;
