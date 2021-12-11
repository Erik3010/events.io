import styles from "components/Registration/RegistrationConfirmation/RegistrationConfirmation.module.scss";

import TicketBadge from "components/Registration/TicketBadge/TicketBadge";
import RegistrationSection from "components/Registration/RegistrationSection/RegistrationSection";

function RegistrationConfirmation() {
  return (
    <div className={styles["registration-section-container"]}>
      <RegistrationSection
        title="Attendee Info"
        stackVertical={true}
        withBorder={true}
      >
        <div className={styles["registration-detail-row"]}>
          <div className={styles["registration-detail-item"]}>
            <p>First Name</p>
            <h4>John</h4>
          </div>
          <div className={styles["registration-detail-item"]}>
            <p>Last Name</p>
            <h4>Doe</h4>
          </div>
        </div>
        <div className={styles["registration-detail-row"]}>
          <div className={styles["registration-detail-item"]}>
            <p>Email</p>
            <h4>johndoe123@gmail.com</h4>
          </div>
          <div className={styles["registration-detail-item"]}>
            <p>Phone</p>
            <h4>+629028310939</h4>
          </div>
        </div>
      </RegistrationSection>

      <RegistrationSection title="Ticket Choosed" withBorder={true}>
        <div className={styles["registration-section-ticket"]}>
          <div className={styles["registration-section-ticket-content"]}>
            <div
              className={styles["registration-section-ticket-content-title"]}
            >
              <h4>Early Bird</h4>
              <TicketBadge>Amount</TicketBadge>
            </div>
            <div
              className={
                styles["registration-section-ticket-content-description"]
              }
            >
              30 tickets left
            </div>
          </div>
          <div className={styles["registration-section-ticket-info"]}>
            <div className={styles["registration-section-ticket-info-price"]}>
              $20.00
            </div>
          </div>
        </div>
      </RegistrationSection>

      <RegistrationSection
        title="Additional Workshop"
        stackVertical={true}
        withBorder={true}
      >
        <div className={styles["registration-section-workshop"]}>
          {Array(5)
            .fill("")
            .map((_, index) => {
              return (
                <div
                  key={index}
                  className={styles["registration-section-workshop-item"]}
                >
                  <div
                    className={
                      styles["registration-section-workshop-item-content"]
                    }
                  >
                    <h4>Workshop 1</h4>
                    <p>Evan You</p>
                  </div>
                  <div
                    className={
                      styles["registration-section-workshop-item-info"]
                    }
                  >
                    <h4>$100</h4>
                    <p>+10% tax</p>
                  </div>
                </div>
              );
            })}
        </div>
      </RegistrationSection>

      {/* <div className={styles["registration-section"]}>
        <div className={styles["registration-section-title"]}>
          <h4>Attendee Info</h4>
        </div>
        <div className={styles["registration-section-content"]}>
          <div className={styles["registration-section-attendee"]}>
            <div className={styles["registration-detail-row"]}>
              <div className={styles["registration-detail-item"]}>
                <p>First Name</p>
                <h4>John</h4>
              </div>
              <div className={styles["registration-detail-item"]}>
                <p>Last Name</p>
                <h4>Doe</h4>
              </div>
            </div>
            <div className={styles["registration-detail-row"]}>
              <div className={styles["registration-detail-item"]}>
                <p>Email</p>
                <h4>johndoe123@gmail.com</h4>
              </div>
              <div className={styles["registration-detail-item"]}>
                <p>Phone</p>
                <h4>+629028310939</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles["registration-section"]}>
        <div className={styles["registration-section-title"]}>
          <h4>Ticket Choosed</h4>
        </div>
        <div className={styles["registration-section-content"]}>
          <div className={styles["registration-section-ticket"]}>
            <div className={styles["registration-section-ticket-content"]}>
              <div
                className={styles["registration-section-ticket-content-title"]}
              >
                <h4>Early Bird</h4>
                <TicketBadge>Amount</TicketBadge>
              </div>
              <div
                className={
                  styles["registration-section-ticket-content-description"]
                }
              >
                30 tickets left
              </div>
            </div>
            <div className={styles["registration-section-ticket-info"]}>
              <div className={styles["registration-section-ticket-info-price"]}>
                $20.00
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles["registration-section"]}>
        <div className={styles["registration-section-title"]}>
          <h4>Additional Workshop</h4>
        </div>
        <div className={styles["registration-section-content"]}>
          <div className={styles["registration-section-workshop"]}>
            {Array(5)
              .fill("")
              .map((_, index) => {
                return (
                  <div
                    key={index}
                    className={styles["registration-section-workshop-item"]}
                  >
                    <div
                      className={
                        styles["registration-section-workshop-item-content"]
                      }
                    >
                      <h4>Workshop 1</h4>
                      <p>Evan You</p>
                    </div>
                    <div
                      className={
                        styles["registration-section-workshop-item-info"]
                      }
                    >
                      <h4>$100</h4>
                      <p>+10% tax</p>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </div> */}
    </div>
  );
}

export default RegistrationConfirmation;
