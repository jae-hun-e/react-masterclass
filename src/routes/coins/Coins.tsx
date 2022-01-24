import { Link } from "react-router-dom";
import styled from "styled-components";
import { useQuery } from "react-query";
import { fetchCoins } from "../../coinApi";
import { Helmet } from "react-helmet";
import { ReactQueryDevtools } from "react-query/devtools";

interface CoinProps {
  id: string;
  name: string;
  symbol: string;
  rank: number;
  is_new: boolean;
  is_active: boolean;
  type: string;
}

function Coins() {
  const { isLoading: loading, data: coins } = useQuery<CoinProps[]>(
    "allCoins",
    fetchCoins
  );

  return (
    <>
      <Container>
        <Helmet>
          <title>Coin</title>
        </Helmet>
        <Header>
          <Title>코인</Title>
        </Header>
        {loading ? (
          <Loader>Loading...</Loader>
        ) : (
          <CoinsList>
            {coins?.slice(0, 100).map((coin) => (
              <Coin key={coin.id}>
                {/* //! Link의 to에 데이터를 담아서 보내면 다음 페이지로 넘어갈 때 data도 같이 보내 줄 수 있다. */}
                <Link
                  to={{
                    pathname: `coin/${coin.id}`,
                    state: { name: coin.name },
                  }}
                >
                  <Img
                    src={`https://cryptoicon-api.vercel.app/api/icon/${coin.symbol.toLowerCase()}`}
                  />
                  {coin.name} &rarr;
                </Link>
              </Coin>
            ))}
          </CoinsList>
        )}
      </Container>
      {/* //! 이걸 사용해서 캐시에 뭐가 저장되어있는지 확인 할 수 있다 */}
      <ReactQueryDevtools initialIsOpen={true} />
    </>
  );
}
export default Coins;

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

const CoinsList = styled.ul``;

const Coin = styled.li`
  background-color: ${(props) => props.theme.cardBgColor};
  color: ${(props) => props.theme.textColor};
  border-radius: 15px;
  margin-bottom: 10px;
  a {
    display: flex;
    align-items: center;
    padding: 20px;
    transition: color 0.2s ease-in;
  }
  &:hover {
    a {
      color: ${(props) => props.theme.accentColor};
    }
  }
`;

const Img = styled.img`
  width: 35px;
  height: 35px;
  margin-right: 10px;
`;