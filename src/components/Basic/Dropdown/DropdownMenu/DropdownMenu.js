import { useContext } from "react";

import styles from "components/Basic/Dropdown/DropdownMenu/DropdownMenu.module.scss";

import DropdownContext from "components/Basic/Dropdown/DropdownContext";

function DropdownMenu({ children }) {
  const { show, onToggle } = useContext(DropdownContext);

  return show && <div className={styles["dropdown-menu"]}>{children}</div>;
}

export default DropdownMenu;
