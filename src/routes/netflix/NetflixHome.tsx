import { Route, Switch } from "react-router-dom";
import Movies from "./Movies";
import NetflixHeader from "../../components/NetflixHeader";
import Search from "./Search";
import Tv from "./Tv";
import styled from "styled-components";

function NetflixHome() {
  return (
    <Container>
      <NetflixHeader />
      <Switch>
        <Route path={["/netflix/movies", "/netflix/movies/:movieId"]}>
          <Movies />
        </Route>
        <Route path="/netflix/tv">
          <Tv />
        </Route>
        <Route path="/netflix/search">
          <Search />
        </Route>
      </Switch>
    </Container>
  );
}

export default NetflixHome;

const Container = styled.div`
  position: relative;
  width: 100vw;
  height: 150vh;
  background-color: ${(prop) => prop.theme.black.darker};
  color: ${(prop) => prop.theme.white.lighter};
`;
