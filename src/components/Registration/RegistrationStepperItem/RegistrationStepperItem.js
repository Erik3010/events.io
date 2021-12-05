import styles from "components/Registration/RegistrationStepperItem/RegistrationStepperItem.module.scss";

import cx from "classnames";

function RegistrationStepperItem({
  icon,
  stepCount,
  title,
  disabled = false,
  hasLine = false,
}) {
  return (
    <>
      <div
        className={cx(styles["stepper"], {
          [styles["stepper--disabled"]]: disabled,
        })}
      >
        <div className={styles["stepper__icon"]}>{icon}</div>
        <div className={styles["stepper__content"]}>
          <p className={styles["stepper__subtitle"]}>Step {stepCount}</p>
          <h3 className={styles["stepper__title"]}>{title}</h3>
        </div>
      </div>
      {hasLine && <div className={styles["stepper__line"]}></div>}
    </>
  );
}

export default RegistrationStepperItem;
