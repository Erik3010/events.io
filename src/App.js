import { BrowserRouter, Switch, Route } from "react-router-dom";

import Home from "pages/Home/Home";
import Login from "pages/Login/Login";
import EventDetail from "pages/EventDetail/EventDetail";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/" exact component={Home} />
        <Route path="/event/:slug" component={EventDetail} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
