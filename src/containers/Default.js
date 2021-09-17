import Header from "components/Basic/Header/Header";

function Default({ children }) {
  return (
    <div>
      <Header />

      <div className="default-container">
        <div className="container">{children}</div>
      </div>
    </div>
  );
}

export default Default;
