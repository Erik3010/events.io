import styles from "pages/Home/Home.module.scss";

import EventCard from "components/Event/EventCard/EventCard";
import HomeHeader from "components/Home/HomeHeader/HomeHeader";

import { useState } from "react";

import CreateEventModal from "components/Event/CreateEventModal/CreateEventModal";
import Default from "containers/Default";

function Home() {
  const [showCreateEventModal, setShowCreateEventModal] = useState(false);

  return (
    <Default>
      <HomeHeader onCreateEvent={() => setShowCreateEventModal(true)} />
      <div className={styles["event-container"]}>
        {Array(20)
          .fill()
          .map((item, index) => {
            return <EventCard key={index} />;
          })}
      </div>

      <CreateEventModal
        show={showCreateEventModal}
        onClose={() => setShowCreateEventModal(false)}
      />
    </Default>
  );
}

export default Home;
