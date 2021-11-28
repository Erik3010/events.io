import { useContext } from "react";

import TabContext from "components/Basic/Tabs/TabContext";

function TabPanel({ id, children }) {
  const { activeTab } = useContext(TabContext);

  return <div hidden={activeTab !== id}>{children}</div>;
}

export default TabPanel;
