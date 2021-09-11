import styles from "components/Basic/Dropdown/DropdownItem/DropdownItem.module.scss";

function DropdownItem({ children, ...props }) {
  return (
    <div className={styles["dropdown-item"]} {...props}>
      {children}
    </div>
  );
}

export default DropdownItem;
