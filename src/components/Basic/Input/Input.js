import styles from "components/Basic/Input/Input.module.scss";

function Input({ label, type, ...rest }) {
  return (
    <div className={styles["form"]}>
      <label className={styles["form__label"]} htmlFor={label}>
        {label}
      </label>
      <input
        className={styles["form__input"]}
        type={type}
        id={label}
        placeholder={label}
        {...rest}
      />
    </div>
  );
}

export default Input;
