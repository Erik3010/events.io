import Default from "containers/Default";

function Registration() {
  return (
    <Default>
      <div>
        <div className="registration-header">
          <div className="registration-header-title">
            <h1>Vue Conference</h1>
            <div className="registration-header-subtitle">
              Order Date <span>{new Date().toLocaleString()}</span>
            </div>
          </div>
        </div>
      </div>
    </Default>
  );
}

export default Registration;
