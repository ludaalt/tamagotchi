import ParameterList from './ParameterList';
import ControlList from './ControlList';

import { useState, useEffect } from 'react';
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
    
    const initParams = [
        {id: 'health', title: 'Здоровье', value: 50},
        {id: 'thirst', title: 'Жажда', value: 50},
        {id: 'hunger', title: 'Голод', value: 50},
        {id: 'fatigue', title: 'Усталость', value: 50}
    ]

    const controls = [
        {id: 'eat', title: 'Есть', complete: false},
        {id: 'drink', title: 'Пить', complete: false},
        {id: 'relax', title: 'Отдохнуть', complete: false},
        {id: 'play', title: 'Играть', complete: false}
    ]

    const [params, setParams] = useState(initParams);
    // const [controls, setControls] = useState(initControls);

    const handleControlButton = (id) => {   
        let newParams = [...params];
        // let newControls = [...controls];

        id === 'eat' && newParams.map(item => item.id === 'hunger' && item.value < 100 ? item.value += 10 
        : item.id === 'hunger' && item.value === 100 ? alert('Я наелся!')
        : item.id === 'health' && item.value < 100 ? item.value += 1 
        : item.id === 'health' && item.value === 100 ? alert('Я совершенно здоров!') 
        : null) 

        id === 'drink' && newParams.map(item => item.id === 'thirst' && item.value < 100 ? item.value += 10 
        : item.id === 'thirst' && item.value === 100 ? alert('Я напился!')
        : item.id === 'health' && item.value < 100 ? item.value += 1 
        : item.id === 'health' && item.value === 100 ? alert('Я совершенно здоров!') 
        : null) 

        id === 'play' && newParams.map(item => item.id === 'thirst' && item.value > 30 ? item.value -= 30 
        : item.id === 'thirst' && item.value < 30 ? alert('Хочу пить')
        : item.id === 'hunger' && item.value > 10 ? item.value -= 10 
        : item.id === 'hunger' && item.value < 10 ? alert('Хочу есть') 
        : null) 
        

        
        setParams(newParams);
        // setControls(newControls);
    }

    // useEffect(() => {
    //     params.forEach((item) => {
    //         if(item.id === 'thirst' && item.value > 100) alert('Я напился!') 
    //     })

    // }, [params])
    


    return (
        <GameContainer>
            <ParameterList params={params} />
            <ControlList controls={controls} handleControlButton={handleControlButton} />
        </GameContainer>
    )
}

export default Game;