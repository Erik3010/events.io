import styles from "components/Basic/Tabs/TabItem/TabItem.module.scss";

import cx from "classnames";

function TabItem({ tab, onClickTab, active }) {
  return (
    <div
      onClick={() => onClickTab(tab.id)}
      className={cx(styles["tab-item"], {
        [styles["tab-item--active"]]: active,
      })}
    >
      {tab.label}
    </div>
  );
}

export default TabItem;
