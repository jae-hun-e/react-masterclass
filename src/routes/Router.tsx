import { BrowserRouter, Route, Switch } from "react-router-dom";
import Coin from "./Coin";
import Coins from "./Coins";
import Header from "../components/Header";
import HomePage from "./HomePage";

function Router() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path="/coinhome:coinId">
          <Coin />
        </Route>
        <Route path="/coinhome">
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
