import styles from "components/Basic/Checkbox/Checkbox.module.scss";

import { ReactComponent as Check } from "assets/icons/check.svg";

import { useState } from "react";

function Checkbox({ label, tagline = null, checked = false, value, onChange }) {
  const [isChecked, setIsChecked] = useState(checked);

  const onChangeHandler = (e) => {
    setIsChecked(!isChecked);
    onChange(e);
  };

  return (
    <label className={styles["checkbox"]}>
      <div className={styles["checkbox__label"]}>
        <h4 className={styles["checkbox__title"]}>{label}</h4>
        {tagline && <p className={styles["checkbox__subtitle"]}>{tagline}</p>}
      </div>
      <input
        type="checkbox"
        value={value}
        checked={isChecked}
        onChange={(e) => onChangeHandler(e)}
        className={styles["checkbox__input"]}
      />
      <div
        className={styles["checkbox__box"]}
        style={{ top: tagline ? "0.2rem" : "0rem" }}
      >
        <Check className={styles["checkbox__icon"]} width={15} height={15} />
      </div>
    </label>
  );
}

export default Checkbox;
