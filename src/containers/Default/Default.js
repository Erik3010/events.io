import styles from "containers/Default/Default.module.scss";
import Header from "components/Basic/Header/Header";

function Default({ children }) {
  return (
    <div>
      <Header />
      <div className={styles.container}>
        <div className="container">{children}</div>
      </div>
    </div>
  );
}

export default Default;
