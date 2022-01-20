import Control from "./Control";

const ControlList = ({ controls, handleControlButton }) => {
    return (
        <ul>
            {controls && controls.map((item, index) => 
                <li key={index}>
                    <Control 
                        title={item.title} 
                        id={item.id} 
                        handleControlButton={handleControlButton} 
                        complete={item.complete} 
                    />
                </li>
            )}
        </ul>
    )
}

export default ControlList;