import styles from "pages/Registration/Registration.module.scss";

import Default from "containers/Default";

import cx from "classnames";

import { ReactComponent as User } from "assets/icons/user-solid.svg";
import { ReactComponent as UserGroup } from "assets/icons/user-group-solid.svg";
import { ReactComponent as Ticket } from "assets/icons/ticket-solid.svg";
import { ReactComponent as ShieldCheck } from "assets/icons/shield-check-solid.svg";
import Input from "components/Basic/Input/Input";
import Button from "components/Basic/Button/Button";

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
            <div className={styles["registration-stepper-item"]}>
              <div className={styles["registration-stepper-item-icon"]}>
                <UserGroup width={16} height={16} />
              </div>
              <div className={styles["registration-stepper-item-content"]}>
                <p>Step 1</p>
                <h3>Attendee Info</h3>
              </div>
            </div>
            <div className={styles["registration-stepper-line"]}></div>
            <div className={styles["registration-stepper-item"]}>
              <div className={styles["registration-stepper-item-icon"]}>
                <Ticket width={16} height={16} />
              </div>
              <div className={styles["registration-stepper-item-content"]}>
                <p>Step 2</p>
                <h3>Choose Ticket</h3>
              </div>
            </div>
            <div className={styles["registration-stepper-line"]}></div>
            <div
              className={cx(
                styles["registration-stepper-item"],
                styles["disabled"]
              )}
            >
              <div className={styles["registration-stepper-item-icon"]}>
                <ShieldCheck width={16} height={16} />
              </div>
              <div className={styles["registration-stepper-item-content"]}>
                <p>Step 3</p>
                <h3>Confirmation</h3>
              </div>
            </div>
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
          <div className={styles["registration-summary"]}>
            <div className={styles["registration-summary-title"]}>
              <div className={styles["registration-summary-title-tagline"]}>
                Registration ID
              </div>
              <div className={styles["registration-summary-title-id"]}>
                #ORD12093819
              </div>
            </div>
            <div className={styles["registration-summary-content"]}>
              <div className={styles["registration-summary-list"]}>
                <div className={styles["registration-summary-list-title"]}>
                  Registration Information
                </div>
                <div className={styles["registration-summary-list-content"]}>
                  <div
                    className={styles["registration-summary-list-content-item"]}
                  >
                    <span>Date</span>
                    <span
                      className={
                        styles["registration-summary-list-content-item-value"]
                      }
                    >
                      {new Intl.DateTimeFormat("en-US", {
                        year: "numeric",
                        month: "short",
                        day: "numeric",
                      }).format(new Date())}
                    </span>
                  </div>
                  <div
                    className={styles["registration-summary-list-content-item"]}
                  >
                    <span>Time</span>
                    <span
                      className={
                        styles["registration-summary-list-content-item-value"]
                      }
                    >
                      10:10
                    </span>
                  </div>
                  <div
                    className={styles["registration-summary-list-content-item"]}
                  >
                    <span>Total People</span>
                    <span
                      className={
                        styles["registration-summary-list-content-item-value"]
                      }
                    >
                      2
                    </span>
                  </div>
                </div>
              </div>
              <div className={styles["registration-summary-divider"]}></div>
              <div className={styles["registration-summary-list"]}>
                <div className={styles["registration-summary-list-title"]}>
                  Tickets
                </div>
                <div className={styles["registration-summary-list-content"]}>
                  <div
                    className={styles["registration-summary-list-content-item"]}
                  >
                    <span>
                      1 <span className={styles["times"]}>x</span> Early bid
                    </span>
                    <span
                      className={
                        styles["registration-summary-list-content-item-value"]
                      }
                    >
                      $10.00
                    </span>
                  </div>
                  <div
                    className={styles["registration-summary-list-content-item"]}
                  >
                    <span>
                      2 <span className={styles["times"]}>x</span> Early bid
                    </span>
                    <span
                      className={
                        styles["registration-summary-list-content-item-value"]
                      }
                    >
                      $20.00
                    </span>
                  </div>
                </div>
              </div>
              <div className={styles["registration-summary-divider"]}></div>
              <div className={styles["registration-summary-list"]}>
                <div className={styles["registration-summary-list-content"]}>
                  <div
                    className={styles["registration-summary-list-content-item"]}
                  >
                    <span>Subtotal</span>
                    <span
                      className={
                        styles["registration-summary-list-content-item-value"]
                      }
                    >
                      $30.00
                    </span>
                  </div>
                  <div
                    className={styles["registration-summary-list-content-item"]}
                  >
                    <span>Fee</span>
                    <span
                      className={cx(
                        styles["registration-summary-list-content-item-value"],
                        "text-error"
                      )}
                    >
                      -$10.00
                    </span>
                  </div>
                </div>
              </div>
              <div className={styles["registration-summary-divider"]}></div>
              <div className={styles["registration-summary-list"]}>
                <div className={styles["registration-summary-list-content"]}>
                  <div
                    className={cx(
                      styles["registration-summary-list-content-item"],
                      styles["registration-summary-list-content-item-gtotal"]
                    )}
                  >
                    <span>Grandtotal</span>
                    <span
                      className={
                        styles["registration-summary-list-content-item-value"]
                      }
                    >
                      $25.00
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Default>
  );
}

export default Registration;
