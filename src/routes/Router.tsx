import { BrowserRouter, Route, Switch } from "react-router-dom";
import Trello from "../Trello";
import Coin from "./Coin";
import Coins from "./Coins";
import HomePage from "./HomePage";
import BoxMotions from "./BoxMotions";
import Motions from "./Motions";
import Slider from "./Slider";
import Card from "./Card";
import Layout from "./Layout";
import Headers from "../components/Headers";

function Router() {
  return (
    <BrowserRouter>
      <Headers />
      <Switch>
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
          <HomePage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default Router;
