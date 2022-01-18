import Control from "./Control";

const ControlList = ({ controls }) => {
    return (
        <ul>
            {
                controls && controls.map((item, index) => 
                    <li key={ index }>
                        <Control title={ item } />
                    </li>
                )
            }
        </ul>
    )
}

export default ControlList;