import { useState } from "react";

import styles from "components/Basic/HeaderProfile/HeaderProfile.module.scss";

import { Link, useHistory } from "react-router-dom";
import { ReactComponent as ChevronDown } from "assets/icons/chevron-down.svg";
import { ReactComponent as Logout } from "assets/icons/logout.svg";

import Dropdown from "components/Basic/Dropdown/Dropdown";
import cx from "classnames";
import Avatar from "components/Basic/Avatar/Avatar";

function HeaderProfile() {
  const history = useHistory();

  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = (e) => {
    e.stopPropagation();
    setShowDropdown(!showDropdown);
  };

  return (
    <Dropdown.Base show={showDropdown} close={() => setShowDropdown(false)}>
      <div className={styles["profile"]}>
        <Avatar color="primary">TE</Avatar>
        <div className={styles["profile__info"]}>
          <Link to="/" className={styles["profile__title"]}>
            Tester 123
          </Link>
          <p className={styles["profile__subtitle"]}>User</p>
        </div>

        <ChevronDown
          className={cx(styles["profile__icon"], {
            [styles["profile__icon--active"]]: showDropdown,
          })}
          width={18}
          height={18}
          onClick={(e) => toggleDropdown(e)}
        />
      </div>

      <Dropdown.Menu>
        <Dropdown.Item onClick={() => history.push("/login")}>
          View Profile
        </Dropdown.Item>
        <Dropdown.Item>Change Profile</Dropdown.Item>
        <Dropdown.Item onClick={() => history.push("/login")}>
          <Logout stroke="#f03e3e" width={16} height={16} />
          <span className="text-error">Logout</span>
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown.Base>
  );
}

export default HeaderProfile;
