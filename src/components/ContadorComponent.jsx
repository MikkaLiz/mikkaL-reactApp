import { useState } from "react";

const ContadorComponent = () =>{
    const [count, setCount] = useState(1);
    
    const sumar = () => {
        setCount(count+1)
        console.log(count)
    };
    
    const restart = () => {
        setCount(count-1)
        console.log(count)
    };
    return (
        <div>
            <button type="button" onClick={restart}>-</button>
            <button type="button" >VALOR {count}</button>
            <button type="button" onClick={sumar}>+</button>
        </div>
    )
}
export default ContadorComponent;