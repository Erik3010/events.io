import styles from "components/Event/Channel/ChannelCard/ChannelCard.module.scss";

import cx from "classnames";

function ChannelCard({ isActive }) {
  return (
    <div
      className={cx([styles["channel-card"], { [styles["active"]]: isActive }])}
    >
      <div className={styles["channel-card-title"]}>#roadmap</div>
      <div className={styles["channel-card-subtitle"]}>
        This is a roadmap of javascript frontend
      </div>
    </div>
  );
}

export default ChannelCard;
