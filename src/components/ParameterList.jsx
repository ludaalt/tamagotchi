import Parameter from "./Parameter";

const ParameterList = ({ params }) => {
    return (
        <ul>
            {params && params.map((item, index) => 
                <li key={index}>
                    <Parameter title={item[0]} id={item[1]} value={50}/>
                </li>
            )}
        </ul>
    )
}

export default ParameterList;