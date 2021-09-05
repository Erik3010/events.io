import { BrowserRouter, Switch, Route } from "react-router-dom";

import Home from "pages/Home/Home";
import Login from "pages/Login/Login";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/login" component={Login} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
