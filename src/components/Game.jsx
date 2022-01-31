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

            &:disabled {
                cursor: default;
                opacity: 0.6;
                transform: scale(1);
            }
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

    const initControls = [
        {id: 'eat', title: 'Есть', complete: false},
        {id: 'drink', title: 'Пить', complete: false},
        {id: 'relax', title: 'Отдохнуть', complete: false},
        {id: 'play', title: 'Играть', complete: false}
    ]

    const [params, setParams] = useState(initParams);
    const [controls, setControls] = useState(initControls);

    const correctParam = (arr, id, value) => {
        for (let i = 0; i < arr.length; i += 1) {
            if(arr[i].id === id) {
                if (arr[i].value + value <= 100 && arr[i].value + value >= 0) {
                    arr[i].value += value
                } else if(arr[i].value + value > 100) {
                    arr[i].value = 100
                }
            }
        }
    }

    const handleControlButton = (id) => {   
        let newParams = [...params];

        if (id === 'eat') {
            correctParam(newParams, 'hunger', 10)
            correctParam(newParams, 'health', 1)
        }

        if (id === 'drink') {
            correctParam(newParams, 'thirst', 10)
            correctParam(newParams, 'health', 1)
        }

        if (id === 'relax') {
            correctParam(newParams, 'fatigue', 10)
            correctParam(newParams, 'thirst', -1)
            correctParam(newParams, 'hunger', -1)
        }

        if (id === 'play') {
            correctParam(newParams, 'thirst', -20)
            correctParam(newParams, 'hunger', -10)
        }
                
        setParams(newParams);
    }

    useEffect(() => {
        let newControls = [...controls];
        for(let i = 0; i < params.length; i += 1) {
            for (let j = 0; j < newControls.length; j += 1) {
                if (params[i].value >= 100 && params[i].id === 'hunger' && newControls[j].id === 'eat') {
                    newControls[j].complete = true 
                } 

                if (params[i].value < 100 && params[i].id === 'hunger' && newControls[j].id === 'eat') {
                    newControls[j].complete = false 
                }



                if (params[i].value >= 100 && params[i].id === 'thirst' && newControls[j].id === 'drink') {
                    newControls[j].complete = true 
                } 

                if (params[i].value < 100 && params[i].id === 'thirst' && newControls[j].id === 'drink') {
                    newControls[j].complete = false 
                }

                if (params[i].value >= 100 && params[i].id === 'fatigue' && newControls[j].id === 'relax') {
                    newControls[j].complete = true 
                } 

                if (params[i].value < 100 && params[i].id === 'fatigue' && newControls[j].id === 'relax') {
                    newControls[j].complete = false 
                }
                
            }
        }
        setControls(newControls);
    }, [params])

    return (
        <GameContainer>
            <ParameterList params={params} />
            <ControlList controls={controls} handleControlButton={handleControlButton} />
        </GameContainer>
    )
}

export default Game;