import styles from "components/Event/EventTimeline/EventTimeline.module.scss";

import cx from "classnames";

import ChannelCard from "components/Event/Channel/ChannelCard/ChannelCard";

function EventTimeline() {
  return (
    <div className={styles["event-timeline"]}>
      <div className={styles["channel-sidebar"]}>
        <div className={styles["channel-list"]}>
          {Array(50)
            .fill()
            .map((_, index) => (
              <ChannelCard isActive={index === 0} />
            ))}
        </div>
      </div>
      <div className={styles["timeline-container"]}>
        <div className={styles["timeline-header"]}>
          <h1>
            <span>#</span>roadmap
          </h1>
          <p>This is a roadmap of javascript frontend</p>
        </div>
        <div className={styles["timeline-content"]}>
          <div className={styles["timeline-table"]}>
            <div className={styles["timeline-header"]}>
              <div
                className={cx([
                  styles["timeline-cell"],
                  styles["timeline-room-header"],
                ])}
              ></div>
              <div className={styles["timeline-cell"]}>09:00</div>
              <div className={styles["timeline-cell"]}>11:00</div>
              <div className={styles["timeline-cell"]}>13:00</div>
              <div className={styles["timeline-cell"]}>15:00</div>
            </div>
            <div className={styles["timeline-body"]}>
              <div className={styles["timeline-row"]}>
                <div
                  className={cx([
                    styles["timeline-cell"],
                    styles["timeline-room-title"],
                  ])}
                >
                  Main Hall
                </div>
                <div className={styles["timeline-cell"]}>
                  <div className={styles["session-list"]}>
                    <div
                      className={cx([styles["session-item"], styles["talk"]])}
                    >
                      Vue workshop
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EventTimeline;
