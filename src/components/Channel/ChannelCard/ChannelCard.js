import styles from "components/Channel/ChannelCard/ChannelCard.module.scss";

import cx from "classnames";

function ChannelCard({ isActive }) {
  return (
    <div
      className={cx([
        styles["card"],
        {
          [styles["card--active"]]: isActive,
        },
      ])}
    >
      <div className={styles["card__title"]}>#roadmap</div>
      <div className={styles["card__subtitle"]}>
        This is a roadmap of javascript frontend
      </div>
    </div>
  );
}

export default ChannelCard;
