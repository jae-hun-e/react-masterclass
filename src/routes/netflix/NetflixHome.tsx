import { BrowserRouter, Route, Switch } from "react-router-dom";
import Movies from "./Movies";
import NetflixHeader from "../../components/NetflixHeader";
import Search from "./Search";
import Tv from "./Tv";
import styled from "styled-components";

function NetflixHome() {
  return (
    <Container>
      <BrowserRouter>
        <NetflixHeader />
        <Switch>
          <Route path="/netflix/movies">
            <Movies />
          </Route>
          <Route path="/netflix/tv">
            <Tv />
          </Route>
          <Route path="/netflix/search">
            <Search />
          </Route>
        </Switch>
      </BrowserRouter>
    </Container>
  );
}

export default NetflixHome;

const Container = styled.div`
  width: 100vw;
  height: 150vh;
  background-color: RGB(249, 250, 252);
`;
