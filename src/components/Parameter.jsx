const Parameter = ({id, title, value}) => {
    return (
        <>
            <label for={ id }>{ title }</label>
            <progress id={ id } max="100" value={ value }>{ value } %</progress>
        </>
    )
}

export default Parameter;