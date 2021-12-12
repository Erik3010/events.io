import styles from "components/Registration/RegistrationSummary/RegistrationSummary.module.scss";

import cx from "classnames";

import Button from "components/Basic/Button/Button";

function RegistrationSummaryHeader() {
  return (
    <header className={styles["summary__header"]}>
      <div className={styles["summary__title"]}>Registration ID</div>
      <div className={styles["summary__subtitle"]}>#ORD12093819</div>
    </header>
  );
}

function RegistrationSummaryFooter() {
  return (
    <div className={styles["summary__footer"]}>
      <Button type="primary">Proceed Checkout</Button>
    </div>
  );
}

function RegistrationSummary() {
  return (
    <aside className={styles["summary"]}>
      <RegistrationSummaryHeader />
      <div className={styles["summary-content"]}>
        <div className={styles["summary-list"]}>
          <div className={styles["summary-list-title"]}>
            Registration Information
          </div>
          <div className={styles["summary-list-content"]}>
            <div className={styles["summary-list-content-item"]}>
              <span>Date</span>
              <span className={styles["summary-list-content-item-value"]}>
                {new Intl.DateTimeFormat("en-US", {
                  year: "numeric",
                  month: "short",
                  day: "numeric",
                }).format(new Date())}
              </span>
            </div>
            <div className={styles["summary-list-content-item"]}>
              <span>Time</span>
              <span className={styles["summary-list-content-item-value"]}>
                10:10
              </span>
            </div>
            <div className={styles["summary-list-content-item"]}>
              <span>Total People</span>
              <span className={styles["summary-list-content-item-value"]}>
                2
              </span>
            </div>
          </div>
        </div>
        <div className={styles["summary-divider"]}></div>
        <div className={styles["summary-list"]}>
          <div className={styles["summary-list-title"]}>Tickets</div>
          <div className={styles["summary-list-content"]}>
            <div className={styles["summary-list-content-item"]}>
              <span>
                1 <span className={styles["times"]}>x</span> Early bid
              </span>
              <span className={styles["summary-list-content-item-value"]}>
                $10.00
              </span>
            </div>
            <div className={styles["summary-list-content-item"]}>
              <span>
                2 <span className={styles["times"]}>x</span> Early bid
              </span>
              <span className={styles["summary-list-content-item-value"]}>
                $20.00
              </span>
            </div>
          </div>
        </div>
        <div className={styles["summary-divider"]}></div>
        <div className={styles["summary-list"]}>
          <div className={styles["summary-list-content"]}>
            <div className={styles["summary-list-content-item"]}>
              <span>Subtotal</span>
              <span className={styles["summary-list-content-item-value"]}>
                $30.00
              </span>
            </div>
            <div className={styles["summary-list-content-item"]}>
              <span>Fee</span>
              <span
                className={cx(
                  styles["summary-list-content-item-value"],
                  "text-error"
                )}
              >
                -$10.00
              </span>
            </div>
          </div>
        </div>
        <div className={styles["summary-divider"]}></div>
        <div className={styles["summary-list"]}>
          <div className={styles["summary-list-content"]}>
            <div
              className={cx(
                styles["summary-list-content-item"],
                styles["summary-list-content-item-gtotal"]
              )}
            >
              <span>Grandtotal</span>
              <span className={styles["summary-list-content-item-value"]}>
                $25.00
              </span>
            </div>
          </div>
        </div>
      </div>
      <RegistrationSummaryFooter />
    </aside>
  );
}

export default RegistrationSummary;
