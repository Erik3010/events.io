import styles from "components/Registration/RegistrationWorkshopItem/RegistrationWorkshopItem.module.scss";

import cx from "classnames";
import Checkbox from "components/Basic/Checkbox/Checkbox";

function RegistrationWorkshopItem({ active, value, onChange }) {
  const onWorkshopChangeHandler = (e) => {
    // maybe you want to do something else in here

    onChange(e);
  };

  return (
    <div
      className={cx({
        [styles["workshop"]]: true,
        [styles["workshop--active"]]: active,
      })}
    >
      <Checkbox
        onChange={(e) => onWorkshopChangeHandler(e)}
        value={value}
        label={`Hello ${value + 1}`}
        tagline="Halo"
      />
      <div className={styles["workshop__body"]}>
        <div className={styles["workshop__price"]}>$100</div>
        <div className={styles["workshop__tax"]}>+10% tax</div>
      </div>
    </div>
  );
}

export default RegistrationWorkshopItem;
