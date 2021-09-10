import styles from "components/Basic/Dropdown/BaseDropdown/BaseDropdown.module.scss";

import DropdownContext from "components/Basic/Dropdown/DropdownContext";

function BaseDropdown({ show, onToggle, children }) {
  return (
    <DropdownContext.Provider>
      <div className={styles["dropdown-container"]}>{children} </div>
    </DropdownContext.Provider>
  );
}

export default BaseDropdown;
