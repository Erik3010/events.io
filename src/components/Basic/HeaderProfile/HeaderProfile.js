import styles from "components/Basic/HeaderProfile/HeaderProfile.module.scss";

import { Link } from "react-router-dom";
import { ReactComponent as ChevronDown } from "assets/icons/chevron-down.svg";

function HeaderProfile() {
  return (
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
  );
}

export default HeaderProfile;
