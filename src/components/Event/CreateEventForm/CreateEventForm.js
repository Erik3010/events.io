import styles from "components/Event/CreateEventForm/CreateEventForm.module.scss";

import Input from "components/Basic/Input/Input";
import Button from "components/Basic/Button/Button";

function CreateEventForm() {
  const submitEventHandler = (e) => {
    e.preventDefault();
  };

  return (
    <div className={styles["create-event-form-container"]}>
      <form
        className={styles["create-event-form"]}
        onSubmit={(e) => submitEventHandler(e)}
      >
        <Input type="text" label="Name" />
        <Input type="date" label="Date" />
        <Button type="primary">Create Event</Button>
      </form>
    </div>
  );
}

export default CreateEventForm;
