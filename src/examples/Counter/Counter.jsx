import "./counter.css"
import { useState } from "react";


export function Counter(){

    const [count, setCount] = useState(0);

    function handleIncrement(){
        setCount(count + 1);
    }

    function handleDecrement(){

        if(count === 0){
            return;
        }
        setCount(count - 1);
    }

    return(
        <>
            <h1>Counter {count}</h1>
            <div className="counterBtn">
                <button onClick={handleDecrement} >-</button>
                <button onClick={handleIncrement} >+</button>
            </div>
        </>
        
    );
}