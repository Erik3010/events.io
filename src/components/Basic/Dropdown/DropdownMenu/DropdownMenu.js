import { useContext } from "react";

import styles from "components/Basic/Dropdown/DropdownMenu/DropdownMenu.module.scss";

import DropdownContext from "components/Basic/Dropdown/DropdownContext";

import { Transition } from "react-transition-group";

const transitionStyle = {
  entering: { opacity: 0, transform: "translateY(-50%)" },
  entered: { opacity: 1, transform: "translateY(0)" },
  exiting: { opacity: 0, transform: "translateY(-50%)" },
  exited: { opacity: 0, transform: "translateY(-50%)" },
};

function DropdownMenu({ children }) {
  const { show } = useContext(DropdownContext);

  return (
    <Transition
      in={show}
      timeout={{
        appear: 300,
        enter: 100,
        exit: 300,
      }}
      appear
      unmountOnExit
    >
      {(state) => {
        return (
          <div
            style={{ ...transitionStyle[state] }}
            className={styles["dropdown-menu"]}
          >
            {children}
          </div>
        );
      }}
    </Transition>
  );
}

export default DropdownMenu;
