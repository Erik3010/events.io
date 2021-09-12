import styles from "components/Event/CreateEventModal/CreateEventModal.module.scss";

import CreateEventForm from "components/Event/CreateEventForm/CreateEventForm";

function CreateEventModal() {
  return (
    <div className={styles["event-modal-container"]}>
      <div className={styles["event-modal"]}>
        <div className={styles["event-modal-header"]}>
          <h1 className={styles["event-modal-header-title"]}>
            Create New Event
          </h1>
          <p className={styles["event-modal-header-tagline"]}>
            Make you own event
          </p>
        </div>
        <div className={styles["event-modal-body"]}>
          <CreateEventForm />
        </div>
      </div>
    </div>
  );
}

export default CreateEventModal;
