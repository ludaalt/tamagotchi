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

        *:hover {
            opacity: 0.9;
            transform: scale(1.01);
        }
    }
`

const Game = () => {
    const params = [
        {id: 'health', title: 'Здоровье', value: 50},
        {id: 'thirst', title: 'Жажда', value: 50},
        {id: 'hunger', title: 'Голод', value: 50},
        {id: 'fatigue', title: 'Усталость', value: 50}
    ]

    const controls = [
        {id: 'eat', title: 'Есть'},
        {id: 'drink', title: 'Пить'},
        {id: 'relax', title: 'Отдохнуть'},
        {id: 'play', title: 'Играть'}
    ]

    return (
        <GameContainer>
            <ParameterList params={params} />
            <ControlList controls={controls} />
        </GameContainer>
    )
}

export default Game;