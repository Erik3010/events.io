import styles from "components/Registration/RegistrationConfiguration/RegistrationConfiguration.module.scss";

import cx from "classnames";

import RegistrationTicket from "components/Registration/RegistrationTicket/RegistrationTicket";
import RegistrationWorkshopItem from "components/Registration/RegistrationWorkshopItem/RegistrationWorkshopItem";
import RegistrationSection from "components/Registration/RegistrationSection/RegistrationSection";

import { useState } from "react";

function RegistrationConfiguration() {
  const [workshops, setWorkshops] = useState([]);

  const onWorkshopChangeHandler = (e) => {
    if (e.target.checked) {
      setWorkshops([...workshops, +e.target.value]);
    } else {
      setWorkshops(
        workshops.filter((workshop) => workshop !== +e.target.value)
      );
    }
  };

  return (
    <div className={cx(styles["sections"], styles["sections--stacked"])}>
      {/* Ticket section */}
      <RegistrationSection
        title="Your tickets"
        subtitle="Choose your ticket in here. The ticket price based on the ticket
            type you've choosed."
        stackHorizontal={true}
        horizontalOverflow={true}
      >
        {Array(10)
          .fill("")
          .map((_, index) => (
            <RegistrationTicket key={index} isActive={index === 1} />
          ))}
      </RegistrationSection>
      {/* End ticket section */}

      {/* Workshop section */}
      <RegistrationSection
        title="Additional Workshops"
        subtitle="Choose workshop that you want to join."
        stackVertical={true}
      >
        {Array(5)
          .fill("")
          .map((_, index) => (
            <RegistrationWorkshopItem
              key={index}
              active={workshops.includes(index)}
              value={index}
              onChange={(e) => onWorkshopChangeHandler(e)}
            />
          ))}
      </RegistrationSection>
      {/* End workshop section */}
    </div>
  );
}

export default RegistrationConfiguration;
