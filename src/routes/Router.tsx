import { BrowserRouter, Route, Switch } from "react-router-dom";
import Trello from "../Trello";
import Coin from "./coins/Coin";
import Coins from "./coins/Coins";
import Home from "./Home";
import Motions from "./motions/Motions";
import Headers from "../components/Headers";
import Card from "./motions/Card";
import Layout from "./motions/Layout";
import Slider from "./motions/Slider";
import BoxMotions from "./motions/BoxMotions";

import NetflixHome from "./netflix/NetflixHome";

function Router() {
  return (
    <BrowserRouter>
      <Headers />
      <Switch>
        <Route path="/netflix">
          <NetflixHome />
        </Route>
        <Route path="/motion/card">
          <Card />
        </Route>
        <Route path="/motion/layout">
          <Layout />
        </Route>
        <Route path="/motion/slider">
          <Slider />
        </Route>
        <Route path="/motion/box">
          <BoxMotions />
        </Route>
        <Route path="/motion">
          <Motions />
        </Route>
        <Route path="/trello">
          <Trello />
        </Route>
        <Route path="/coin/:coinId">
          <Coin />
        </Route>
        <Route path="/coin">
          <Coins />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default Router;
