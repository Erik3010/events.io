import styles from "components/Registration/RegistrationSummary/RegistrationSummary.module.scss";

import cx from "classnames";

function RegistrationSummary() {
  return (
    <div className={styles["registration-summary"]}>
      <div className={styles["registration-summary-title"]}>
        <div className={styles["registration-summary-title-tagline"]}>
          Registration ID
        </div>
        <div className={styles["registration-summary-title-id"]}>
          #ORD12093819
        </div>
      </div>
      <div className={styles["registration-summary-content"]}>
        <div className={styles["registration-summary-list"]}>
          <div className={styles["registration-summary-list-title"]}>
            Registration Information
          </div>
          <div className={styles["registration-summary-list-content"]}>
            <div className={styles["registration-summary-list-content-item"]}>
              <span>Date</span>
              <span
                className={
                  styles["registration-summary-list-content-item-value"]
                }
              >
                {new Intl.DateTimeFormat("en-US", {
                  year: "numeric",
                  month: "short",
                  day: "numeric",
                }).format(new Date())}
              </span>
            </div>
            <div className={styles["registration-summary-list-content-item"]}>
              <span>Time</span>
              <span
                className={
                  styles["registration-summary-list-content-item-value"]
                }
              >
                10:10
              </span>
            </div>
            <div className={styles["registration-summary-list-content-item"]}>
              <span>Total People</span>
              <span
                className={
                  styles["registration-summary-list-content-item-value"]
                }
              >
                2
              </span>
            </div>
          </div>
        </div>
        <div className={styles["registration-summary-divider"]}></div>
        <div className={styles["registration-summary-list"]}>
          <div className={styles["registration-summary-list-title"]}>
            Tickets
          </div>
          <div className={styles["registration-summary-list-content"]}>
            <div className={styles["registration-summary-list-content-item"]}>
              <span>
                1 <span className={styles["times"]}>x</span> Early bid
              </span>
              <span
                className={
                  styles["registration-summary-list-content-item-value"]
                }
              >
                $10.00
              </span>
            </div>
            <div className={styles["registration-summary-list-content-item"]}>
              <span>
                2 <span className={styles["times"]}>x</span> Early bid
              </span>
              <span
                className={
                  styles["registration-summary-list-content-item-value"]
                }
              >
                $20.00
              </span>
            </div>
          </div>
        </div>
        <div className={styles["registration-summary-divider"]}></div>
        <div className={styles["registration-summary-list"]}>
          <div className={styles["registration-summary-list-content"]}>
            <div className={styles["registration-summary-list-content-item"]}>
              <span>Subtotal</span>
              <span
                className={
                  styles["registration-summary-list-content-item-value"]
                }
              >
                $30.00
              </span>
            </div>
            <div className={styles["registration-summary-list-content-item"]}>
              <span>Fee</span>
              <span
                className={cx(
                  styles["registration-summary-list-content-item-value"],
                  "text-error"
                )}
              >
                -$10.00
              </span>
            </div>
          </div>
        </div>
        <div className={styles["registration-summary-divider"]}></div>
        <div className={styles["registration-summary-list"]}>
          <div className={styles["registration-summary-list-content"]}>
            <div
              className={cx(
                styles["registration-summary-list-content-item"],
                styles["registration-summary-list-content-item-gtotal"]
              )}
            >
              <span>Grandtotal</span>
              <span
                className={
                  styles["registration-summary-list-content-item-value"]
                }
              >
                $25.00
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RegistrationSummary;
