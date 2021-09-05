import styles from "components/Input/Input.module.scss";

function Input({ label, type }) {
  return (
    <div className={styles["form-control"]}>
      <label htmlFor={label}>{label}</label>
      <input type={type} id={label} placeholder={label} />
    </div>
  );
}

export default Input;
