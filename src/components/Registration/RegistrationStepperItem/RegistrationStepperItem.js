import styles from "components/Registration/RegistrationStepperItem/RegistrationStepperItem.module.scss";

import cx from "classnames";

function RegistrationStepperItem({ icon, stepCount, title, disabled = false }) {
  return (
    <div
      className={cx({
        [styles["registration-stepper-item"]]: true,
        [styles["disabled"]]: disabled,
      })}
    >
      <div className={styles["registration-stepper-item-icon"]}>{icon}</div>
      <div className={styles["registration-stepper-item-content"]}>
        <p>Step {stepCount}</p>
        <h3>{title}</h3>
      </div>
    </div>
  );
}

export default RegistrationStepperItem;
