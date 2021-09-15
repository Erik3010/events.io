import styles from "components/Event/CreateEventModal/CreateEventModal.module.scss";

import CreateEventForm from "components/Event/CreateEventForm/CreateEventForm";

import { ReactComponent as Cancel } from "assets/icons/cancel.svg";

import { Transition } from "react-transition-group";
import classnames from "classnames";

const transitionStyle = {
  entering: { opacity: 0, transform: "scale(.95)" },
  entered: { opacity: 1, transform: "scale(1)" },
  exiting: { opacity: 0, transform: "scale(0.95)" },
  exited: { opacity: 0, transform: "scale(0.95)" },
};

function CreateEventModal({ show, onClose }) {
  return (
    <Transition
      in={show}
      timeout={{
        appear: 0,
        enter: 0,
        exit: 300,
      }}
      appear
      unmountOnExit
    >
      {(state) => (
        <div
          style={{ ...transitionStyle[state] }}
          className={styles["event-modal-container"]}
        >
          <div className={styles["event-modal-close"]} onClick={onClose}>
            <Cancel width={25} height={25} />
          </div>
          <div className={styles["event-modal"]}>
            <div className={styles["event-modal-decoration"]}></div>
            <div className={styles["event-modal-content"]}>
              <div className={styles["event-modal-header"]}>
                <h1 className={styles["event-modal-header-title"]}>
                  Create New Event
                </h1>
                <p className={styles["event-modal-header-tagline"]}>
                  It take less than 5 minute to fill out the information that
                  needed to create your own events.
                </p>
              </div>
              <div className={styles["event-modal-body"]}>
                <CreateEventForm />
              </div>
            </div>
            <div
              className={classnames(
                styles["event-modal-decoration"],
                styles["event-modal-decoration-right"]
              )}
            ></div>
          </div>
        </div>
      )}
    </Transition>
  );
}

export default CreateEventModal;
