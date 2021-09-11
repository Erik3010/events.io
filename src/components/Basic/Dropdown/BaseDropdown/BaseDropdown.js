import styles from "components/Basic/Dropdown/BaseDropdown/BaseDropdown.module.scss";

import DropdownContext from "components/Basic/Dropdown/DropdownContext";
import { useEffect } from "react/cjs/react.development";

function BaseDropdown({ show, close, children }) {
  const contextValue = { show, close };

  useEffect(() => {
    window.addEventListener("click", close);

    return () => window.removeEventListener("click", close);
  }, []);

  return (
    <DropdownContext.Provider value={contextValue}>
      <div className={styles["dropdown-container"]}>{children} </div>
    </DropdownContext.Provider>
  );
}

export default BaseDropdown;
