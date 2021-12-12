import styles from "components/Registration/AttendeeSummary/AttendeeSummary.module.scss";

function AttendeeSummaryItem({ label, value }) {
  return (
    <div className={styles["summary__item"]}>
      <p className={styles["summary__label"]}>{label}</p>
      <h4 className={styles["summary__value"]}>{value}</h4>
    </div>
  );
}

function AttendeeSummary() {
  return (
    <>
      <div className={styles["summary"]}>
        <AttendeeSummaryItem label="First Name" value="John" />
        <AttendeeSummaryItem label="Last Name" value="Doe" />
      </div>
      <div className={styles["summary"]}>
        <AttendeeSummaryItem label="Email" value="johndoe@gmail.com" />
        <AttendeeSummaryItem label="Phone" value="+629028310939" />
      </div>
    </>
  );
}

export default AttendeeSummary;
