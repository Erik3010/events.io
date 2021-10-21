import styles from "pages/Registration/Registration.module.scss";

import Default from "containers/Default";

import cx from "classnames";

import { ReactComponent as User } from "assets/icons/user-solid.svg";
import { ReactComponent as UserGroup } from "assets/icons/user-group-solid.svg";
import { ReactComponent as Ticket } from "assets/icons/ticket-solid.svg";
import { ReactComponent as ShieldCheck } from "assets/icons/shield-check-solid.svg";
import Button from "components/Basic/Button/Button";

import RegistrationSummary from "components/Registration/RegistrationSummary/RegistrationSummary";
import RegistrationStepperItem from "components/Registration/RegistrationStepperItem/RegistrationStepperItem";
import RegistrationHeader from "components/Registration/RegistrationHeader/RegistrationHeader";
import AttendeeForm from "components/Registration/AttendeeForm/AttendeeForm";
import RegistrationContentHeader from "components/Registration/RegistrationContentHeader/RegistrationContentHeader";
import RegistrationConfiguration from "components/Registration/RegistrationConfiguration/RegistrationConfiguration";

function Registration() {
  return (
    <Default>
      <div className={styles["registration-container"]}>
        <div className={styles["registration-header"]}>
          <RegistrationHeader />
          <div className={styles["registration-stepper"]}>
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
        </div>
        <div className={styles["registration-body"]}>
          <div className={styles["registration-content"]}>
            <RegistrationContentHeader
              icon={<UserGroup width={18} height={18} />}
              title="Attendee Info"
              tagline="Fill you infomation. So we can show correct information to the
                  event organizer"
            />
            <div className={styles["registration-content-body"]}>
              {/* <AttendeeForm /> */}
              <RegistrationConfiguration />
            </div>
            <div className={styles["registration-content-action"]}>
              <div>
                <Button type="secondary">Back</Button>
              </div>
              <div className={styles["right"]}>
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
