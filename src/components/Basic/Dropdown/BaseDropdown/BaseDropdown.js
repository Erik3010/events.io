import styles from "components/Basic/Dropdown/BaseDropdown/BaseDropdown.module.scss";

import DropdownContext from "components/Basic/Dropdown/DropdownContext";
import { useEffect } from "react";

function BaseDropdown({ show, close, children }) {
  const contextValue = { show, close };

  useEffect(() => {
    window.addEventListener("click", close);

    return () => window.removeEventListener("click", close);
  }, [close]);

  return (
    <DropdownContext.Provider value={contextValue}>
      <div className={styles["container"]}>{children} </div>
    </DropdownContext.Provider>
  );
}

export default BaseDropdown;
