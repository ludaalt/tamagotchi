import ParameterList from './ParameterList';
import ControlList from './ControlList';

import styled from 'styled-components';

const GameContainer = styled.div`
    width: 860px;
    padding: 30px;
    background: #FFFFFF;
    border: 3px solid yellow;    
    display: flex;
    justify-content: space-between;
    
    ul {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        list-style: none;
        padding: 20px;
        box-shadow: inset 0px 0px 3px rgba(0, 0, 0, 0.7);
        width: 45%;
    }
`

const Game = () => {
    const params = [['Здоровье', 'health'], ['Жажда', 'thirst'], ['Голод', 'hunger'], ['Усталость', 'fatigue']];
    const controls = [['Есть', 'eat'], ['Пить', 'drink'], ['Отдохнуть', 'relax'], ['Играть', 'play']];

    return (
        <GameContainer>
            <ParameterList params={params} />
            <ControlList controls={controls} />
        </GameContainer>
    )
}

export default Game;