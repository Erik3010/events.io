import styles from "components/Event/EventTimeline/EventTimeline.module.scss";

import ChannelCard from "components/Channel/ChannelCard/ChannelCard";
import TimelineHeader from "components/Timeline/TimelineHeader/TimelineHeader";
import TimelineTable from "components/Timeline/TimelineTable/TimelineTable";

function EventTimeline() {
  return (
    <div className={styles["event-timeline"]}>
      <div className={styles["channel-sidebar"]}>
        <div className={styles["channel-list"]}>
          {Array(50)
            .fill()
            .map((_, index) => (
              <ChannelCard key={index} isActive={index === 0} />
            ))}
        </div>
      </div>
      <div className={styles["timeline-container"]}>
        <TimelineHeader />
        <div className={styles["timeline-content"]}>
          <TimelineTable />
        </div>
      </div>
    </div>
  );
}

export default EventTimeline;
