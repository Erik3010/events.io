import { useState } from "react";

import styles from "components/Basic/HeaderProfile/HeaderProfile.module.scss";

import { Link, useHistory } from "react-router-dom";
import { ReactComponent as ChevronDown } from "assets/icons/chevron-down.svg";
import { ReactComponent as Logout } from "assets/icons/logout.svg";

import Dropdown from "components/Basic/Dropdown/Dropdown";
import classNames from "classnames";

function HeaderProfile() {
  const history = useHistory();

  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = (e) => {
    e.stopPropagation();
    setShowDropdown(!showDropdown);
  };

  return (
    <Dropdown.Base show={showDropdown} close={() => setShowDropdown(false)}>
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
        <div
          className={styles["header-profile-icon"]}
          onClick={(e) => toggleDropdown(e)}
        >
          <ChevronDown
            className={classNames({ [styles["active"]]: showDropdown })}
            width={18}
            height={18}
          />
        </div>
      </div>

      <Dropdown.Menu>
        <Dropdown.Item onClick={() => history.push("/login")}>
          View Profile
        </Dropdown.Item>
        <Dropdown.Item>Change Profile</Dropdown.Item>
        <Dropdown.Item>
          <div className={styles["dropdown-item-with-icon"]}>
            <Logout stroke="#f03e3e" width={16} height={16} />{" "}
            <span>Logout</span>
          </div>
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown.Base>
  );
}

export default HeaderProfile;
