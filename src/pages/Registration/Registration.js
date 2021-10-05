import styles from "pages/Registration/Registration.module.scss";

import Default from "containers/Default";

import cx from "classnames";

import { ReactComponent as User } from "assets/icons/user-solid.svg";
import { ReactComponent as UserGroup } from "assets/icons/user-group-solid.svg";
import { ReactComponent as Ticket } from "assets/icons/ticket-solid.svg";
import { ReactComponent as ShieldCheck } from "assets/icons/shield-check-solid.svg";

function Registration() {
  return (
    <Default>
      <div>
        <div className={styles["registration-header"]}>
          <div className={styles["registration-header-title"]}>
            <h1>Vue Conference</h1>
            <div className={styles["registration-header-subtitle"]}>
              <div className={styles["registration-sub-content"]}>
                Order Date:{" "}
                <span>
                  {new Intl.DateTimeFormat("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  }).format(new Date())}
                </span>
              </div>
              <div className={styles["separator"]}>|</div>
              <div className={styles["registration-sub-content"]}>
                Location: <span>Zoom (Online Meeting)</span>
              </div>
            </div>
          </div>
          <div className={styles["registration-stepper"]}>
            <div className={styles["registration-stepper-item"]}>
              <div className={styles["registration-stepper-item-icon"]}>
                <UserGroup width={16} height={16} />
              </div>
              <div className={styles["registration-stepper-item-content"]}>
                <p>Step 1</p>
                <h3>Attendee Info</h3>
              </div>
            </div>
            <div className={styles["registration-stepper-line"]}></div>
            <div className={styles["registration-stepper-item"]}>
              <div className={styles["registration-stepper-item-icon"]}>
                <Ticket width={16} height={16} />
              </div>
              <div className={styles["registration-stepper-item-content"]}>
                <p>Step 2</p>
                <h3>Choose Ticket</h3>
              </div>
            </div>
            <div className={styles["registration-stepper-line"]}></div>
            <div className={styles["registration-stepper-item"]}>
              <div className={styles["registration-stepper-item-icon"]}>
                <ShieldCheck width={16} height={16} />
              </div>
              <div className={styles["registration-stepper-item-content"]}>
                <p>Step 3</p>
                <h3>Confirmation</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Default>
  );
}

export default Registration;
