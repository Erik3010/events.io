import styles from "components/Registration/AttendeeForm/AttendeeForm.module.scss";

import Input from "components/Basic/Input/Input";

function AttendeeForm() {
  return (
    <form
      className={styles["attendee-form"]}
      onSubmit={(e) => e.preventDefault()}
    >
      <div className={styles["attendee-form-group"]}>
        <Input type="text" label="First Name" autoComplete="off" />
        <Input type="text" label="Last Name" autoComplete="off" />
      </div>
      <Input type="email" label="Email" autoComplete="off" />
      <Input type="tel" label="Phone" autoComplete="off" />
    </form>
  );
}

export default AttendeeForm;
