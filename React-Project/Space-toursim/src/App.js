import { Switch, Route, Redirect } from "react-router-dom";

import "./App.css";
import Home from "./pages/Home";
import FirstDesc from "./pages/FirstDesc";
import SecondDesc from "./pages/SecondDesc";
import ThirdDesc from "./pages/ThirdDesc";
import FourthDesc from "./pages/FourthDesc";
import FirstCrew from "./pages/FirstCrew";
import SecondCrew from "./pages/SecondCrew";
import ThirdCrew from "./pages/ThirdCrew";
import FourthCrew from "./pages/FourthCrew";
import FirstTech from "./pages/FirstTech";
import SecondTech from "./pages/SecondTech";
import ThirdTech from "./pages/ThirdTech";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" exact>
          <Redirect to="/home" />
        </Route>
        <Route path="/home">
          <Home />
        </Route>
        <Route path="/destination/moon">
          <FirstDesc />
        </Route>
        <Route path="/destination/mars">
          <SecondDesc />
        </Route>
        <Route path="/destination/europa">
          <ThirdDesc />
        </Route>
        <Route path="/destination/titan">
          <FourthDesc />
        </Route>
        <Route path="/crew/douglas">
          <FirstCrew />
        </Route>
        <Route path="/crew/mark">
          <SecondCrew />
        </Route>
        <Route path="/crew/victor">
          <ThirdCrew />
        </Route>
        <Route path="/crew/ansari">
          <FourthCrew />
        </Route>
        <Route path="/technology/launch">
          <FirstTech />
        </Route>
        <Route path="/technology/space">
          <SecondTech />
        </Route>
        <Route path="/technology/capsule">
          <ThirdTech />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
