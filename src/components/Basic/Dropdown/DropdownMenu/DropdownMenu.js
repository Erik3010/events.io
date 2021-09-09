import styles from "components/Basic/Dropdown/DropdownMenu/DropdownMenu.module.scss";

function DropdownMenu({ children }) {
  return <div className={styles["dropdown-menu"]}>{children}</div>;
}

export default DropdownMenu;
