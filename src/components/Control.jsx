import styled from 'styled-components';

const ControlButton = styled.button`
    all: unset; 
    padding: 8px 0;
    width: 100%;
    box-shadow: 0px 0px 3px rgba(231, 76, 60, 0.5);
    border-radius: 5px;

    font-family: Roboto;
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 16px;
    color: #FFFFFF;
    text-transform: uppercase;
    text-align: center;
    cursor: pointer;

    background: ${props => props.id === 'eat' ? '#E74C3C' 
        : props.id === 'drink' ? '#3498DB' 
        : props.id === 'relax' ? '#E67E22' 
        : '#95A5A6'};
    
    &:disabled {
        cursor: default;
        opacity: 0.6;
    }
`

const Control = ({ title, id, complete, handleControlButton }) => {
    return (
        <ControlButton id={id} disabled={complete ? 'disabled' : null} onClick={() => handleControlButton(id)}>{title}</ControlButton>
    )
}

export default Control;