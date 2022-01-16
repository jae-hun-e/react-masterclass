import { BrowserRouter, Route, Switch } from "react-router-dom";
import Motion from "./Motion";
import Home from "./Home";
import Slider from "./Slider";

function Routers() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/slider">
          <Slider />
        </Route>
        <Route path="/box">
          <Motion />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default Routers;
