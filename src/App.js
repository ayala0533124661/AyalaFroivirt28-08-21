
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Favorites from "./Component/homePage/Favorites";

import Header from "./Pages/Header";
import HomePage from "./Pages/HomePage";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route exact={true} path="/" component={HomePage} />
          <Route path="/favorites" component={Favorites} />
        </Switch>
      </Router >
    </div>
  );
}

export default App;
