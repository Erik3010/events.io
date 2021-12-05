import styles from "components/Registration/AttendeeForm/AttendeeForm.module.scss";

import Input from "components/Basic/Input/Input";

function AttendeeForm() {
  return (
    <form className={styles["form"]} onSubmit={(e) => e.preventDefault()}>
      <div className={styles["form__group"]}>
        <Input type="text" label="First Name" autoComplete="off" />
        <Input type="text" label="Last Name" autoComplete="off" />
      </div>
      <Input type="email" label="Email" autoComplete="off" />
      <Input type="tel" label="Phone" autoComplete="off" />
    </form>
  );
}

export default AttendeeForm;
