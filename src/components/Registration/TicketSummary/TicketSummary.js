import styles from "components/Registration/TicketSummary/TicketSummary.module.scss";

import TicketBadge from "components/Registration/TicketBadge/TicketBadge";

function TicketSummary() {
  return (
    <div className={styles["ticket"]}>
      <div className={styles["ticket__content"]}>
        <div className={styles["ticket__header"]}>
          <h4 className={styles["ticket__title"]}>Early Bird</h4>
          <TicketBadge>Amount</TicketBadge>
        </div>
        <p className={styles["ticket__description"]}>30 tickets left</p>
      </div>
      <div className={styles["ticket__price"]}>$20.00</div>
    </div>
  );
}

export default TicketSummary;
