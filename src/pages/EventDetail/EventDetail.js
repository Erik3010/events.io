import Badge from "components/Basic/Badge/Badge";
import Button from "components/Basic/Button/Button";
import Default from "containers/Default/Default";

import styles from "pages/EventDetail/EventDetail.module.scss";

import cx from "classnames";

import { Link, useHistory } from "react-router-dom";

import { ReactComponent as Clock } from "assets/icons/clock.svg";
import { ReactComponent as User } from "assets/icons/user.svg";
import EventSession from "components/Event/EventSession/EventSession";
import EventAttendees from "components/Event/EventAttendees/EventAttendees";
import EventTimeline from "components/Event/EventTimeline/EventTimeline";

import useQuery from "hooks/useQuery";

import Tabs from "components/Basic/Tabs/Tabs/Tabs";
import TabPanel from "components/Basic/Tabs/TabPanel/TabPanel";

function EventDetail() {
  return (
    <Default>
      <div className={styles["event"]}>
        <div className={styles["event__header-container"]}>
          <div className={styles["event__header"]}>
            <div className={styles["event__text"]}>
              <h2 className={styles["event__title"]}>Vue Conference 2021</h2>{" "}
              <Badge color="secondary">ongoing</Badge>
            </div>
            <div className={styles["event__subtitle-container"]}>
              <div className={styles["event__subtitle"]}>
                <Clock width={16} height={16} /> {new Date().toLocaleString()}
              </div>
              <div className={styles["event__subtitle"]}>
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
        <div className={styles["event__body"]}>
          <Tabs>
            <TabPanel label="Sessions" id="session">
              <EventSession />
            </TabPanel>
            <TabPanel label="Attendees" id="attendee">
              <EventAttendees />
            </TabPanel>
            <TabPanel label="Room's Timeline" id="timeline">
              <EventTimeline />
            </TabPanel>
          </Tabs>
        </div>
      </div>
    </Default>
  );
}

export default EventDetail;
