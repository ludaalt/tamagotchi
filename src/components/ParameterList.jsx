import Parameter from "./Parameter";

const ParameterList = ({ params }) => {
    return (
        <ul>
            {params && params.map((item, index) => 
                <li key={index}>
                    <Parameter title={item.title} id={item.id} value={item.value}/>
                </li>
            )}
        </ul>
    )
}

export default ParameterList;