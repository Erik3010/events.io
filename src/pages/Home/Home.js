import styles from "pages/Home/Home.module.scss";

import EventCard from "components/Event/EventCard/EventCard";
import Header from "components/Basic/Header/Header";
import HomeHeader from "components/Home/HomeHeader/HomeHeader";

import CreateEventModal from "components/Event/CreateEventModal/CreateEventModal";

function Home() {
  return (
    <div>
      <Header />
      <div className={styles["home-container"]}>
        <div className="container">
          <HomeHeader />
          <div className={styles["event-container"]}>
            {Array(20)
              .fill()
              .map((item, index) => {
                return <EventCard key={index} />;
              })}
          </div>
        </div>
      </div>

      <CreateEventModal />
    </div>
  );
}

export default Home;
