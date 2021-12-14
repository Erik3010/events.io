import styles from "pages/Registration/Registration.module.scss";

import Default from "containers/Default/Default";

import { ReactComponent as UserGroup } from "assets/icons/user-group-solid.svg";
import { ReactComponent as Ticket } from "assets/icons/ticket-solid.svg";
import { ReactComponent as ShieldCheck } from "assets/icons/shield-check-solid.svg";
import Button from "components/Basic/Button/Button";

import RegistrationSummary from "components/Registration/RegistrationSummary/RegistrationSummary";
import RegistrationStepperItem from "components/Registration/RegistrationStepperItem/RegistrationStepperItem";
import RegistrationHeader from "components/Registration/RegistrationHeader/RegistrationHeader";
import RegistrationCardHeader from "components/Registration/RegistrationCardHeader/RegistrationCardHeader";
import RegistrationConfirmation from "components/Registration/RegistrationConfirmation/RegistrationConfirmation";

import AttendeeForm from "components/Registration/AttendeeForm/AttendeeForm";
import RegistrationConfiguration from "components/Registration/RegistrationConfiguration/RegistrationConfiguration";

function Registration() {
  return (
    <Default>
      <div className={styles["registration"]}>
        <header className={styles["registration__header"]}>
          <RegistrationHeader />
          <div className={styles["registration__stepper"]}>
            <RegistrationStepperItem
              icon={<UserGroup width={16} height={16} />}
              stepCount={1}
              title="Attendee Info"
              hasLine={true}
            />
            <RegistrationStepperItem
              icon={<Ticket width={16} height={16} />}
              stepCount={2}
              title="Event Configuration"
              disabled={true}
              hasLine={true}
            />
            <RegistrationStepperItem
              icon={<ShieldCheck width={16} height={16} />}
              stepCount={3}
              title="Confirmation"
              disabled={true}
            />
          </div>
        </header>
        <div className={styles["registration__body"]}>
          <div className={styles["card"]}>
            <RegistrationCardHeader
              icon={<UserGroup width={18} height={18} />}
              title="Attendee Info"
            >
              Fill you infomation. So we can show correct information to the
              event organizer
            </RegistrationCardHeader>
            <div className={styles["card__body"]}>
              <AttendeeForm />
              {/* <RegistrationConfiguration /> */}
              {/* <RegistrationConfirmation /> */}
            </div>
            <div className={styles["card__actions"]}>
              <div>
                <Button type="secondary">Back</Button>
              </div>
              <div className={styles["card__actions--right"]}>
                <Button type="primary">Next</Button>
              </div>
            </div>
          </div>
          <RegistrationSummary />
        </div>
      </div>
    </Default>
  );
}

export default Registration;
