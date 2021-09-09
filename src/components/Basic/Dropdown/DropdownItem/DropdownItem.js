import styles from "components/Basic/Dropdown/DropdownItem/DropdownItem.module.scss";

function DropdownItem({ children }) {
  return <div className={styles["dropdown-item"]}>{children}</div>;
}

export default DropdownItem;
