import styles from "components/Registration/TicketBadge/TicketBadge.module.scss";

function TicketBadge({ children }) {
  return <div className={styles["ticket-badge"]}>{children}</div>;
}

export default TicketBadge;
