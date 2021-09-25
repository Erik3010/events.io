import Avatar from "components/Basic/Avatar/Avatar";
import Button from "components/Basic/Button/Button";
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
              <div className={styles["attendee-user"]}>
                <Avatar color="accent">RO</Avatar>
                <div className={styles["attendee-user-content"]}>
                  <h4>Richard Roe</h4>
                  <p>richard@gmail.com</p>
                </div>
              </div>
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
