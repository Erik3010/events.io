import Button from "components/Basic/Button/Button";
import UserProfile from "components/Basic/UserProfile/UserProfile";
import styles from "components/Event/EventAttendees/EventAttendees.module.scss";

function EventAttendees() {
  return (
    <div className={styles["attendee-container"]}>
      <table className={styles["attendee-table"]}>
        <thead>
          <tr>
            <th>User</th>
            <th>Ticket</th>
            <th>Time Register</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <UserProfile
                username="Richard Roe"
                email="richardroe@gmail.com"
              />
            </td>
            <td>Early bird</td>
            <td>{new Date().toLocaleString()}</td>
            <td>
              <Button type="danger" small>
                Kick
              </Button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default EventAttendees;
