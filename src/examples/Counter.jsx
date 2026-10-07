import { useState } from "react"

function MyButtonCount(){

    const [count, setCount] = useState(0);

    function handleClick(){
        setCount(count + 1);
    }

    return(
        <button onClick={handleClick}>Clicked me {count} times</button>
    )
}

export default MyButtonCount;