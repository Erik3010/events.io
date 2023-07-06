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
import { useState, useMemo, useCallback } from "react";

const registrationStepComponent = {
  attendeeInfo: AttendeeForm,
  configuration: RegistrationConfiguration,
  confirmation: RegistrationConfirmation,
};

function Registration() {
  const [step, setStep] = useState(0);
  const StepComponent = useMemo(() => {
    const availableSteps = Object.keys(registrationStepComponent);
    const currentStep = availableSteps[step];

    return registrationStepComponent[currentStep];
  }, [step]);

  const nextStep = useCallback(
    (increment = 1) =>
      () => {
        const nextIndex = step + increment;

        if (
          nextIndex < 0 ||
          nextIndex > Object.keys(registrationStepComponent).length - 1
        ) {
          return;
        }

        setStep(nextIndex);
      },
    [step]
  );

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
              disabled={step !== 0}
              hasLine={true}
            />
            <RegistrationStepperItem
              icon={<Ticket width={16} height={16} />}
              stepCount={2}
              title="Event Configuration"
              disabled={step !== 1}
              hasLine={true}
            />
            <RegistrationStepperItem
              icon={<ShieldCheck width={16} height={16} />}
              stepCount={3}
              title="Confirmation"
              disabled={step !== 2}
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
              <StepComponent />
              {/* <AttendeeForm /> */}
              {/* <RegistrationConfiguration /> */}
              {/* <RegistrationConfirmation /> */}
            </div>
            <div className={styles["card__actions"]}>
              <div>
                <Button type="secondary" onClick={nextStep(-1)}>
                  Back
                </Button>
              </div>
              <div className={styles["card__actions--right"]}>
                <Button type="primary" onClick={nextStep()}>
                  Next
                </Button>
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
