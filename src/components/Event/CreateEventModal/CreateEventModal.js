import styles from "components/Event/CreateEventModal/CreateEventModal.module.scss";

import CreateEventForm from "components/Event/CreateEventForm/CreateEventForm";

import { ReactComponent as Cancel } from "assets/icons/cancel.svg";

import { Transition } from "react-transition-group";
import cx from "classnames";
import { useEffect } from "react";

const transitionStyle = {
  entering: { opacity: 0, transform: "scale(.95)" },
  entered: { opacity: 1, transform: "scale(1)" },
  exiting: { opacity: 0, transform: "scale(0.95)" },
  exited: { opacity: 0, transform: "scale(0.95)" },
};

function CreateEventModal({ show, onClose }) {
  useEffect(() => {
    if (show) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "unset";
  }, [show]);

  return (
    <Transition in={show} timeout={200} appear unmountOnExit>
      {(state) => (
        <div style={{ ...transitionStyle[state] }} className={styles["modal"]}>
          <div className={styles["modal__close-button"]} onClick={onClose}>
            <Cancel width={25} height={25} />
          </div>
          <div className={styles["modal__wrapper"]}>
            <div className={styles["modal__decoration"]}></div>
            <div className={styles["modal__content"]}>
              <div className={styles["modal__header"]}>
                <h1 className={styles["modal__title"]}>Create New Event</h1>
                <p className={styles["modal__tagline"]}>
                  It take less than 5 minute to fill out the information that
                  needed to create your own events.
                </p>
              </div>
              <div className={styles["modal__body"]}>
                <CreateEventForm />
              </div>
            </div>
            <div
              className={cx(
                styles["modal__decoration"],
                styles["modal__decoration--flipped"]
              )}
            ></div>
          </div>
        </div>
      )}
    </Transition>
  );
}

export default CreateEventModal;
