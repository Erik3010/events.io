import styles from "components/Basic/Dropdown/BaseDropdown/BaseDropdown.module.scss";

import DropdownContext from "components/Basic/Dropdown/DropdownContext";

function BaseDropdown({ show, onToggle, children }) {
  const contextValue = { show, onToggle };

  return (
    <DropdownContext.Provider value={contextValue}>
      <div className={styles["dropdown-container"]}>{children} </div>
    </DropdownContext.Provider>
  );
}

export default BaseDropdown;
