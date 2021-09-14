import styles from "pages/Home/Home.module.scss";

import EventCard from "components/Event/EventCard/EventCard";
import Header from "components/Basic/Header/Header";
import HomeHeader from "components/Home/HomeHeader/HomeHeader";

import { useState } from "react";

import CreateEventModal from "components/Event/CreateEventModal/CreateEventModal";

function Home() {
  const [showCreateEventModal, setShowCreateEventModal] = useState(false);

  return (
    <div>
      <Header />
      <div className={styles["home-container"]}>
        <div className="container">
          <HomeHeader onCreateEvent={() => setShowCreateEventModal(true)} />
          <div className={styles["event-container"]}>
            {Array(20)
              .fill()
              .map((item, index) => {
                return <EventCard key={index} />;
              })}
          </div>
        </div>
      </div>

      <CreateEventModal
        show={showCreateEventModal}
        onClose={() => setShowCreateEventModal(false)}
      />
    </div>
  );
}

export default Home;
