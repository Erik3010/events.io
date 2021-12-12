import styles from "components/Registration/RegistrationConfirmation/RegistrationConfirmation.module.scss";

import TicketBadge from "components/Registration/TicketBadge/TicketBadge";
import RegistrationSection from "components/Registration/RegistrationSection/RegistrationSection";

import AttendeeSummary from "components/Registration/AttendeeSummary/AttendeeSummary";
import TicketSummary from "components/Registration/TicketSummary/TicketSummary";
import WorkshopSummary from "components/Registration/WorkshopSummary/WorkshopSummary";

import cx from "classnames";

function RegistrationConfirmation() {
  return (
    <div
      className={cx(styles["sections"], styles["sections--stacked-vertical"])}
    >
      <RegistrationSection
        title="Attendee Info"
        stackVertical={true}
        withBorder={true}
      >
        <AttendeeSummary />
      </RegistrationSection>

      <RegistrationSection title="Ticket Choosed" withBorder={true}>
        <TicketSummary />
      </RegistrationSection>

      <RegistrationSection
        title="Additional Workshop"
        stackVertical={true}
        withBorder={true}
      >
        <WorkshopSummary />
      </RegistrationSection>
    </div>
  );
}

export default RegistrationConfirmation;
