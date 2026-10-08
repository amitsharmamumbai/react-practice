import { useState } from 'react';

let initialCounters = [
  0, 0, 0
];

export function InitialCounters(){

    const[counter, setCounter] = useState(
        initialCounters
    )

    function handleCounters(index){

        const nextCount = counter.map((c, i)=>{
            if(i === index){
                return c + 1;
            }
            else{
                return c
            }
        })

        setCounter(nextCount);

    }

    return(
        <ul>
            {counter.map((count , index) =>
                <li key={index}>{count} {' '}<button onClick={()=> {handleCounters(index)}}>+1</button></li>
            )}
            
        </ul>
    )
}