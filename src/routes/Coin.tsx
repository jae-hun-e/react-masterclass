import { useLocation, useParams } from "react-router";
import styled from "styled-components";
import { useEffect, useState } from "react";
import { Switch, useRouteMatch, Route, Link } from "react-router-dom";
import Price from "./Price";
import Chart from "./Chart";
import { fetchCoinInfo, fetchCoinPrice } from "../api";
import { useQuery } from "react-query";

const Container = styled.div`
  padding: 0px 20px;
  max-width: 480px;
  margin: 0 auto;
`;

const Header = styled.header`
  height: 15vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Title = styled.h1`
  font-size: 48px;
  color: ${(props) => props.theme.accentColor};
`;

const Loader = styled.span`
  text-align: center;
  display: block;
`;

const Overview = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: rgba(0, 0, 0, 0.5);
  padding: 10px 20px;
  border-radius: 10px;
`;
const OverviewItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  span:first-child {
    font-size: 10px;
    font-weight: 400;
    text-transform: uppercase;
    margin-bottom: 5px;
  }
`;
const Description = styled.p`
  margin: 20px 0px;
`;

const Tabs = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  margin: 25px 0px;
  gap: 10px;
`;

// ! 들어와있는지 아닌지 isActive으로 boolean값으로 받아옴
const Tab = styled.span<{ isActive: boolean }>`
  text-align: center;
  text-transform: uppercase;
  font-size: 12px;
  font-weight: 400;
  background-color: rgba(0, 0, 0, 0.5);
  padding: 7px 0px;
  border-radius: 10px;
  color: ${(props) =>
    props.isActive ? props.theme.accentColor : props.theme.textColor};
  a {
    display: block;
  }
`;

interface CoinProps {
  coinId: string;
}

interface StateProps {
  name: string;
}

// ! TS의 장점이면서 불편한게 타입을 모두 알려주야한다.
// ! API로 받는 정보들이 어떤게 있는지 console.log로 찍어서 object안의 key: value 타입을 모두 지정해줘야한다
// ! 다행인 점은 뒤에서 이런짓거리 안할 수 있는 방법을알려준다 (자동으로 타입 생성)
interface InfoData {
  id: "string";
  name: "string";
  symbol: "string";
  rank: "number";
  is_new: "boolean";
  is_active: "boolean";
  type: "string";
  //! 콘솔창에서 array도 object로 표시된다 필요한 값이라면 따로 interface를 만들어서 타입을설명해줘야함
  // tags: "object";
  // team: "object";
  description: "string";
  message: "string";
  open_source: "boolean";
  started_at: "string";
  development_status: "string";
  hardware_wallet: "boolean";
  proof_type: "string";
  org_structure: "string";
  hash_algorithm: "string";
  // links: "object";
  // links_extended: "object";
  // whitepaper: "object";
  first_data_at: "string";
  last_data_at: "string";
}

interface PriceData {
  id: "string";
  name: "string";
  symbol: "string";
  rank: "number";
  circulating_supply: "number";
  total_supply: "number";
  max_supply: "number";
  beta_value: "number";
  first_data_at: "string";
  last_updated: "string";
  quotes: {
    USD: {
      ath_date: string;
      ath_price: number;
      market_cap: number;
      market_cap_change_24h: number;
      percent_change_1h: number;
      percent_change_1y: number;
      percent_change_6h: number;
      percent_change_7d: number;
      percent_change_12h: number;
      percent_change_15m: number;
      percent_change_24h: number;
      percent_change_30d: number;
      percent_change_30m: number;
      percent_from_price_ath: number;
      price: number;
      volume_24h: number;
      volume_24h_change_24h: number;
    };
  };
}

function Coin() {
  const { coinId } = useParams<CoinProps>();
  //!여기서 <>안의 타입은 state에 대한 타입이다!!  등호 왼쪽에 들어갈 값의 타입을 알려주는것임
  const { state } = useLocation<StateProps>();
  // const [loading, setLoading] = useState(true);
  // console.log(state.name);
  // const [info, setInfo] = useState<InfoData>(); //! 초기값을 빈객체로하면 빈객체만들어갈 수 있다. 그래서 초기값도 지정해줘야함
  // const [priceInfo, setPriceInfo] = useState<PriceData>();

  // useEffect(() => {
  //   (async () => {
  //     const infoData = await (
  //       await fetch(`https://api.coinpaprika.com/v1/coins/${coinId}`)
  //     ).json();
  //     console.log(infoData);
  //     const priceData = await (
  //       await fetch(`https://api.coinpaprika.com/v1/tickers/${coinId}`)
  //     ).json();
  //     console.log(priceData);
  //     setInfo(infoData);
  //     setPriceInfo(priceData);
  //     setLoading(false);
  //   })();
  // }, [coinId]); //! coinId는 이 component가 생성될때 1번만 생기고 안 변하므로 []과 기능적으로 같아진다.

  const { isLoading: infoLoding, data: info } = useQuery<InfoData>(
    ["info", coinId],
    () => fetchCoinInfo(coinId)
  );
  const { isLoading: tickersLoading, data: priceInfo } = useQuery<PriceData>(
    ["tichers", coinId],
    () => fetchCoinPrice(coinId)
  );
  const loading = infoLoding || tickersLoading;

  const priceMatch = useRouteMatch("/:coinId/price");
  const chartMatch = useRouteMatch("/:coinId/chart");
  // console.log(priceMatch);
  // console.log(chartMatch);

  return (
    <Container>
      <Header>
        <Title>
          {state?.name ? state.name : loading ? "Loading..." : info?.name}
        </Title>
      </Header>
      {loading ? (
        <Loader>Loading...</Loader>
      ) : (
        <>
          <Overview>
            <OverviewItem>
              <span>Rank:</span>
              <span>{info?.rank}</span>
            </OverviewItem>
            <OverviewItem>
              <span>Symbol:</span>
              <span>${info?.symbol}</span>
            </OverviewItem>
            <OverviewItem>
              <span>Open Source:</span>
              <span>{info?.open_source ? "Yes" : "No"}</span>
            </OverviewItem>
          </Overview>
          <Description>{info?.description}</Description>
          <Overview>
            <OverviewItem>
              <span>Total Suply:</span>
              <span>{priceInfo?.total_supply}</span>
            </OverviewItem>
            <OverviewItem>
              <span>Max Supply:</span>
              <span>{priceInfo?.max_supply}</span>
            </OverviewItem>
          </Overview>
          <Tabs>
            <Tab isActive={chartMatch !== null}>
              <Link to={`/${coinId}/chart`}>Chart</Link>
            </Tab>
            <Tab isActive={priceMatch !== null}>
              <Link to={`/${coinId}/price`}>Price</Link>
            </Tab>
          </Tabs>
          {/* //! 탭을 위한 라우터 만들기 */}
          <Switch>
            {/* //! :coinId 와 ${coinId} 둘다 작동한다 react-router 덕분에 변수도 인식한다 */}
            <Route path={`/:coinId/price`}>
              <Price />
            </Route>
            <Route path={`/${coinId}/chart`}>
              <Chart />
            </Route>
          </Switch>
        </>
      )}
    </Container>
  );
}
export default Coin;
