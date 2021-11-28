import styles from "components/Basic/Tabs/Tabs/Tabs.module.scss";

import TabContext from "components/Basic/Tabs/TabContext";
import TabItem from "components/Basic/Tabs/TabItem/TabItem";

import { Children, useState } from "react";

import cx from "classnames";

function Tabs({ defaultActiveTab, children }) {
  const initialTab = defaultActiveTab
    ? defaultActiveTab
    : Children.toArray(children)[0].props?.id ?? null;

  const [activeTab, setActiveTab] = useState(initialTab);

  const onTabItemClick = (id) => {
    setActiveTab(id);
  };

  return (
    <>
      <div className={cx(styles["tabs"], styles["tabs--stacked"])}>
        {Children.map(children, (child) => {
          const { id, label } = child.props;
          return (
            <TabItem
              key={id}
              tab={{ id, label }}
              active={id === activeTab}
              onClickTab={() => onTabItemClick(id)}
            />
          );
        })}
      </div>
      <div className={styles["tabs__panel"]}>
        <TabContext.Provider value={{ activeTab }}>
          {children}
        </TabContext.Provider>
      </div>
    </>
  );
}

export default Tabs;
