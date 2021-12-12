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

function RegistrationSummaryItemHeading({ children }) {
  return <div className={styles["summary__list-title"]}>{children}</div>;
}

function RegistrationSummaryItem({ label, largeFont = false, children }) {
  return (
    <div
      className={cx(styles["summary__list-content-item"], {
        [styles["summary__list-content-item-gtotal"]]: largeFont,
      })}
    >
      <span>{label}</span>
      <span className={styles["summary__list-content-item-value"]}>
        {children}
      </span>
    </div>
  );
}

function RegistrationSummaryDivider() {
  return <div className={styles["summary__divider"]}></div>;
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
      <div className={styles["summary__content"]}>
        <RegistrationSummaryItemHeading>
          Registration Information
        </RegistrationSummaryItemHeading>
        <div className={styles["summary__list-content"]}>
          <RegistrationSummaryItem label="Date">
            {new Intl.DateTimeFormat("en-US", {
              year: "numeric",
              month: "short",
              day: "numeric",
            }).format(new Date())}
          </RegistrationSummaryItem>
          <RegistrationSummaryItem label="Time">10:10</RegistrationSummaryItem>
          <RegistrationSummaryItem label="Total People">
            2
          </RegistrationSummaryItem>
        </div>
        <RegistrationSummaryDivider />
        <RegistrationSummaryItemHeading>Tickets</RegistrationSummaryItemHeading>
        <div className={styles["summary__list-content"]}>
          <RegistrationSummaryItem label="1 x Early bid">
            $10.00
          </RegistrationSummaryItem>
          <RegistrationSummaryItem label="2 x Early bid">
            $20.00
          </RegistrationSummaryItem>
        </div>
        <RegistrationSummaryDivider />
        <div className={styles["summary__list-content"]}>
          <RegistrationSummaryItem label="Subtotal">
            $30.00
          </RegistrationSummaryItem>
          <RegistrationSummaryItem label="Tax">
            <span className="text-error">-$10.00</span>
          </RegistrationSummaryItem>
        </div>
        <RegistrationSummaryDivider />
        <div className={styles["summary__list-content"]}>
          <RegistrationSummaryItem label="Grandtotal" largeFont={true}>
            $25.00
          </RegistrationSummaryItem>
        </div>
      </div>
      <RegistrationSummaryFooter />
    </aside>
  );
}

export default RegistrationSummary;
