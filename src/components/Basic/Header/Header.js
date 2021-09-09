import styles from "components/Basic/Header/Header.module.scss";

import HeaderProfile from "components/Basic/HeaderProfile/HeaderProfile";

function Header() {
  return (
    <header className={styles["header"]}>
      <div>
        <h2>
          Events<span className="text-primary">.io</span>
        </h2>
      </div>
      <HeaderProfile />
    </header>
  );
}

export default Header;
