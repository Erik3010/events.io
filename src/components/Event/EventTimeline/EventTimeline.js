import styles from "components/Event/EventTimeline/EventTimeline.module.scss";

import ChannelCard from "components/Channel/ChannelCard/ChannelCard";
import TimelineHeader from "components/Timeline/TimelineHeader/TimelineHeader";
import TimelineTable from "components/Timeline/TimelineTable/TimelineTable";

import cx from "classnames";

function EventTimeline() {
  return (
    <div className={styles["timeline"]}>
      <aside
        className={cx(
          styles["channel__sidebar"],
          styles["channel__sidebar--stacked"]
        )}
      >
        {Array(50)
          .fill()
          .map((_, index) => (
            <ChannelCard key={index} isActive={index === 0} />
          ))}
      </aside>
      <div className={styles["timeline__container"]}>
        <TimelineHeader />
        <div className={styles["timeline__content"]}>
          <TimelineTable />
        </div>
      </div>
    </div>
  );
}

export default EventTimeline;
