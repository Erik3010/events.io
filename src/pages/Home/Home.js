import styles from "pages/Home/Home.module.scss";

import { ReactComponent as ChevronDown } from "assets/icons/chevron-down.svg";
import { Link } from "react-router-dom";
import Button from "components/Basic/Button/Button";

function Home() {
  return (
    <div>
      <header className={styles["header"]}>
        <div>
          <h2>
            Events<span className="text-primary">.io</span>
          </h2>
        </div>
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
      </header>
      <div className={styles["home-container"]}>
        <div className="container">
          <div className={styles["home-header"]}>
            <div className={styles["home-header-title"]}>
              <h3>Upcoming Events</h3>
              <p>There are 3 upcoming events. Check it out!</p>
            </div>
            <div>
              <Button type="secondary">Browse Events</Button>
            </div>
          </div>
          <div className={styles["event-container"]}>
            <div className={styles["event-card"]}>
              <div className={styles["event-card-header"]}>tag</div>
              <div className={styles["event-card-content"]}>
                <h3>Event List</h3>
                <p>20 Agustus 2021</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
