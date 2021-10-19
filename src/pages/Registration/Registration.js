import styles from "pages/Registration/Registration.module.scss";

import Default from "containers/Default";

import cx from "classnames";

import { ReactComponent as User } from "assets/icons/user-solid.svg";
import { ReactComponent as UserGroup } from "assets/icons/user-group-solid.svg";
import { ReactComponent as Ticket } from "assets/icons/ticket-solid.svg";
import { ReactComponent as ShieldCheck } from "assets/icons/shield-check-solid.svg";
import Input from "components/Basic/Input/Input";
import Button from "components/Basic/Button/Button";

import Summary from "components/Registration/RegistrationSummary/RegistrationSummary";
import RegistrationStepperItem from "components/Registration/RegistrationStepperItem/RegistrationStepperItem";

function Registration() {
  return (
    <Default>
      <div className={styles["registration-container"]}>
        <div className={styles["registration-header"]}>
          <div className={styles["registration-header-title"]}>
            <h1>Vue Conference</h1>
            <div className={styles["registration-header-subtitle"]}>
              <div className={styles["registration-sub-content"]}>
                Order Date:{" "}
                <span>
                  {new Intl.DateTimeFormat("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  }).format(new Date())}
                </span>
              </div>
              <div className={styles["separator"]}>|</div>
              <div className={styles["registration-sub-content"]}>
                Location: <span>Online Meeting (Zoom)</span>
              </div>
            </div>
          </div>
          <div className={styles["registration-stepper"]}>
            <RegistrationStepperItem
              icon={<UserGroup width={16} height={16} />}
              stepCount={1}
              title="Attendee Info"
            />
            <div className={styles["registration-stepper-line"]}></div>
            <RegistrationStepperItem
              icon={<Ticket width={16} height={16} />}
              stepCount={2}
              title="Choose Ticket"
              disabled={true}
            />
            <div className={styles["registration-stepper-line"]}></div>
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
            <div className={styles["registration-content-header"]}>
              <div className={styles["registration-content-header-icon"]}>
                <UserGroup width={18} height={18} />
              </div>
              <div className={styles["registration-content-header-group"]}>
                <h4 className={styles["registration-content-header-title"]}>
                  Attendee Info
                </h4>
                <p className={styles["registration-content-header-subtitle"]}>
                  Fill you infomation. So we can show correct information to the
                  event organizer
                </p>
              </div>
            </div>
            <div className={styles["registration-content-body"]}>
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
                <div className={styles["attendee-form-action"]}>
                  <div>
                    <Button type="secondary">Back</Button>
                  </div>
                  <div className={styles["right"]}>
                    <Button type="primary">Next</Button>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <Summary />
        </div>
      </div>
    </Default>
  );
}

export default Registration;
