import styles from "pages/Registration/Registration.module.scss";

import Default from "containers/Default";

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
          <div className={styles["registration-stepper-container"]}>
            <div className={styles["registration-stepper"]}></div>
          </div>
        </div>
      </div>
    </Default>
  );
}

export default Registration;
