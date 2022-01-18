import ParameterList from './ParameterList';

import styled from 'styled-components';

const GameContainer = styled.div`
    width: 860px;
    height: 355px;
    padding: 30px;

    background: #FFFFFF;
    `

const Game = () => {
    return (
        <GameContainer>
            <ParameterList />

        </GameContainer>
    )
}

export default Game;