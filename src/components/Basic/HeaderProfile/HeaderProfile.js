import styles from "components/Basic/HeaderProfile/HeaderProfile.module.scss";

import { Link } from "react-router-dom";
import { ReactComponent as ChevronDown } from "assets/icons/chevron-down.svg";

import Dropdown from "components/Basic/Dropdown/Dropdown";

function HeaderProfile() {
  return (
    <Dropdown.Base>
      <div className={styles["header-profile-container"]}>
        <div className={styles["header-profile"]}>
          <div className={styles["header-profile-initial"]}>TE</div>
          <div className={styles["header-profile-info"]}>
            <Link to="/" className={styles["header-profile-info-title"]}>
              Tester 123
            </Link>
            <p className={styles["header-profile-info-subtitle"]}>User</p>
          </div>
        </div>
        <div className={styles["header-profile-icon"]}>
          <ChevronDown width={18} height={18} />
        </div>
      </div>

      <Dropdown.Menu>
        <Dropdown.Item>Item 1</Dropdown.Item>
        <Dropdown.Item>Item 2</Dropdown.Item>
        <Dropdown.Item>Item 3</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown.Base>
  );
}

export default HeaderProfile;
