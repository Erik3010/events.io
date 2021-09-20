import styles from "components/Event/EventSession/EventSession.module.scss";

import SessionCard from "components/Session/SessionCard/SessionCard";

function EventSession() {
  return (
    <div className={styles["session-container"]}>
      {Array(20)
        .fill()
        .map((_, index) => (
          <SessionCard key={index} />
        ))}
    </div>
  );
}

export default EventSession;
