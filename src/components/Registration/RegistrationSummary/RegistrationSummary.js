import styles from "components/Registration/RegistrationSummary/RegistrationSummary.module.scss";

import cx from "classnames";

import Button from "components/Basic/Button/Button";

function RegistrationSummaryHeader() {
  return (
    <header className={styles["summary__header"]}>
      <div className={styles["summary__subtitle"]}>Registration ID</div>
      <div className={styles["summary__title"]}>#ORD12093819</div>
    </header>
  );
}

function RegistrationSummaryItemHeading({ children }) {
  return <div className={styles["summary__heading"]}>{children}</div>;
}

function RegistrationSummaryList({ children }) {
  return <div className={styles["summary__list"]}>{children}</div>;
}

function RegistrationSummaryItem({ label, largeFont = false, children }) {
  return (
    <div
      className={cx(styles["summary__row"], {
        [styles["summary__row--lg-font"]]: largeFont,
      })}
    >
      <span>{label}</span>
      <span className={styles["summary__row-value"]}>{children}</span>
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
        {/* registration information */}
        <RegistrationSummaryItemHeading>
          Registration Information
        </RegistrationSummaryItemHeading>
        <RegistrationSummaryList>
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
        </RegistrationSummaryList>
        <RegistrationSummaryDivider />

        {/* tickets */}
        <RegistrationSummaryItemHeading>Tickets</RegistrationSummaryItemHeading>
        <RegistrationSummaryList>
          <RegistrationSummaryItem label="1 x Early bid">
            $10.00
          </RegistrationSummaryItem>
          <RegistrationSummaryItem label="2 x Early bid">
            $20.00
          </RegistrationSummaryItem>
        </RegistrationSummaryList>
        <RegistrationSummaryDivider />

        {/* price */}
        <RegistrationSummaryList>
          <RegistrationSummaryItem label="Subtotal">
            $30.00
          </RegistrationSummaryItem>
          <RegistrationSummaryItem label="Tax">
            <span className="text-error">-$10.00</span>
          </RegistrationSummaryItem>
        </RegistrationSummaryList>
        <RegistrationSummaryDivider />

        {/* total */}
        <RegistrationSummaryItem label="Grandtotal" largeFont={true}>
          $25.00
        </RegistrationSummaryItem>
      </div>
      <RegistrationSummaryFooter />
    </aside>
  );
}

export default RegistrationSummary;
