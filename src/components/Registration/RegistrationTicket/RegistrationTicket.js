import styles from "components/Registration/RegistrationTicket/RegistrationTicket.module.scss";

import cx from "classnames";

import { ReactComponent as Check } from "assets/icons/check.svg";
import TicketBadge from "components/Registration/TicketBadge/TicketBadge";

function RegistrationTicket({ isActive = false }) {
  return (
    <div
      className={cx({
        [styles["card"]]: true,
        [styles["card--active"]]: isActive,
      })}
    >
      {isActive && (
        <div className={styles["card__icon-wrapper"]}>
          <Check className={styles["card__icon"]} width={12} height={12} />
        </div>
      )}
      <div className={styles["card__heading"]}>
        <div className={styles["card__title"]}>Early Bird</div>
        <TicketBadge>Amount</TicketBadge>
      </div>
      <div className={styles["card__subtitle"]}>30 tickets left</div>
      <div className={styles["card__price"]}>$100.00</div>
    </div>
  );
}

export default RegistrationTicket;
