import styles from "components/Basic/UserProfile/UserProfile.module.scss";

import Avatar from "components/Basic/Avatar/Avatar";

function UserProfile({ username, email }) {
  return (
    <div className={styles["profile"]}>
      <Avatar color="accent">RO</Avatar>
      <div className={styles["profile__content"]}>
        <h4 className={styles["profile__title"]}>{username}</h4>
        <p className={styles["profile__subtitle"]}>{email}</p>
      </div>
    </div>
  );
}

export default UserProfile;
