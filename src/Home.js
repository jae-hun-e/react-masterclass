//! import styled from 'styled-components'와 같은 뜻
const { default: styled } = require("styled-components");

const Container = styled.div`
  background-color: ${(props) => props.theme.bgColor};
`;
const H1 = styled.h1`
  color: ${(props) => props.theme.textColor};
`;

const Home = () => {
  return (
    <Container>
      <H1>hello</H1>
    </Container>
  );
};

export default Home;
