import styles from "components/Basic/Dropdown/DropdownItem/DropdownItem.module.scss";

function DropdownItem({ children, ...props }) {
  return (
    <div className={styles["item"]} {...props}>
      {children}
    </div>
  );
}

export default DropdownItem;
