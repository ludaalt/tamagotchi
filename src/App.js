import Game from './components/Game';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #E5E5E5;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Title = styled.h1`
  font-family: Roboto, sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 32px;
  line-height: 37px;
  margin-bottom: 50px;
`;

const App = () => {
  return (
    <Wrapper>
      <Title>MiniGame</Title>
      <Game />    
    </Wrapper>
  );
}

export default App;
