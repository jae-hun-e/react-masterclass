import { BrowserRouter, Route, Switch } from "react-router-dom";
import Motion from "./Motion";
import Home from "./Home";
import Slider from "./Slider";
import Card from "./Card";
import Layout from "./Layout";

function Routers() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/card">
          <Card />
        </Route>
        <Route path="/layout">
          <Layout />
        </Route>
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
