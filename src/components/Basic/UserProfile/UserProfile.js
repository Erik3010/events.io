import styles from "components/Basic/UserProfile/UserProfile.module.scss";

import Avatar from "components/Basic/Avatar/Avatar";

function UserProfile({ username, email }) {
  return (
    <div className={styles["user-profile"]}>
      <Avatar color="accent">RO</Avatar>
      <div className={styles["user-profile-content"]}>
        <h4>{username}</h4>
        <p>{email}</p>
      </div>
    </div>
  );
}

export default UserProfile;
