import styles from "components/Basic/Dropdown/BaseDropdown/BaseDropdown.module.scss";

function BaseDropdown({ children }) {
  return <div className={styles["dropdown-container"]}>{children} </div>;
}

export default BaseDropdown;
