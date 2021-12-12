import styles from "components/Registration/WorkshopSummary/WorkshopSummary.module.scss";

function WorkshopSummaryItem() {
  return (
    <div className={styles["item"]}>
      <div className={styles["item__content"]}>
        <h4 className={styles["item__title"]}>Workshop 1</h4>
        <p className={styles["item__subtitle"]}>Evan You</p>
      </div>
      <div className={styles["item__pricing"]}>
        <h4 className={styles["item__price"]}>$100</h4>
        <p className={styles["item__tax"]}>+10% tax</p>
      </div>
    </div>
  );
}

function WorkshopSummary() {
  return (
    <div className={styles["workshop"]}>
      {Array(5)
        .fill("")
        .map((_, index) => {
          return <WorkshopSummaryItem key={index} />;
        })}
    </div>
  );
}

export default WorkshopSummary;
