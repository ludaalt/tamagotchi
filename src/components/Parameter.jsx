import styled from 'styled-components';

const ProgressLabel = styled.label`
    margin-bottom: 5px;
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 16px;
`;

const Progress = styled.progress`
    margin-bottom: 10px;
    width: 100%;
    background-color: #fff;
    border: 1px solid #34495E;
    filter: drop-shadow(0px 0px 3px rgba(0, 0, 0, 0.5));
    

    &::-webkit-progress-bar {
        background-color: #fff;
    }

    &::-webkit-progress-value {
        background: ${props => props.id === 'health' ? '#E74C3C' 
        : props.id === 'thirst' ? '#3498DB' 
        : props.id === 'hunger' ? '#E67E22' 
        : '#95A5A6'};
    }
`

const Parameter = ({id, title, value}) => {
    return (
        <>
            <ProgressLabel htmlFor={id}> {title}: </ProgressLabel>
            <Progress id={id} max="100" value={value}> {value} % </Progress>
        </>
    )
}

export default Parameter;