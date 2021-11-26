import styles from "components/Event/CreateEventForm/CreateEventForm.module.scss";

import Input from "components/Basic/Input/Input";
import Button from "components/Basic/Button/Button";

import cx from "classnames";

function CreateEventForm() {
  const submitEventHandler = (e) => {
    e.preventDefault();
  };

  return (
    <form
      className={cx(styles["form"], styles["form--stacked"])}
      onSubmit={(e) => submitEventHandler(e)}
    >
      <Input type="text" label="Name" />
      <div
        className={cx(
          styles["form__input-group"],
          styles["form__input-group--inline"]
        )}
      >
        <Input type="date" label="Date" />
        <Input type="time" label="Time" />
      </div>
      <Input type="text" label="Location" />
      <div className="form__actions">
        <Button type="primary">Create Event</Button>
      </div>
    </form>
  );
}

export default CreateEventForm;
