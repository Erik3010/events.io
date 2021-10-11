import styles from "components/Basic/Input/Input.module.scss";

function Input({ label, type, ...rest }) {
  return (
    <div className={styles["form-control"]}>
      <label htmlFor={label}>{label}</label>
      <input type={type} id={label} placeholder={label} {...rest} />
    </div>
  );
}

export default Input;
